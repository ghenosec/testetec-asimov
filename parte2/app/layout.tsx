import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asimov Academy | Aprenda Python do zero e construa projetos reais com IA",
  description:
    "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas, projetos com Python + IA e comunidade de +20.000 alunos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
