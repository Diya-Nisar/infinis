'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Talk Therapy', href: '/services/talk-therapy' },
  { name: 'EFT', href: '/services/eft' },
  { name: 'Graphology', href: '/services/graphology' },
  { name: 'Numerology', href: '/services/numerology' },
  { name: 'Color Therapy', href: '/services/color-therapy' },
  { name: 'Energy Work', href: '/services/energy-work' },
  { name: 'Ayurvedic Coaching', href: '/services/ayurveda' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TmFQQ77G5d66NvzpZo4L2tvYcS2DpY.png"
              alt="Infinis - Psychotherapy And Counseling"
              width={200}
              height={80}
              className="w-auto h-12"
              priority
            />
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-indigo-600 hover:text-indigo-800">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none`}>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
              <li><a href="/#about" className="block lg:inline-block text-indigo-600 hover:text-indigo-800">About</a></li>
              <li className="relative">
                <button 
                  className="flex items-center w-full lg:w-auto text-indigo-600 hover:text-indigo-800"
                  onClick={toggleServices}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        onClick={() => {
                          setIsServicesOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li><a href="/#how-it-works" className="block lg:inline-block text-indigo-600 hover:text-indigo-800">How It Works</a></li>
              <li><a href="/#pricing" className="block lg:inline-block text-indigo-600 hover:text-indigo-800">Pricing</a></li>
              <li><a href="/#contact" className="block lg:inline-block text-indigo-600 hover:text-indigo-800">Contact</a></li>
              <li>
                <Link 
                  href="/book" 
                  className="block lg:inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

