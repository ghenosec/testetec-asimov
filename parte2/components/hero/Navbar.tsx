export function Navbar() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="group flex items-center gap-2.5 anim-fade-in"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-surface-2 ring-1 ring-border-strong">
            <span className="absolute inset-0 rounded-md bg-linear-to-br from-accent/15 to-accent-2/15" />
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M11 3h3a3 3 0 013 3v4h-7a3 3 0 00-3 3v1H4a1 1 0 01-1-1V9a3 3 0 013-3h5V3z"
                fill="#4b8bbe"
              />
              <path
                d="M13 21h-3a3 3 0 01-3-3v-4h7a3 3 0 003-3v-1h3a1 1 0 011 1v6a3 3 0 01-3 3h-5v1z"
                fill="#ffd43b"
              />
              <circle cx="9" cy="6" r="0.9" fill="#0f1520" />
              <circle cx="15" cy="18" r="0.9" fill="#0f1520" />
            </svg>
          </span>
          <span
            className="text-[15px] font-semibold tracking-tight text-fg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            asimov<span className="text-accent">.</span>academy
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex anim-fade-in delay-100">
          {["Formações", "Trilhas", "Projetos", "Comunidade", "Para empresas"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-fg-dim transition-colors hover:text-fg"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3 anim-fade-in delay-200">
          <a
            href="#"
            className="hidden text-sm text-fg-dim transition-colors hover:text-fg sm:inline"
          >
            Entrar
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-3.5 py-1.5 text-[13px] font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Matricule-se
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
