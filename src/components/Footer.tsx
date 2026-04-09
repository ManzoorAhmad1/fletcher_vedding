import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FV</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Fletcher&apos;s Vending</p>
                <p className="text-xs text-blue-300 leading-tight">Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping buyers start earning passive income through reliable vending machines placed in
              proven, high-traffic locations. Transparent. Trusted. Results-driven.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E40AF] flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E40AF] flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1E40AF] flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Available Machines", href: "/machines" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Success Stories", href: "/success-stories" },
                { label: "FAQs", href: "/faqs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Snack Vending Machines</li>
              <li>Drink &amp; Beverage Machines</li>
              <li>Combo Vending Machines</li>
              <li>Healthy Options Machines</li>
              <li>Location Sourcing</li>
              <li>Machine Maintenance Support</li>
              <li>Stocking &amp; Restocking</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+13472352199" className="hover:text-blue-400 transition-colors">
                  +1 (347) 235-2199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@fletchersvending.com" className="hover:text-blue-400 transition-colors">
                  info@fletchersvending.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>United States</span>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-block bg-[#1E40AF] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1e3a8a] transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fletcher&apos;s Vending Services. All rights reserved.</p>
          <p>Owner: Michael Bennet | Call: <a href="tel:+13472352199" className="hover:text-blue-400">+1 (347) 235-2199</a></p>
        </div>
      </div>
    </footer>
  )
}
