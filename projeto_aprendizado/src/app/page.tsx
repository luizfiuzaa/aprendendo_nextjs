import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Aprendendo Next JS do zero!",
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

export default function Home() {
  return (
    <div className="">
        <h1>Hello World!!</h1>

    </div>

  )
}