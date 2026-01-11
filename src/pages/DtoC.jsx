import { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_houufy7";
const EMAILJS_TEMPLATE_ID = "template_8jowva9";
const EMAILJS_PUBLIC_KEY = "Ljt8Jg2sIX11B6RUh";

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function calcAge(birthISO = "2006-01-12") {
  const [y, m, d] = birthISO.split("-").map(Number);
  const now = new Date();
  let age = now.getFullYear() - y;
  const beforeBday = now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d);
  if (beforeBday) age -= 1;
  return age;
}

function getParam(name, fallback = "") {
  try {
    const u = new URL(window.location.href);
    return (u.searchParams.get(name) || fallback).slice(0, 40);
  } catch {
    return fallback;
  }
}

function BirthdayIntro({ toName, ageText, onEnter }) {
  const [micEnabled, setMicEnabled] = useState(false);
  const [msg, setMsg] = useState("");
  const [flamesOff, setFlamesOff] = useState([false, false, false, false, false]);
  const blowCountRef = useRef(0);

  useEffect(() => {
    const existing = document.getElementById("yt-api");
    if (existing) return;
    const tag = document.createElement("script");
    tag.id = "yt-api";
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!micEnabled) return undefined;

    let audioCtx;
    let analyser;
    let stream;
    let rafId;
    let cooldown = 0;

    async function startMic() {
      try {
        setMsg("listening... blow at your mic 😮‍💨");
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        stream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        });

        const source = audioCtx.createMediaStreamSource(stream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);

        const data = new Uint8Array(analyser.fftSize);

        const loop = () => {
          analyser.getByteTimeDomainData(data);
          let sum = 0;
          for (let i = 0; i < data.length; i++) {
            const deviation = data[i] - 128;
            sum += deviation * deviation;
          }
          const rms = Math.sqrt(sum / data.length);

          if (rms > 18 && cooldown <= 0) {
            setFlamesOff((prev) => {
              if (prev.every(Boolean)) return prev;

              if (blowCountRef.current === 0) {
                const remaining = prev
                  .map((off, idx) => (!off ? idx : -1))
                  .filter((idx) => idx >= 0);
                const target = Math.min(remaining.length, 2 + Math.floor(Math.random() * 2));
                const next = [...prev];

                for (let i = 0; i < target; i++) {
                  const pick = Math.floor(Math.random() * remaining.length);
                  const candleIdx = remaining.splice(pick, 1)[0];
                  next[candleIdx] = true;
                }

                blowCountRef.current = 1;
                setMsg("almost there... one more blow!");
                cooldown = 30;
                return next;
              }

              blowCountRef.current = 0;
              setMsg("candles out! make a wish ✨");
              cooldown = 40;
              return prev.map(() => true);
            });
          }

          cooldown = Math.max(cooldown - 1, 0);
          rafId = requestAnimationFrame(loop);
        };

        rafId = requestAnimationFrame(loop);
      } catch (err) {
        setMsg("mic blocked 😭 click the address bar to allow it");
      }
    }

    startMic();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (audioCtx) audioCtx.close();
      setMsg("");
    };
  }, [micEnabled]);

  const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(6px)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 12px",
  };

  const card = {
    width: "min(620px, 100%)",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.18)",
    background: "linear-gradient(145deg, rgba(18,15,30,.95), rgba(10,8,15,.95))",
    boxShadow: "0 24px 50px rgba(0,0,0,.35)",
    padding: 18,
    color: "white",
    textAlign: "center",
  };

  const cakeLayer = (top, width, height, color) => (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top,
        width,
        height,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,.14)",
        background: color,
      }}
    />
  );

  return (
    <div style={overlay}>
      <div style={card}>
        <h1 style={{ margin: "10px 0 6px", fontSize: "clamp(26px,4vw,42px)" }}>
          Happy {ageText} Birthday, {toName} 🎉
        </h1>
        <p style={{ marginTop: 0, opacity: 0.8 }}>Make a wish, then blow out the candles.</p>

        <div style={{ display: "grid", placeItems: "center", margin: "16px 0 8px" }}>
          <div
            style={{
              width: 260,
              height: 200,
              position: "relative",
              filter: "drop-shadow(0 18px 25px rgba(0,0,0,.35))",
            }}
          >
            {cakeLayer(62, 220, 40, "rgba(255,170,210,.22)")}
            {cakeLayer(92, 240, 52, "rgba(255,255,255,.08)")}
            {cakeLayer(136, 260, 56, "rgba(255,220,160,.12)")}

            <div style={{ position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 14 }}>
              {flamesOff.map((off, i) => (
                <div
                  key={i}
                  style={{
                    width: 14,
                    height: 62,
                    borderRadius: 10,
                    background: "rgba(255,255,255,.16)",
                    border: "1px solid rgba(255,255,255,.18)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -18,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 14,
                      height: 18,
                      borderRadius: "50%",
                      opacity: off ? 0 : 1,
                      background:
                        "radial-gradient(circle at 35% 35%, rgba(255,255,255,.95), rgba(255,210,120,.75) 45%, rgba(255,106,162,.45) 80%)",
                      boxShadow: "0 0 18px rgba(255,180,120,.35)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
          <button type="button" className="btn" onClick={() => setMicEnabled((v) => !v)}>
            {micEnabled ? "Disable mic ✋" : "Enable mic 🎤"}
          </button>

          <button
            type="button"
            className="btn"
            onClick={() => {
              const iframe = document.getElementById("ytPlayer");
              if (!iframe) return;
              const cmd = (func, args = []) =>
                iframe.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");
              cmd("seekTo", [20, true]);
              cmd("unMute");
              cmd("playVideo");
              setMsg("ok... our song now 🥹💗");
            }}
          >
            Unmute music 🔊
          </button>

          <button type="button" className="btn primary" onClick={onEnter}>
            enter ♡
          </button>
        </div>

        <p style={{ marginTop: 10, opacity: 0.85, fontSize: 13 }}>{msg}</p>

        <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
          <iframe
            id="ytPlayer"
            title="bgm"
            width="0"
            height="0"
            src="https://www.youtube.com/embed/oC5ZkmFvydk?enablejsapi=1&controls=0&rel=0&playsinline=1&mute=1&loop=1&playlist=oC5ZkmFvydk"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}

export default function DtoC() {
  const toName = useMemo(() => getParam("to", "Carina"), []);
  const fromName = useMemo(() => getParam("from", "Darryl"), []);
  const ageText = useMemo(() => ordinal(calcAge("2006-01-12")), []);

  const [showIntro, setShowIntro] = useState(true);
  const [wish, setWish] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const promises = [
    "I'll communicate properly, even when I'm stressed.",
    "I'll make time, not excuses.",
    "I'll be patient and kind, not defensive.",
    "I'll keep choosing you in the small ways.",
    "I'll plan cute dates, not just last minute vibes.",
    "I'll support your goals and hype you up.",
  ];

  async function sendWish(e) {
    e.preventDefault();
    setStatus("");

    const trimmed = wish.trim();
    if (trimmed.length < 3) {
      setStatus("Write a bit more pls 😭");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: toName,
          message: trimmed,
          email: "noreply@apechampsswim.com.sg",
        },
        EMAILJS_PUBLIC_KEY
      );

      setWish("");
      setStatus("Sent 💌 I'll read it soon.");
    } catch (err) {
      setStatus("Failed to send 😭 try again.");
    } finally {
      setSending(false);
    }
  }

  const pageBg = {
    minHeight: "100vh",
    padding: "28px 16px",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(255,106,162,.28), transparent 60%)," +
      "radial-gradient(1200px 600px at 80% 30%, rgba(255,215,120,.22), transparent 60%)," +
      "linear-gradient(160deg, #0b0b10, #1a0b1e)",
  };

  const container = { maxWidth: 980, margin: "0 auto", color: "white" };

  const card = {
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 18,
    padding: 16,
    background: "rgba(0,0,0,.18)",
    backdropFilter: "blur(8px)",
  };

  return (
    <div style={pageBg}>
      {showIntro && (
        <BirthdayIntro
          toName={toName}
          ageText={ageText}
          onEnter={() => setShowIntro(false)}
        />
      )}

      <div style={container}>
        <h1 style={{ margin: "6px 0 10px" }}>Carina's page 💗</h1>
        <p style={{ opacity: 0.8, marginTop: 0 }}>
          I wrote this properly, not copy paste one.
        </p>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div style={card}>
            <h2 style={{ margin: "0 0 8px", fontSize: 18 }}>My promises to you this year 💗</h2>
            <p style={{ marginTop: 0, opacity: 0.75, fontSize: 13 }}>
              for {toName}, from {fromName}
            </p>

            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              {promises.map((p, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 14,
                    background: "rgba(255,255,255,.05)",
                    padding: "12px 12px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ opacity: 0.7, fontSize: 12, marginBottom: 4 }}>Promise {i + 1}</div>
                  <div style={{ opacity: 0.92 }}>{p}</div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 12, opacity: 0.7, fontSize: 12 }}>
              ps: if I break any of these, you can scold me.
            </p>
          </div>

          <div style={card}>
            <h2 style={{ margin: "0 0 8px", fontSize: 18 }}>Type your birthday wish 🎈</h2>
            <p style={{ marginTop: 0, opacity: 0.75, fontSize: 13 }}>
              When you press send, your wish will come true ✨ (to the best of my ability)
            </p>

            <form onSubmit={sendWish}>
              <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Dear Darryl…"
                rows={7}
                style={{
                  width: "100%",
                  borderRadius: 14,
                  padding: 12,
                  border: "1px solid rgba(255,255,255,.16)",
                  background: "rgba(0,0,0,.22)",
                  color: "white",
                  resize: "vertical",
                  outline: "none",
                }}
              />
              <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
                <button type="submit" className="btn primary" disabled={sending}>
                  {sending ? "Sending..." : "Send 💌"}
                </button>
                <button type="button" className="btn" onClick={() => setWish("")} disabled={sending}>
                  Clear
                </button>
              </div>
              {status && <p style={{ marginTop: 10, opacity: 0.85, fontSize: 13 }}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}