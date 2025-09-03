import DownloadBtn from '@/components/downloadBtn'
import Image from 'next/image'

export default function home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-20 bg-sky-950" />
      <main className="flex flex-col-reverse lg:flex-row gap-x-12 items-center justify-center w-full py-6 lg:py-0 flex-1 px-6 lg:px-20 text-center">
        <Image
          src="/Randolph.jpg"
          className="rounded-lg border-2 border-white"
          width={600}
          height={600}
          alt="yea"
        />
        <div className="bg-[#0b3746] border-2 w-full p-12 m-4 rounded-lg text-white">
          <h1 className="text-6xl font-bold">De&apos;Andre Randolph</h1>
          <p className="text-lg text-amber-300">Certified Web developer</p>
          <p className="mt-3 lg:text-2xl">
            My name is De&apos;Andre Randolph, and I am a software engineering
            college student at Morehouse. I have been certified by CIW in high
            school, where I learned the fundamentals of web development,
            including HTML, CSS, and JavaScript. I have also gained experience
            in building responsive and interactive web applications using modern
            frameworks and libraries.
          </p>
          <DownloadBtn />
        </div>
      </main>
    </div>
  )
}
