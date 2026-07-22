import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpenText,
  Dices,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Swords,
  TriangleAlert,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import heroImage from "../assets/hero.jpg";
import classes from "../data/classes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Círculo do Destino | Descubra seu arquétipo de RPG" },
      {
        name: "description",
        content:
          "Role o dado do destino e descubra, entre 140 classes, trilhas e linhagens, qual arquétipo medieval guiará sua próxima aventura.",
      },
      {
        property: "og:title",
        content: "Círculo do Destino | Seu arquétipo de RPG",
      },
      {
        property: "og:description",
        content: "Um oráculo medieval com 140 destinos cuidadosamente descritos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const ROLL_DURATION_MS = 1800;
const TICK_MS = 72;
const TOTAL_DESTINIES = classes.length;

function randomIndex(previousIndex: number | null = null) {
  let nextIndex = Math.floor(Math.random() * TOTAL_DESTINIES);

  while (TOTAL_DESTINIES > 1 && nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * TOTAL_DESTINIES);
  }

  return nextIndex;
}

function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);

  const stopRollingTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => stopRollingTimer, [stopRollingTimer]);

  const roll = useCallback(() => {
    if (isRolling) return;

    stopRollingTimer();
    setIsRolling(true);
    setHasRevealed(false);

    const finalIndex = randomIndex(selectedIndex);
    const totalTicks = Math.floor(ROLL_DURATION_MS / TICK_MS);
    let tickCount = 0;

    intervalRef.current = setInterval(() => {
      tickCount += 1;
      setDisplayIndex(randomIndex());

      if (tickCount >= totalTicks) {
        stopRollingTimer();
        setDisplayIndex(finalIndex);
        setSelectedIndex(finalIndex);
        setIsRolling(false);
        setHasRevealed(true);

        window.setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          resultRef.current?.focus({ preventScroll: true });
        }, 220);
      }
    }, TICK_MS);
  }, [isRolling, selectedIndex, stopRollingTimer]);

  const selectedClass = selectedIndex === null ? null : classes[selectedIndex];
  const displayClass = displayIndex === null ? null : classes[displayIndex];
  const storyParagraphs = selectedClass?.descricao.split("\n\n") ?? [];

  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-background text-foreground">
      <a className="skip-link" href="#oraculo">
        Ir para o oráculo
      </a>

      <div className="world-backdrop" aria-hidden="true">
        <img src={heroImage} alt="" width={1920} height={1088} />
        <div className="world-backdrop__veil" />
        <div className="world-backdrop__vignette" />
        <div className="world-backdrop__grain" />
      </div>

      <header className="relative z-20 border-b border-gold/15">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="brand-mark" aria-label="Círculo do Destino — início">
            <span className="brand-mark__sigil" aria-hidden="true">
              <Sparkles size={17} strokeWidth={1.6} />
            </span>
            <span>
              <strong>Círculo</strong>
              <small>do destino</small>
            </span>
          </a>

          <div className="hidden items-center gap-3 text-xs tracking-[0.22em] text-parchment/60 uppercase sm:flex">
            <span className="h-px w-9 bg-gold/30" />
            Edição dos 140 caminhos
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-81px)] w-full max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 lg:px-12 lg:py-24">
          <div className="hero-copy max-w-3xl">
            <div className="eyebrow">
              <span aria-hidden="true" />
              Um oráculo para sua próxima jornada
            </div>

            <h1>
              O dado conhece a lenda
              <em> que você ainda não viveu.</em>
            </h1>

            <p className="hero-copy__lead">
              Entre classes lendárias, trilhas proibidas e linhagens ancestrais, existe um caminho à
              sua espera. Deixe o acaso escrever o primeiro capítulo.
            </p>

            <div className="hero-ledger" aria-label="Detalhes do oráculo">
              <div>
                <strong>{TOTAL_DESTINIES}</strong>
                <span>destinos únicos</span>
              </div>
              <div>
                <strong>3</strong>
                <span>tipos de caminho</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>histórias possíveis</span>
              </div>
            </div>
          </div>

          <div id="oraculo" className="oracle-wrap scroll-mt-8">
            <div className="oracle-card" aria-busy={isRolling}>
              <div className="oracle-card__corner oracle-card__corner--tl" />
              <div className="oracle-card__corner oracle-card__corner--tr" />
              <div className="oracle-card__corner oracle-card__corner--bl" />
              <div className="oracle-card__corner oracle-card__corner--br" />

              <div className="oracle-card__heading">
                <span>A câmara do destino</span>
                <i aria-hidden="true" />
              </div>

              <div className={`d20-stage ${isRolling ? "is-rolling" : ""}`}>
                <div className="d20-aura" aria-hidden="true" />
                <div className="d20" aria-hidden="true">
                  <div className="d20__inner">
                    <span>{displayIndex === null ? "?" : displayIndex + 1}</span>
                    <small>d140</small>
                  </div>
                </div>
              </div>

              <div className="min-h-12 text-center" aria-live="polite">
                {isRolling && displayClass ? (
                  <div className="rolling-name">
                    <span>As páginas revelam</span>
                    <strong>{displayClass.name}</strong>
                  </div>
                ) : (
                  <p className="oracle-instruction">
                    Um gesto. Um número. Um destino para chamar de seu.
                  </p>
                )}
              </div>

              <button className="destiny-button" type="button" onClick={roll} disabled={isRolling}>
                <Dices size={21} aria-hidden="true" />
                <span>{isRolling ? "O destino está em movimento" : "Consultar o destino"}</span>
              </button>

              <p className="oracle-footnote">
                <Sparkles size={12} aria-hidden="true" />
                Cada caminho tem a mesma chance de ser escolhido
              </p>
            </div>
          </div>
        </section>

        {hasRevealed && selectedClass && (
          <section
            ref={resultRef}
            className="revelation-section scroll-mt-8 px-5 pb-20 pt-4 outline-none sm:px-8 sm:pb-28 lg:px-12"
            tabIndex={-1}
            aria-label={`Destino revelado: ${selectedClass.name}`}
          >
            <article className="revelation mx-auto w-full max-w-6xl">
              <header className="revelation__header">
                <div className="revelation__index" aria-hidden="true">
                  {String(selectedIndex + 1).padStart(3, "0")}
                </div>
                <div className="revelation__title">
                  <div className="result-kicker">
                    <span>{selectedClass.categoria}</span>
                    <i />
                    Seu destino foi selado
                  </div>
                  <h2>{selectedClass.name}</h2>
                </div>
                <div className="revelation__seal" aria-hidden="true">
                  <ShieldCheck size={28} strokeWidth={1.35} />
                </div>
              </header>

              <div className="revelation__body">
                <blockquote>{selectedClass.resumo}</blockquote>

                <div className="revelation__grid">
                  <section className="chronicle-card">
                    <h3>
                      <BookOpenText size={18} aria-hidden="true" />
                      Crônica do arquétipo
                    </h3>
                    <div className="chronicle-copy">
                      {storyParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  <div className="traits-column">
                    <section className="trait-card trait-card--strength">
                      <h3>
                        <Swords size={17} aria-hidden="true" />
                        Marcas de excelência
                      </h3>
                      <ul>
                        {selectedClass.pontos_fortes.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="trait-card trait-card--weakness">
                      <h3>
                        <TriangleAlert size={17} aria-hidden="true" />
                        Provações do caminho
                      </h3>
                      <ul>
                        {selectedClass.pontos_fracos.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>

                <div className="revelation__actions">
                  <button type="button" onClick={roll} disabled={isRolling}>
                    <RotateCcw size={16} aria-hidden="true" />
                    Consultar outro caminho
                  </button>
                  <span>Probabilidade: 1 em {TOTAL_DESTINIES}</span>
                </div>
              </div>
            </article>
          </section>
        )}
      </main>

      <footer className="relative z-10 border-t border-gold/10 px-5 py-7 text-center text-xs tracking-[0.13em] text-parchment/45 uppercase">
        Toda grande campanha começa com uma escolha — ou com uma rolagem.
      </footer>
    </div>
  );
}
