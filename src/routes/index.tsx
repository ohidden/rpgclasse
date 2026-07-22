import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import classes from "../data/classes.json";
import heroImage from "../assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Descubra sua Classe Medieval | RPG de Fantasia",
      },
      {
        name: "description",
        content:
          "Just Roll",
      },
      {
        property: "og:title",
        content: "Descubra sua Classe Medieval | RPG de Fantasia",
      },
      {
        property: "og:description",
        content:
          "Just Roll",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const TOTAL_FACES = classes.length;
const ROLL_DURATION_MS = 2500;
const TICK_MS = 80;

function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const roll = useCallback(() => {
    if (isRolling) return;

    setIsRolling(true);
    setShowResult(false);
    setSelectedIndex(null);

    let tickCount = 0;
    const totalTicks = Math.floor(ROLL_DURATION_MS / TICK_MS);
    const finalIndex = Math.floor(Math.random() * TOTAL_FACES);

    const interval = setInterval(() => {
      tickCount += 1;
      setDisplayIndex(Math.floor(Math.random() * TOTAL_FACES));

      if (tickCount >= totalTicks) {
        clearInterval(interval);
        setDisplayIndex(finalIndex);
        setSelectedIndex(finalIndex);
        setIsRolling(false);
        setShowResult(true);
      }
    }, TICK_MS);
  }, [isRolling]);

  const selectedClass = selectedIndex !== null ? classes[selectedIndex] : null;
  const displayClass = displayIndex !== null ? classes[displayIndex] : null;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Câmara medieval mágica com um dado flutuando"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)]" />
      </div>

      {/* Content */}
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-xs font-medium tracking-widest text-gold uppercase">
            {TOTAL_FACES} classes místicas
          </span>
        </div>

        <h1 className="text-glow mb-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-6xl">
          Descubra sua classe medieval
        </h1>
        <p className="mb-12 max-w-xl text-lg text-muted-foreground sm:text-xl">
          O destino escolherá seu caminho. Role o dado mágico e revele qual
          herói você seria em um mundo de RPG de fantasia.
        </p>

        {/* Dice */}
        <div className="mb-10 flex flex-col items-center gap-6">
          <div
            className={`dice-glow relative flex h-40 w-40 items-center justify-center rounded-3xl border-2 border-gold/60 bg-card/80 backdrop-blur-md transition-transform duration-100 sm:h-52 sm:w-52 ${
              isRolling ? "animate-dice-shake" : ""
            }`}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/10 via-transparent to-ember/10" />
            <span className="relative z-10 font-serif text-6xl font-bold text-gold sm:text-7xl">
              {displayIndex !== null ? displayIndex + 1 : "?"}
            </span>
          </div>

          <button
            onClick={roll}
            disabled={isRolling}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gold px-8 py-4 font-serif text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-gold/25 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:hover:scale-100 sm:px-10 sm:text-xl"
          >
            <span className="relative z-10">
              {isRolling ? "O destino decide..." : "Rolar o dado"}
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
          </button>
        </div>

        {/* Result */}
        {showResult && selectedClass && (
          <div className="card-ornament w-full animate-result-in rounded-2xl border border-gold/30 bg-card/80 p-6 shadow-2xl backdrop-blur-md sm:p-10">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-sm font-medium tracking-widest text-gold uppercase">
                Sua classe é
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-5xl">
              {selectedClass.name}
            </h2>

            <div className="relative mx-auto mb-8 max-w-2xl text-left">
              <p className="border-l-2 border-gold/40 pl-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
                {selectedClass.description}
              </p>
            </div>

            <button
              onClick={roll}
              className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-transparent px-6 py-3 font-medium text-gold transition-colors hover:bg-gold/10"
            >
              <span>Rolar novamente</span>
            </button>
          </div>
        )}

        {/* Preview during rolling */}
        {!showResult && isRolling && displayClass && (
          <div className="mt-4 text-muted-foreground">
            <span className="text-sm tracking-wide">O dado passa por...</span>
            <p className="mt-1 font-serif text-lg text-gold/80">
              {displayClass.name}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-6 text-center text-sm text-muted-foreground">
        <p>
          O destino é uma rolagem de dado. Que a sorte guie sua aventura.
        </p>
      </footer>

      <style>{`
        @keyframes dice-shake {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          10% { transform: rotate(-12deg) translate(-4px, -4px); }
          20% { transform: rotate(10deg) translate(4px, -4px); }
          30% { transform: rotate(-8deg) translate(-4px, 4px); }
          40% { transform: rotate(12deg) translate(4px, 4px); }
          50% { transform: rotate(-6deg) translate(-2px, -2px); }
          60% { transform: rotate(8deg) translate(2px, -2px); }
          70% { transform: rotate(-4deg) translate(-2px, 2px); }
          80% { transform: rotate(6deg) translate(2px, 2px); }
          90% { transform: rotate(-2deg) translate(0, 0); }
        }
        .animate-dice-shake {
          animation: dice-shake 0.5s ease-in-out infinite;
        }
        @keyframes result-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-result-in {
          animation: result-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
