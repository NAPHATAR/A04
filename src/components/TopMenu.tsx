import Image from 'next/image'
import Link from 'next/link'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end items-center h-14 sm:h-16">
          <nav className="flex items-center space-x-1 sm:space-x-1 md:space-x-2 lg:space-x-4">
            <TopMenuItem href="/booking">Booking</TopMenuItem>
            <Link href="/" className="flex items-center p-1 sm:p-2">
              <Image 
                src="/img/logo.png" 
                alt="Logo" 
                width={256}
                height={256}
                priority
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}