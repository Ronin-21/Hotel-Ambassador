import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Lora, Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const fontPlayfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontNunito = Nunito({
  variable: "--font-nunito",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

export const metadata: Metadata = {
  title: {
    default: "Hotel Ambassador INN",
    template: "%s - Hotel Ambassador INN",
  },
  description:
    "Expertos en implementación y mantenimiento de software para tu negocio. Confía en nosotros para un soporte confiable y profesional.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fontPlayfair.variable} ${fontNunito.variable} ${fontLora.variable} antialiased min-h-screen bg-white`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
