export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute top-[-30%] left-1/2 h-225 w-350 -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,212,59,0.18) 0%, rgba(75,139,190,0.12) 28%, rgba(10,14,20,0) 60%)",
        }}
      />
      <div
        className="absolute -right-40 top-40 h-150 w-150 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(75,139,190,0.30) 0%, rgba(10,14,20,0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute -left-40 bottom-0 h-120 w-170 opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(255,212,59,0.20) 0%, rgba(10,14,20,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="absolute right-[6%] top-[18%] h-72 w-72 rounded-full conic-glow opacity-60" />

      <div className="absolute inset-0 bg-grid" />

      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-bg to-transparent" />
    </div>
  );
}
