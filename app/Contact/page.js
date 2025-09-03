import Contacts from '@/components/contacts'
import DownloadBtn from '@/components/downloadBtn'
import Image from 'next/image'

export default function home() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      <div className="w-full h-20 bg-sky-950" />
      <main className="flex flex-col gap-y-12 py-6 items-center justify-center w-full flex-1 lg:px-20 text-center">
        <div className="bg-sky-950 rounded-2xl p-16 w-11/12 lg:w-4/6 border-2 border-white">
          <h1 className="text-6xl font-bold mb-3">Contact Me</h1>
          <p className="text-amber-300 text-xl">
            Feel free to reach out to me through any of the platforms below!{' '}
            Communication is incrediblely important to me, and I&apos;m always
            open to discussing new projects, opportunities, or just connecting
            with like-minded individuals.
          </p>
        </div>
        <Contacts />
      </main>
    </div>
  )
}
