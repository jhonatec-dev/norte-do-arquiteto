import About from '@/components/About'
import First from '@/components/First'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-8 items-center justify-between py-12 ${inter.className} `}
    >
      <First />
      <About />
    </main>
  )
}
