import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Eczar, Lora, Marcellus, Poppins } from "next/font/google";
import "./globals.css";

const fontMarcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400", // Puedes ajustar el peso según tus necesidades
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontEczar = Eczar({
  variable: "--font-eczar", // Puedes ajustar el peso según tus necesidades
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
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
    "Descubre el Hotel Ambassador INN, tu refugio de lujo en la ciudad. Disfruta de habitaciones elegantes, servicios excepcionales y una ubicación inmejorable. ¡Reserva ahora y vive una experiencia inolvidable!",
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
        className={`${fontMarcellus.variable} ${fontEczar.variable} ${fontPoppins.variable} ${fontLora.variable} antialiased min-h-screen bg-white`}
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
