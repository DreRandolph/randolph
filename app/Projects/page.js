import Image from 'next/image'
import { projects } from './projects.json'
import Link from 'next/link'
export default function Projects() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-end pt-10 py-2">
      <main className="flex lg:basis-1/2 lg:fixed lg:-top-20 lg:right-1/2 flex-col items-center lg:w-1/2 mt-20 lg:mt-96 text-center">
        <h1 className="text-6xl mb-2 font-bold">My Projects</h1>
        <p className="text-xl pl-0.5 w-2/3 text-amber-300 text-center">
          Here are some of the projects I have worked on. These projects range
          from Websites to Research projects.
        </p>
      </main>

      <section className="w-full basis-1/2 no-scrollbar h-fit overflow-visible overflow-y-scroll justify-center py-12 lg:pr-12 flex flex-wrap flex-row gap-4 2xl:gap-10">
        {projects.map((project) => (
          <Link
            href={project.url}
            className="rounded-lg overflow-visible lg:hover:-translate-x-10 hover:bg-gray-600 transition-all h-2/12 grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 w-10/12 bg-gray-800 shadow-lg"
            key={project.name}
          >
            <Image
              src={project.img}
              className=" row-span-2 lg:col-span-1 w-full h-full rounded-t-lg lg:rounded-l-lg"
              alt="alternative photo"
              width={500}
              height={500}
            />
            <div className="col-span-2 flex px-5 flex-col justify-center">
              <h2 className="text-2xl font-bold my-4">{project.name}</h2>
              <p className="text-lg mb-4">{project.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
