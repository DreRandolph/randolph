import DownloadBtn from '@/components/downloadBtn'
import Link from 'next/link'
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
        <section className="flex flex-col w-11/12 lg:w-7xl items-center border-2 justify-center my-6 lg:my-10 py-10 px-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg max-w-4xl text-center">
            My name is De&apos;Andre Randolph, and I am a software engineering
            college student at Morehouse College. I am a certified CIW Site
            Associate, a certification I earned in high school. I learned the
            fundamentals of web development, including HTML, CSS, and
            JavaScript, during that time as well. I have also gained experience
            in building responsive and interactive web applications using modern
            frameworks and libraries such as React, TailwindCSS, Next, and more.
            Additionally, I am progressing my knowledge in software engineering,
            learning data science and economics, and plan on becoming a business
            owner in the near future.
          </p>
          <p className="text-lg pb-5 max-w-4xl text-center mt-4">
            I am extremely passionate about web development and enjoy creating
            user-friendly and visually appealing websites. I am always eager to
            learn new technologies and improve my skills. I believe that web
            development is a powerful tool for communication and creativity, and
            I am excited to continue my journey in this field.
          </p>
          <DownloadBtn />
        </section>
      </main>
    </div>
  )
}
