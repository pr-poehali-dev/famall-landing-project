import { useEffect, useState } from "react";

const CAT_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/178d660f-0fbc-45e5-a994-9c9b0ad4f7c5.png";

/* SVG кошка с анимацией лап */
function WalkingCatSVG() {
  return (
    <svg
      width="90"
      height="60"
      viewBox="0 0 90 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Тело */}
      <ellipse cx="45" cy="32" rx="22" ry="14" fill="#c8102e" />

      {/* Голова */}
      <circle cx="70" cy="22" r="12" fill="#c8102e" />

      {/* Уши */}
      <polygon points="62,12 65,4 70,12" fill="#c8102e" />
      <polygon points="70,12 75,4 78,12" fill="#c8102e" />

      {/* Хвост — качается */}
      <path d="M23 38 Q10 30 8 22 Q6 14 12 12" stroke="#c8102e" strokeWidth="4" strokeLinecap="round" fill="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="-8 23 38"
          to="8 23 38"
          dur="0.8s"
          repeatCount="indefinite"
          additive="sum"
        />
      </path>

      {/* Лапа передняя левая */}
      <line x1="58" y1="44" x2="54" y2="56" stroke="#c8102e" strokeWidth="4" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-20 58 44; 20 58 44; -20 58 44"
          dur="0.4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </line>

      {/* Лапа передняя правая */}
      <line x1="66" y1="44" x2="70" y2="56" stroke="#c8102e" strokeWidth="4" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="20 66 44; -20 66 44; 20 66 44"
          dur="0.4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </line>

      {/* Лапа задняя левая */}
      <line x1="30" y1="44" x2="26" y2="56" stroke="#c8102e" strokeWidth="4" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="20 30 44; -20 30 44; 20 30 44"
          dur="0.4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </line>

      {/* Лапа задняя правая */}
      <line x1="38" y1="44" x2="42" y2="56" stroke="#c8102e" strokeWidth="4" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-20 38 44; 20 38 44; -20 38 44"
          dur="0.4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </line>

      {/* Тело покачивается вверх-вниз */}
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0; 0 -2; 0 0"
        dur="0.4s"
        repeatCount="indefinite"
      />
    </svg>
  );
}

/* Сидящая кошка — PNG логотип */
function SittingCat() {
  return (
    <img
      src={CAT_IMG}
      alt="FAMALL"
      draggable={false}
      style={{ width: 80, height: "auto" }}
    />
  );
}

export default function CatWalker() {
  const [phase, setPhase] = useState<"walking" | "sitting" | "done">("walking");
  const [posX, setPosX] = useState(-100);

  /* Двигаем кошку через requestAnimationFrame */
  useEffect(() => {
    const speed = 1.2; // px за кадр
    let x = -100;
    let raf: number;

    const tick = () => {
      x += speed;
      setPosX(x);
      const maxX = window.innerWidth - 100;
      if (x < maxX) {
        raf = requestAnimationFrame(tick);
      } else {
        // Дошла до края — садится
        setPhase("sitting");
        setTimeout(() => setPhase("done"), 14000);
      }
    };

    const startDelay = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 1500);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (phase === "done") return null;

  if (phase === "sitting") {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 12,
          zIndex: 40,
          pointerEvents: "none",
          animation: "catSit 0.4s ease-out forwards",
        }}
      >
        <div style={{ position: "relative" }}>
          {/* Плашка над кошкой */}
          <div
            style={{
              position: "absolute",
              bottom: "100%",
              right: 0,
              marginBottom: 8,
              background: "#1a1a2e",
              color: "white",
              fontSize: 10,
              fontFamily: "IBM Plex Mono, monospace",
              lineHeight: 1.4,
              padding: "8px 12px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              maxWidth: 200,
              whiteSpaceCollapse: "preserve",
            } as React.CSSProperties}
          >
            Ищите товары с нашей кошкой —<br />
            <span style={{ color: "#c8102e", fontWeight: 700 }}>не нарвитесь на подделку</span>
            <div
              style={{
                position: "absolute",
                bottom: -8,
                right: 24,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #1a1a2e",
              }}
            />
          </div>
          <SittingCat />
        </div>
      </div>
    );
  }

  /* Walking phase */
  return (
    <div
      style={{
        position: "fixed",
        bottom: 4,
        left: posX,
        zIndex: 40,
        pointerEvents: "none",
        willChange: "left",
      }}
      aria-hidden="true"
    >
      <WalkingCatSVG />
    </div>
  );
}
