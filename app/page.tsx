import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="text-white p-4 "><h1>Home Page</h1></div>
    </main>
  )
}
