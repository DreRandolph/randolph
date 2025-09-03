import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="w-screen -ml-4 h-20 bg-sky-950 mb-12" />
      <main className="flex flex-col lg:flex-row gap-x-18 items-center justify-center w-full flex-1 px-10 lg:px-20 text-center">
        <div className="lg:pb-24">
          <h1 className="text-6xl text-left font-bold">
            Hey,
            <br />
            I&apos;m
            <span className="text-red-600"> De&apos;Andre Randolph,</span>
            <br />
            A CIW Certified Web Developer
            <br />
          </h1>
          <p className="text-xl pl-0.5 text-amber-300 text-left xl:text-center">
            Next.js + tailwindcss
          </p>
          <p className="mt-3 text-2xl"></p>
        </div>
        <Image
          src="/redblack.jpg"
          className="rounded-lg"
          width={550}
          height={550}
          alt="yea"
        />
      </main>
      <section className=" bg-sky-950 w-full justify-center p-12 my-12 flex flex-wrap flex-row gap-16 2xl:gap-24 ">
        <Image
          src="/grey.jpg"
          className="rounded-lg  2xl:-rotate-4 "
          width={300}
          height={100}
          alt="yea"
        />
        <Image
          src="/redbluecream.jpg"
          className="rounded-lg 2xl:-rotate-2"
          width={300}
          height={100}
          alt="yea"
        />
        <Image
          src="/whiterose.jpg"
          className="rounded-lg 2xl:rotate-4 "
          width={300}
          height={100}
          alt="yea"
        />
      </section>
      <section className="flex flex-col w-11/12 lg:w-7xl items-center border-2 justify-center my-6 lg:my-10 py-10 px-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-4xl text-center">
          My name is De&apos;Andre Randolph, and I am a software engineering
          college student at Morehouse College. I am a certified CIW Site
          Associate, a certification I earned in high school. I learned the
          fundamentals of web development, including HTML, CSS, and JavaScript,
          during that time as well. I have also gained experience in building
          responsive and interactive web applications using modern frameworks
          and libraries such as React, TailwindCSS, Next, and more.
          Additionally, I am progressing my knowledge in software engineering,
          learning data science and economics, and plan on becoming a business
          owner in the near future.
        </p>
        <p className="text-lg pb-5 max-w-4xl text-center mt-4">
          I am extremely passionate about web development and enjoy creating
          user-friendly and visually appealing websites. I am always eager to
          learn new technologies and improve my skills. I believe that web
          development is a powerful tool for communication and creativity, and I
          am excited to continue my journey in this field.
        </p>
        <Link
          className="p-4 rounded-2xl hover:bg-sky-800 hover:scale-110 transition-all ease-in-out bg-sky-600"
          href="/About"
        >
          Click me to Learn More!
        </Link>
      </section>
    </div>
  )
}
