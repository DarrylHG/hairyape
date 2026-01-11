import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_houufy7";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";   // replace with your EmailJS public key

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function calcAge(birthISO = "2006-01-12") {
  const [y, m, d] = birthISO.split("-").map(Number);
  const now = new Date();
  let age = now.getFullYear() - y;
  const beforeBday = (now.getMonth() + 1 < m) || (now.getMonth() + 1 === m && now.getDate() < d);
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

  const allOut = flamesOff.every(Boolean);

  useEffect(() => {
    const existing = document.getElementById("yt-api");
    if (!existing) {
      const tag = document.createElement("script");
      tag.id = "yt-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, []);

  useEffect(() => {
    let audioCtx, analyser, stream, rafId;

    async function startMic() {
      try {
        setMsg("listening… blow at your mic 😮‍💨");
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        stream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        });

        const source = audioCtx.createMediaStreamSource(stream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);

        const data = new Uint8Array(analyser.fftSize);
        let cooldown = 0;

        const loop = () => {
          analyser.getByteTimeDomainData(data);
          let sum = 0;
          for (let i = 0; i < data.length; i++) {
            const x = (data[i] - 128) / 128;
            sum += x * x;
          }
          const rms = Math.sqrt(sum / data.length);
          const THRESH = 0.12;

          if (cooldown > 0) cooldown--;

          if (rms > THRESH && cooldown === 0 && !allOut) {
            setFlamesOff((prev) => {
              const onIdx = prev.map((v, i) => (!v ? i : null)).filter((v) => v !== null);
              if (onIdx.length === 0) return prev;
              const pick = onIdx[Math.floor(Math.random() * onIdx.length)];
              const next = [...prev];
              next[pick] = true;
              return next;
            });
            cooldown = 25;
          }

          rafId = requestAnimationFrame(loop);
        };

        loop();
      } catch {
        setMsg("mic blocked 😭 please allow mic permission then try again.");
        setMicEnabled(false);
      }
    }

    function stopMic() {
      if (rafId) cancelAnimationFrame(rafId);
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (audioCtx) audioCtx.close().catch(() => {});
    }

    if (micEnabled) startMic();
    else stopMic();

    return () => stopMic();
  }, [micEnabled, allOut]);

  useEffect(() => {
    if (allOut) setMsg("ALL OUT!! ok make a wish, birthday girl 🎂💗");
  }, [allOut]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(1200px 600px at 20% 10%, rgba(255,106,162,.28), transparent 60%), radial-gradient(1200px 600px at 80% 30%, rgba(255,215,120,.22), transparent 60%), linear-gradient(160deg, #0b0b10, #1a0b1e)",
      }}
    >
      <iframe
        id="ytPlayer"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/3nHgx6lhcQY?enablejsapi=1&start=20&autoplay=0&mute=1&loop=1&playlist=3nHgx6lhcQY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="bgm"
      />

      <div
        style={{
          width: "min(900px, 92vw)",
          border: "1px solid rgba(255,255,255,.16)",
          background: "rgba(0,0,0,.30)",
          backdropFilter: "blur(10px)",
          borderRadius: 26,
          padding: 24,
          textAlign: "center",
          boxShadow: "0 20px 70px rgba(0,0,0,.4)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, opacity: 0.9 }}>
          <div style={{ border: "1px solid rgba(255,255,255,.16)", borderRadius: 999, padding: "8px 12px" }}>
            🎂 12 Jan
          </div>
          <div style={{ border: "1px solid rgba(255,255,255,.16)", borderRadius: 999, padding: "8px 12px" }}>
            for <strong>{toName}</strong>
          </div>
        </div>

        <h1 style={{ margin: "14px 0 6px", fontSize: "clamp(28px,4vw,46px)" }}>
          Happy {ageText} Birthday, {toName} 🎉
        </h1>
        <p style={{ marginTop: 0, opacity: 0.8 }}>Make a wish, then blow out the candles.</p>

        <div style={{ display: "grid", placeItems: "center", margin: "16px 0 8px" }}>
          <div style={{ width: 260, height: 200, position: "relative", filter: "drop-shadow(0 18px 25px rgba(0,0,0,.35))" }}>
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 62, width: 220, height: 40, borderRadius: 18, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,170,210,.22)" }} />
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 92, width: 240, height: 52, borderRadius: 18, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.08)" }} />
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 136, width: 260, height: 56, borderRadius: 18, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,220,160,.12)" }} />

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
              setMsg("ok… our song now 🥹💗");
            }}
          >
            Unmute music 🔊
          </button>

          <button type="button" className="btn primary" onClick={onEnter}>
            enter ♡
          </button>
        </div>

        <p style={{ marginTop: 10, opacity: 0.85, fontSize: 13 }}>{msg}</p>
      </div>
    </div>
  );
}

export default function DtoC() {
  const toName = useMemo(() => getParam("to", "Carina"), []);
  const fromName = useMemo(() => getParam("from", "Darryl"), []);
  const ageText = useMemo(() => ordinal(calcAge("2006-01-12")), []);

  const [showIntro, setShowIntro] = useState(true);

  const promises = [
    "I’ll communicate properly, even when I’m stressed.",
    "I’ll make time, not excuses.",
    "I’ll be patient and kind, not defensive.",
    "I’ll keep choosing you in the small ways.",
    "I’ll plan cute dates, not just last minute vibes.",
    "I’ll support your goals and hype you up.",
  ];

  const storageKey = "carina_promises_2026";
  const [checked, setChecked] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : Array(promises.length).fill(false);
    } catch {
      return Array(promises.length).fill(false);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const [wish, setWish] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function sendWish(e) {
    e.preventDefault();
    setStatus("");

    const trimmed = wish.trim();
    if (trimmed.length < 3) {
      setStatus("Write a bit more pls 😭");
      return;
    }

    if (
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setStatus("Configure EmailJS template/public key first.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: toName,
          from_name: fromName,
          message: trimmed,
        },
        EMAILJS_PUBLIC_KEY
      );

      setWish("");
      setStatus("Sent 💌 I’ll read it soon.");
    } catch (err) {
      setStatus("Failed to send 😭 try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ padding: "28px 16px", maxWidth: 980, margin: "0 auto" }}>
      {showIntro && (
        <BirthdayIntro
          toName={toName}
          ageText={ageText}
          onEnter={() => setShowIntro(false)}
        />
      )}

      <h1 style={{ margin: "6px 0 10px" }}>My promises to you this year 💗</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        for {toName}, from {fromName}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 16 }}>
        <div style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, padding: 16, background: "rgba(0,0,0,.10)" }}>
          {promises.map((p, i) => (
            <label
              key={i}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                padding: "10px 10px",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 14,
                background: "rgba(255,255,255,.04)",
                margin: "8px 0",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() =>
                  setChecked((prev) => {
                    const next = [...prev];
                    next[i] = !next[i];
                    return next;
                  })
                }
                style={{ marginTop: 3 }}
              />
              <span style={{ opacity: 0.9 }}>{p}</span>
            </label>
          ))}
        </div>

        <div style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, padding: 16, background: "rgba(0,0,0,.10)" }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 18 }}>Type your birthday wish 🎈</h2>
          <p style={{ marginTop: 0, opacity: 0.75, fontSize: 13 }}>
            When you press send, it goes to my email.
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
  );
}
