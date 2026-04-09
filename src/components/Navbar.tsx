"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Available Machines", href: "/machines" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#1E40AF] text-white text-sm py-2 px-4 text-center">
        <span>📞 Call us anytime: </span>
        <a href="tel:+13472352199" className="font-semibold hover:underline">+1 (347) 235-2199</a>
        <span className="ml-4 text-blue-200">|</span>
        <span className="ml-4">Responding within 24 hours</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">FV</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-[#1E40AF] text-sm leading-tight">Fletcher&apos;s Vending</p>
            <p className="text-xs text-gray-500 leading-tight">Services</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "bg-blue-50 text-[#1E40AF] font-semibold"
                  : "text-gray-700 hover:text-[#1E40AF] hover:bg-blue-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+13472352199"
            className="hidden md:flex items-center gap-2 bg-[#1E40AF] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            <Phone size={16} />
            Get a Quote
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#1E40AF] hover:bg-blue-50 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-blue-100 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#1E40AF] bg-blue-50 font-semibold"
                  : "text-gray-700 hover:text-[#1E40AF] hover:bg-blue-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <a
              href="tel:+13472352199"
              className="flex items-center gap-2 bg-[#1E40AF] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#1e3a8a] transition-colors w-full justify-center"
            >
              <Phone size={16} />
              Call Now: +1 (347) 235-2199
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
