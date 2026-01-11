import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const DtoC = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [message, setMessage] = useState('');
  const [micActive, setMicActive] = useState(false);
  const [flamesOut, setFlamesOut] = useState([false, false, false, false, false]);
  const [fadeOut, setFadeOut] = useState(false);
  
  const ytPlayerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const micStreamRef = useRef(null);
  const rafIdRef = useRef(null);

  const BDAY = { month: 1, day: 12, year: 2006 };
  const BDAY_NAME = "Carina";
  const SG_TZ = "Asia/Singapore";

  // Get Singapore date parts
  const getSGDateParts = () => {
    try {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: SG_TZ,
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).formatToParts(new Date());

      const dd = parseInt(parts.find(p => p.type === "day").value, 10);
      const mm = parseInt(parts.find(p => p.type === "month").value, 10);
      const yy = parseInt(parts.find(p => p.type === "year").value, 10);
      return { dd, mm, yy };
    } catch (e) {
      const d = new Date();
      return { dd: d.getDate(), mm: d.getMonth() + 1, yy: d.getFullYear() };
    }
  };

  // Check if it's birthday week (Jan 12-18)
  const isBirthdayWindowSG = () => {
    const now = new Date();
    let sgYear;
    
    try {
      const y = new Intl.DateTimeFormat("en-GB", { 
        timeZone: SG_TZ, 
        year: "numeric" 
      }).format(now);
      sgYear = parseInt(y, 10);
    } catch (e) {
      sgYear = now.getFullYear();
    }

    const start = new Date(`${sgYear}-01-12T00:00:00`);
    const end = new Date(`${sgYear}-01-19T00:00:00`);

    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: SG_TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).formatToParts(now);

    const get = (t) => parts.find(p => p.type === t)?.value;
    const sgNow = new Date(`${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}:${get("second")}`);

    return sgNow >= start && sgNow < end;
  };

  // Calculate age with ordinal suffix
  const getAgeText = () => {
    const ordinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const { yy, mm, dd } = getSGDateParts();
    let age = yy - BDAY.year;
    if (mm < BDAY.month || (mm === BDAY.month && dd < BDAY.day)) age -= 1;
    return ordinal(age);
  };

  // Load YouTube IFrame API
  useEffect(() => {
    if (!isBirthdayWindowSG()) return;

    setShowIntro(true);

    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      ytPlayerRef.current = new window.YT.Player('ytPlayer', {
        events: {
          onReady: () => {
            // iOS-safe: unlock on first interaction
            const unlockYT = () => {
              if (ytPlayerRef.current) {
                ytPlayerRef.current.playVideo();
              }
            };
            window.addEventListener('touchstart', unlockYT, { once: true });
            window.addEventListener('click', unlockYT, { once: true });
          }
        }
      });
    };

    // Spawn hearts effect on mount
    if (typeof window.spawnHearts === 'function') {
      window.spawnHearts(28);
      setTimeout(() => window.spawnHearts(22), 450);
      setTimeout(() => window.spawnHearts(18), 900);
    }

    return () => {
      stopMic();
    };
  }, []);

  // Microphone blow detection
  const stopMic = () => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = null;
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(t => t.stop());
      micStreamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  const startMic = async () => {
    try {
      setMessage("listening… blow at your mic now 😮‍💨");
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      micStreamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      const source = audioCtxRef.current.createMediaStreamSource(micStreamRef.current);
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;
      source.connect(analyserRef.current);

      const data = new Uint8Array(analyserRef.current.fftSize);
      let cooldown = 0;

      const loop = () => {
        analyserRef.current.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const x = (data[i] - 128) / 128;
          sum += x * x;
        }
        const rms = Math.sqrt(sum / data.length);
        const THRESH = 0.12;

        if (cooldown > 0) cooldown--;

        if (rms > THRESH && cooldown === 0 && !flamesOut.every(f => f)) {
          putOutOne();
          cooldown = 25;
        }

        rafIdRef.current = requestAnimationFrame(loop);
      };
      loop();
    } catch (err) {
      setMessage("mic blocked 😭 enable mic permission then try again.");
      stopMic();
      setMicActive(false);
    }
  };

  const putOutOne = () => {
    const onIndices = flamesOut.map((out, i) => out ? -1 : i).filter(i => i >= 0);
    if (onIndices.length > 0) {
      const randomIndex = onIndices[Math.floor(Math.random() * onIndices.length)];
      const newFlames = [...flamesOut];
      newFlames[randomIndex] = true;
      setFlamesOut(newFlames);

      if (typeof window.spawnHearts === 'function') window.spawnHearts(10);

      if (newFlames.every(f => f)) {
        setMessage("ALL OUT!! ok make a wish, birthday girl 🎂💗");
        if (ytPlayerRef.current) {
          try {
            ytPlayerRef.current.setVolume(Math.max(ytPlayerRef.current.getVolume(), 28));
          } catch (e) {}
        }
      } else {
        setMessage("wah strong sia, keep going 😂");
      }
    }
  };

  const handleMicToggle = () => {
    if (flamesOut.every(f => f)) {
      setMessage("already out liao 😂 press enter ♡");
      return;
    }

    if (micActive) {
      setMessage("mic off.");
      stopMic();
      setMicActive(false);
    } else {
      startMic();
      setMicActive(true);
    }
  };

  const handleUnmute = () => {
    if (!ytPlayerRef.current) return;
    try {
      ytPlayerRef.current.unMute();
      ytPlayerRef.current.seekTo(20, true);
      ytPlayerRef.current.playVideo();
      setMessage("ok… Steal My Girl 🥹💗");
    } catch (e) {
      setMessage("music player loading...");
    }
  };

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
      if (typeof window.spawnHearts === 'function') window.spawnHearts(18);
    }, 700);
  };

  if (!showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center justify-center p-6">
        <Helmet>
          <title>Special Page | Ape Champs Swim</title>
        </Helmet>
        <div className="text-center text-white/70">
          <p className="text-lg">This page is only available during a special time 💜</p>
        </div>
      </div>
    );
  }

  const ageText = getAgeText();
  const name = new URLSearchParams(window.location.search).get('to') || BDAY_NAME;

  return (
    <>
      <Helmet>
        <title>Happy Birthday {name} 🎂 | Ape Champs Swim</title>
      </Helmet>

      <div className={`bday ${fadeOut ? 'bday-fadeout' : ''}`}>
        <div className="bday-card">
          <div className="bday-top">
            <div className="pill">🎂 12 Jan</div>
            <div className="pill">for <strong>{name}</strong></div>
          </div>

          <h1 id="bdayTitle" className="bday-title">
            Happy {ageText} Birthday, <span className="bday-name">{name}</span> 🎉
          </h1>
          <p className="bday-sub">Make a wish, then blow out the candles.</p>

          {/* Cake */}
          <div className="cake-wrap">
            <div className="cake">
              <div className="cake-top"></div>
              <div className="cake-mid"></div>
              <div className="cake-bot"></div>

              <div className="candles">
                {flamesOut.map((isOut, i) => (
                  <div key={i} className="candle" data-i={i}>
                    <span className={`flame ${isOut ? 'off' : ''}`}></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bday-actions">
            <button onClick={handleMicToggle} className="btn">
              {micActive ? 'Disable mic ✋' : 'Enable mic 🎤'}
            </button>
            <button onClick={handleUnmute} className="btn">Unmute music 🔊</button>
            <button onClick={handleEnter} className="btn primary">enter ♡</button>
          </div>

          {message && <p className="bday-msg">{message}</p>}
        </div>

        {/* YouTube Player */}
        <iframe
          id="ytPlayer"
          width="0"
          height="0"
          src="https://www.youtube.com/embed/3nHgx6lhcQY?enablejsapi=1&start=20&autoplay=0&mute=1&loop=1&playlist=3nHgx6lhcQY"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ display: 'none' }}
        />
      </div>

      <style>{`
        /* Birthday Intro */
        .bday {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          background:
            radial-gradient(1200px 600px at 20% 10%, rgba(255,106,162,.28), transparent 60%),
            radial-gradient(1200px 600px at 80% 30%, rgba(255,215,120,.22), transparent 60%),
            linear-gradient(160deg, #0b0b10, #1a0b1e);
          animation: bdayIn .7s ease;
        }

        .bday-fadeout {
          animation: bdayOut .7s ease forwards;
        }

        @keyframes bdayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bdayOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        .bday-card {
          width: min(860px, 92vw);
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(0,0,0,.30);
          backdrop-filter: blur(10px);
          border-radius: 26px;
          padding: 24px;
          box-shadow: 0 20px 70px rgba(0,0,0,.4);
          text-align: center;
          position: relative;
        }

        .bday-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .pill {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 14px;
          color: rgba(255,255,255,.85);
        }

        .bday-title {
          font-size: clamp(28px, 4vw, 46px);
          margin: 16px 0 10px;
          color: white;
        }

        .bday-name {
          color: #ff6aa2;
        }

        .bday-sub {
          color: rgba(255,255,255,.75);
          margin-bottom: 20px;
        }

        .bday-actions {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .btn {
          border: none;
          padding: 12px 20px;
          font-size: 15px;
          border-radius: 999px;
          cursor: pointer;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          color: white;
          font-weight: 500;
          transition: all .2s;
        }

        .btn:hover {
          background: rgba(255,255,255,.18);
          transform: translateY(-1px);
        }

        .btn.primary {
          background: linear-gradient(135deg, #ff7aa2, #ffd36a);
          color: #1a0014;
          font-weight: 600;
        }

        .btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,122,162,.4);
        }

        .bday-msg {
          margin-top: 14px;
          color: rgba(255,255,255,.8);
          font-size: 14px;
          min-height: 20px;
        }

        /* Cake */
        .cake-wrap {
          display: grid;
          place-items: center;
          margin: 18px 0 8px;
        }

        .cake {
          width: 260px;
          height: 200px;
          position: relative;
          filter: drop-shadow(0 18px 25px rgba(0,0,0,.35));
        }

        .cake-top, .cake-mid, .cake-bot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.14);
        }

        .cake-top {
          top: 62px;
          width: 220px;
          height: 40px;
          background: rgba(255,170,210,.22);
        }

        .cake-mid {
          top: 92px;
          width: 240px;
          height: 52px;
          background: rgba(255,255,255,.08);
        }

        .cake-bot {
          top: 136px;
          width: 260px;
          height: 56px;
          background: rgba(255,220,160,.12);
        }

        .candles {
          position: absolute;
          top: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 14px;
        }

        .candle {
          width: 14px;
          height: 62px;
          background: rgba(255,255,255,.16);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 10px;
          position: relative;
        }

        .candle:before {
          content: "";
          position: absolute;
          inset: 8px 4px auto 4px;
          height: 10px;
          border-radius: 8px;
          background: rgba(255,106,162,.35);
        }

        .flame {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 18px;
          border-radius: 50% 50% 50% 50%;
          background: radial-gradient(circle at 35% 35%, rgba(255,255,255,.95), rgba(255,210,120,.75) 45%, rgba(255,106,162,.45) 80%);
          box-shadow: 0 0 18px rgba(255,180,120,.35);
          animation: flicker .12s infinite alternate;
          transition: all .3s;
        }

        @keyframes flicker {
          from { transform: translateX(-50%) rotate(-3deg) scale(1); }
          to { transform: translateX(-50%) rotate(3deg) scale(1.05); }
        }

        .flame.off {
          opacity: 0;
          transform: translateX(-50%) scale(.6);
          animation: none;
        }
      `}</style>
    </>
  );
};

export default DtoC;
