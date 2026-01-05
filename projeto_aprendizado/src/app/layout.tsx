import "./globals.css";
import { Header } from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprendendo Next JS do zero!",
  description: "Página inicial do projeto de aprendizado do Next JS",
  openGraph: {
    title: "Home", description: "Aprendendo Next JS do zero!",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
