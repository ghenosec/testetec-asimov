"use client";

import { useEffect, useState } from "react";

export function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= LINES.length) {
        clearInterval(id);
        setTimeout(() => setShowOutput(true), 350);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <FloatingBadge
        className="absolute -left-6 top-10 anim-fade-up delay-700"
        icon={<UsersIcon />}
        label="+20.000 alunos"
        sub="comunidade ativa"
        floatDelay="0s"
      />
      <FloatingBadge
        className="absolute -right-4 top-28 anim-fade-up delay-900"
        icon={<SparkIcon />}
        label="GPT · Claude · Gemini"
        sub="integrações nativas"
        accent="cyan"
        floatDelay="1.2s"
      />
      <FloatingBadge
        className="absolute bottom-4 right-4 anim-fade-up delay-1000"
        icon={<CertIcon />}
        label="Certificado"
        sub="reconhecido pelo mercado"
        accent="amber"
        floatDelay="2.4s"
      />
      <div className="ring-grad relative rounded-2xl bg-bg-elev/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur anim-scale-in delay-500">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div
            className="flex items-center gap-2 text-[11px] text-fg-mute"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <FileIcon />
            <span>analisador_curriculos.py</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent anim-pulse-dot" />
            <span
              className="text-[10px] uppercase tracking-wider text-fg-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              live
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-[36px_1fr] gap-0 px-2 py-4 text-[13px] leading-[1.65]"
          style={{ fontFamily: "var(--font-mono)" }}
        >

          <div className="select-none pr-2 text-right text-fg-mute/70">
            {LINES.map((_, i) => (
              <div key={i} className={i < visibleLines ? "" : "opacity-0"}>
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>

          <div className="overflow-hidden">
            {LINES.map((line, i) => (
              <div
                key={i}
                className={
                  i < visibleLines
                    ? "anim-fade-up"
                    : "opacity-0"
                }
                style={{ animationDuration: "0.4s" }}
              >
                {line.length === 0 ? <>&nbsp;</> : <Line tokens={line} />}
              </div>
            ))}
            {visibleLines >= LINES.length && !showOutput && (
              <span className="ml-1 inline-block h-3.5 w-1.5 -translate-y-0.5 bg-accent anim-blink" />
            )}
          </div>
        </div>

        <div
          className={
            "overflow-hidden border-t border-border bg-bg/60 transition-all duration-700 " +
            (showOutput ? "max-h-44 opacity-100" : "max-h-0 opacity-0")
          }
        >
          <div
            className="px-4 py-3 text-[12px] leading-[1.7]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <div className="mb-2 flex items-center gap-2 text-fg-mute">
              <span className="text-accent">▸</span>
              <span>output</span>
              <span className="ml-auto text-[10px]">0.42s</span>
            </div>
            <div className="text-fg-dim">
              <span className="text-accent">✓</span>{" "}
              Currículo analisado por IA
            </div>
            <div className="text-fg-dim">
              <span className="text-accent-2">→</span> Score de
              compatibilidade:{" "}
              <span className="text-accent-3">94%</span>
            </div>
            <div className="text-fg-dim">
              <span className="text-accent-2">→</span> Recomendação:{" "}
              <span className="text-fg">avançar para entrevista</span>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-[100%]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,212,59,0.25) 0%, rgba(10,14,20,0) 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}

type Token = { t: string; c?: TokenColor };
type TokenColor =
  | "kw"
  | "fn"
  | "str"
  | "num"
  | "com"
  | "var"
  | "punct"
  | "deco"
  | "type"
  | "param";

const colorMap: Record<TokenColor, string> = {
  kw: "text-[#ff7ab6]",
  fn: "text-[#7ec5ff]",
  str: "text-[#9eea7f]",
  num: "text-[#ffd34d]",
  com: "text-[#5d6b7a] italic",
  var: "text-[#e8edf2]",
  punct: "text-[#8a96a6]",
  deco: "text-[#b58cff]",
  type: "text-[#5dd9ff]",
  param: "text-[#f0a868]",
};

function Line({ tokens }: { tokens: Token[] }) {
  return (
    <div className="whitespace-pre">
      {tokens.map((tok, i) => (
        <span key={i} className={tok.c ? colorMap[tok.c] : "text-fg-dim"}>
          {tok.t}
        </span>
      ))}
    </div>
  );
}

const LINES: Token[][] = [
  [
    { t: "from", c: "kw" },
    { t: " anthropic " },
    { t: "import", c: "kw" },
    { t: " Anthropic" },
  ],
  [
    { t: "from", c: "kw" },
    { t: " asimov.agents " },
    { t: "import", c: "kw" },
    { t: " ResumeAgent" },
  ],
  [],
  [
    { t: "@", c: "deco" },
    { t: "agent", c: "deco" },
    { t: "(", c: "punct" },
    { t: "model", c: "param" },
    { t: "=", c: "punct" },
    { t: "\"claude-opus-4\"", c: "str" },
    { t: ")", c: "punct" },
  ],
  [
    { t: "def", c: "kw" },
    { t: " " },
    { t: "analisar", c: "fn" },
    { t: "(", c: "punct" },
    { t: "curriculo", c: "param" },
    { t: ": ", c: "punct" },
    { t: "str", c: "type" },
    { t: ") -> ", c: "punct" },
    { t: "dict", c: "type" },
    { t: ":", c: "punct" },
  ],
  [
    { t: "    " },
    { t: "\"\"\"Avalia um currículo e retorna match com a vaga.\"\"\"", c: "com" },
  ],
  [
    { t: "    score " },
    { t: "=", c: "punct" },
    { t: " ResumeAgent", c: "fn" },
    { t: "(", c: "punct" },
    { t: ").", c: "punct" },
    { t: "rank", c: "fn" },
    { t: "(", c: "punct" },
    { t: "curriculo", c: "var" },
    { t: ")", c: "punct" },
  ],
  [
    { t: "    " },
    { t: "return", c: "kw" },
    { t: " {", c: "punct" },
    { t: "\"score\"", c: "str" },
    { t: ": score, ", c: "punct" },
    { t: "\"ok\"", c: "str" },
    { t: ": score ", c: "punct" },
    { t: ">", c: "punct" },
    { t: " ", c: "punct" },
    { t: "0.85", c: "num" },
    { t: "}", c: "punct" },
  ],
  [],
  [
    { t: "# módulo 03 · projeto real do curso", c: "com" },
  ],
  [
    { t: "resultado " },
    { t: "=", c: "punct" },
    { t: " analisar", c: "fn" },
    { t: "(", c: "punct" },
    { t: "curriculo_pdf", c: "var" },
    { t: ")", c: "punct" },
  ],
  [
    { t: "print", c: "fn" },
    { t: "(", c: "punct" },
    { t: "resultado", c: "var" },
    { t: ")", c: "punct" },
  ],
];

function FloatingBadge({
  className = "",
  icon,
  label,
  sub,
  accent = "green",
  floatDelay = "0s",
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  accent?: "green" | "cyan" | "amber";
  floatDelay?: string;
}) {
  const accentBg =
    accent === "green"
      ? "bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
      : accent === "cyan"
      ? "bg-[var(--color-accent-2)]/15 text-[var(--color-accent-2)]"
      : "bg-[var(--color-accent-3)]/15 text-[var(--color-accent-3)]";

  return (
    <div
      className={
        "z-20 flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface/85 px-3 py-2 backdrop-blur-md anim-float " +
        className
      }
      style={{ animationDelay: floatDelay }}
    >
      <span
        className={
          "flex h-7 w-7 items-center justify-center rounded-md " + accentBg
        }
      >
        {icon}
      </span>
      <div className="leading-tight">
        <div className="text-[12px] font-medium text-fg">
          {label}
        </div>
        <div className="text-[10px] text-fg-mute">{sub}</div>
      </div>
    </div>
  );
}


function FileIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2zM19 14l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14z"
        fill="currentColor"
      />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
