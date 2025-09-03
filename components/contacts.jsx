import Link from 'next/link'
import { contactlist } from './contactlist'

export default function Contacts() {
  return (
    <main className="grid grid-rows-auto p-6 lg:grid-cols-3 gap-8 w-full">
      {contactlist.map((contact) => (
        <Link href={contact.url} key={contact.platform}>
          <div className=" gap-x-12 bg-sky-950 flex flex-row lg:grid lg:grid-cols-4 items-center p-8 rounded-2xl border-amber-300 border-2 hover:scale-110 transition-all hover:bg-sky-600 justify-center w-full text-center">
            <svg
              className="size-16 -my-8 -mr-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d={contact.icon} clipRule="evenodd" />
            </svg>
            <div className="col-span-3 text-left">
              <p className="text-xl text-amber-300 font-bold">
                {contact.platform}
              </p>
              Click here to access my {contact.platform}
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
