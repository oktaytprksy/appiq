import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appiqdevelopment.com"),
  title: "AppIQ — Dijital Ürünler İnşa Ederiz | Yazılım Ajansı",
  description:
    "Web, mobil, yapay zeka ve bulut. Fikirden lansmana kadar dijital ürünler geliştiren yazılım ajansı. Tek ekip, uçtan uca çözüm.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Tedarikçi Değil. Ortağınız. | AppIQ",
    description:
      "Fikirden canlı ürüne kadar tasarlar, geliştirir ve büyütürüz. Web, mobil, yapay zeka ve altyapı — tek ekip.",
    siteName: "AppIQ",
    images: ["/seo/og-image.png"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
