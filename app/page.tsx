import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata() {
  return {
    title: "Matt's Wiki Search engine",
    description: "This is a small platform that allows users to access Wikipedia's API."
  }
}

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="text-black p-4 flex flex-col">
        <h1 className='text-3xl'>
          Wiki Search!
        </h1>
        <p className='py-2 text-xl'>
          This is a page which connects to the Wikipedia API and allows you to search for wiki content.
        </p>
        <p className='py-2 text-xl'>
          The search feature makes use of the latest NextJS features, like client pages and server-side rendering. 
        </p>
        <p className='py-2 text-xl'>
          You can find the source code for this project by going to its <a className="text-[#009CFF] hover:underline" href="https://github.com/matthieufernandez/nextjs-training">repo!</a>.
        </p>
      </div>
    </main>
  )
}
