import { BackgroundFX } from "./BackgroundFX";
import { Navbar } from "./Navbar";
import { CodeWindow } from "./CodeWindow";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-bg">
      <BackgroundFX />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10 lg:pb-32 lg:pt-14">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div className="relative">
              <div className="anim-fade-up">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 py-1 pl-1 pr-3 text-xs text-fg-dim backdrop-blur transition-colors hover:bg-surface-2"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    Novo
                  </span>
                  Módulo de IA agentes lançado
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <h1
                className="mt-6 max-w-160 text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] anim-fade-up delay-100 sm:text-[56px] lg:text-[64px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-fg">Aprenda </span>
                <span
                  className="relative inline-block"
                >
                  <span className="text-gradient">Python do zero</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 8 C 80 2, 160 2, 298 7"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.55"
                    />
                  </svg>
                </span>
                <span className="text-fg">
                  {" "}
                  e construa projetos reais com{" "}
                </span>
                <span className="relative whitespace-nowrap">
                  <span className="text-fg">IA</span>
                  <span
                    aria-hidden
                    className="absolute -inset-x-1 -inset-y-0.5 -z-10 rounded-md bg-accent/10 ring-1 ring-accent/30"
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-140 text-[17px] leading-relaxed text-fg-dim anim-fade-up delay-200">
                O curso mais prático do Brasil para quem quer entrar em
                tecnologia{" "}
                <span className="text-fg">sem enrolação</span>.
              </p>

              <ul className="mt-8 grid max-w-140 grid-cols-1 gap-2.5 sm:grid-cols-2">
                {BULLETS.map((b, i) => {
                  const delayClass = ["delay-300", "delay-400", "delay-500", "delay-600"][i] ?? "";
                  return (
                    <li
                      key={b.label}
                      className={
                        "group flex items-start gap-3 rounded-xl border border-border bg-surface/40 px-3.5 py-3 backdrop-blur-sm transition-all hover:border-border-strong hover:bg-surface/80 anim-fade-up " +
                        delayClass
                      }
                    >
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/12 text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-110"
                      >
                        {b.icon}
                      </span>
                      <span className="text-[13.5px] leading-snug text-fg">
                        {b.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3 anim-fade-up delay-700">
                <a
                  href="#matricula"
                  className="btn-shine group relative inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-semibold text-[#1a3a5c] shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  Quero começar agora
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#grade"
                  className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-3 text-[14px] font-medium text-fg backdrop-blur transition-colors hover:bg-surface-2"
                >
                  <svg
                    className="h-4 w-4 text-fg-dim transition-colors group-hover:text-fg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 4v16l5-3 4 3 5-3V4H5z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Ver o que vou aprender
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5 anim-fade-up delay-800">
                <div className="flex -space-x-2">
                  {AVATAR_GRADIENTS.map((g, i) => (
                    <span
                      key={i}
                      className="h-7 w-7 rounded-full ring-2 ring-bg"
                      style={{ background: g }}
                    />
                  ))}
                </div>
                <div className="text-[12.5px] leading-tight text-fg-dim">
                  <div className="flex items-center gap-1.5">
                    <Stars />
                    <span className="font-medium text-fg">
                      4.9/5
                    </span>
                  </div>
                  <div className="text-fg-mute">
                    +20.000 alunos já estão dentro
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-4">
              <CodeWindow />
            </div>
          </div>

          <div className="relative mt-20 anim-fade-in delay-1000">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-linear-to-r from-transparent to-border-strong" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-fg-mute">
                Tecnologias que você vai dominar
              </span>
              <span className="h-px flex-1 bg-linear-to-l from-transparent to-border-strong" />
            </div>
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <div className="anim-marquee flex w-max gap-12 whitespace-nowrap pr-12">
                {[...TECHS, ...TECHS].map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-fg-dim transition-colors hover:text-fg"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="text-accent">▸</span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BULLETS = [
  {
    label: "+40 horas de conteúdo direto ao ponto",
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Projetos com Python + IA desde o módulo 1",
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3 6 6 .9-4.5 4.2 1 6.4L12 16l-5.5 3.5 1-6.4L3 8.9 9 8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Suporte da comunidade com +20.000 alunos",
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 11.5a8.4 8.4 0 01-1 4 8.5 8.5 0 01-7.5 4.5 8.4 8.4 0 01-4-1L3 21l2-5.5a8.4 8.4 0 01-1-4 8.5 8.5 0 014.5-7.5 8.4 8.4 0 014-1A8.5 8.5 0 0121 11.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Certificado reconhecido pelo mercado",
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const TECHS = [
  "Python",
  "FastAPI",
  "Pandas",
  "OpenAI",
  "Anthropic",
  "LangChain",
  "Streamlit",
  "PyTorch",
  "PostgreSQL",
  "Docker",
  "n8n",
  "Hugging Face",
];

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#ffd43b,#4b8bbe)",
  "linear-gradient(135deg,#4b8bbe,#306998)",
  "linear-gradient(135deg,#ffe873,#ffd43b)",
  "linear-gradient(135deg,#306998,#4b8bbe)",
  "linear-gradient(135deg,#ffd43b,#ffe873)",
];

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-accent-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3 6.9 7.6.7-5.7 5 1.7 7.4L12 18l-6.6 4 1.7-7.4-5.7-5 7.6-.7L12 2z" />
        </svg>
      ))}
    </span>
  );
}
