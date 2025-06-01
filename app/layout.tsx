import type { Metadata } from "next";
import "./globals.css";
import { Alegreya, Lato } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const fontAlegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontLato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
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
        className={`${fontAlegreya.variable} ${fontLato.variable} antialiased min-h-screen bg-white`}
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
