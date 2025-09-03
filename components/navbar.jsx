'use client'

import { useState, useEffect } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/About', current: false },
  { name: 'Projects', href: '/Projects', current: false },
  { name: 'Contact Me', href: '/Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const percentage = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollPercentage(percentage)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pathname = usePathname()

  switch (pathname) {
    case '/':
      navigation[0].current = true
      navigation[1].current = false
      navigation[2].current = false
      navigation[3].current = false
      break
    case '/About':
      navigation[0].current = false
      navigation[1].current = true
      navigation[2].current = false
      navigation[3].current = false
      break
    case '/Projects':
      navigation[0].current = false
      navigation[1].current = false
      navigation[2].current = true
      navigation[3].current = false
      break
    case '/Contact':
      navigation[0].current = false
      navigation[1].current = false
      navigation[2].current = false
      navigation[3].current = true
      break
  }

  return (
    <Disclosure
      as="nav"
      className="bg-transparent w-2/3 z-50 justify-self-center fixed left-0 right-0"
    >
      <div className="mx-auto  px-2 sm:px-10">
        <div className="  relative flex h-16 lg:h-26 items-center justify-between">
          <div
            className={classNames(
              scrollPercentage > 5
                ? 'opacity-60 hover:opacity-100 scale-[0.85] transition ease-in-out duration-300'
                : 'opacity-100 transition ease-in-out duration-300',
              'absolute bg-randolph w-full mt-5 lg:mt-0 hover:scale-100 rounded-2xl inset-y-0 left-0 flex items-center sm:hidden'
            )}
          >
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center bg-gry-900 rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"  
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
            <h1 className="ml-2 text-lg">De'Andre Randolph</h1>
          </div>
          <div
            className={classNames(
              scrollPercentage > 10
                ? 'lg:opacity-40 hover:opacity-100 scale-[0.85] transition ease-in-out duration-300'
                : 'opacity-100 transition ease-in-out duration-300',
              'lg:flex flex-1 p-2 hidden rounded-4xl lg:-mt-5 hover:scale-110 h-1/2 bg-randolph items-center justify-center sm:items-stretch'
            )}
          >
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      ' px-3 py-2 text-sm rounded-4xl font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-randolph rounded-2xl mt-2 mx-2">
        <div className="space-y-1  px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 bg-amber-900 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
