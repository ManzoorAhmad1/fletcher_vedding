import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Award, Users, MapPin, TrendingUp } from "lucide-react"

const values = [
  { icon: CheckCircle, title: "Transparency First", desc: "Clear agreements, honest pricing, and no hidden fees. You see exactly what you are getting." },
  { icon: Award, title: "Proven Locations", desc: "We only sell machines in locations we have personally researched and verified for high traffic." },
  { icon: Users, title: "Full Support", desc: "From delivery and setup to stocking and maintenance — we are with you every step of the way." },
  { icon: TrendingUp, title: "Real Passive Income", desc: "Our buyers earn real, consistent income. We track earnings and share that data openly." },
]

const milestones = [
  { year: "2019", event: "Fletcher's Vending Services founded by Michael Bennet" },
  { year: "2020", event: "First 10 machines placed in high-traffic office parks" },
  { year: "2021", event: "Expanded to gyms, warehouses, and medical facilities" },
  { year: "2022", event: "Reached 25+ happy buyers earning passive income" },
  { year: "2023", event: "Launched full buyer support program with training & maintenance" },
  { year: "2024", event: "50+ machines placed across the region — still growing" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Fletcher&apos;s Vending Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We help everyday people build real passive income through reliable vending machines placed in proven, high-traffic locations.
          </p>
        </div>
      </section>

      {/* OWNER INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-100 max-w-md">
                <Image
                  src="/images/WhatsApp Image 2026-04-09 at 11.10.12 AM.jpeg"
                  alt="Michael Bennet – Owner of Fletcher's Vending Services"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
              {/* floating stat */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-blue-100">
                <p className="text-4xl font-extrabold text-[#1E40AF]">5+</p>
                <p className="text-gray-600 text-sm mt-1">Years in Vending</p>
              </div>
            </div>

            <div>
              <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">Meet the Owner</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Hi, I&apos;m Michael Bennet.</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I started Fletcher&apos;s Vending Services because I saw an opportunity to help people build real, sustainable passive income — without the guesswork. After years of managing vending machines myself, I knew exactly which locations produced consistent results and which ones did not.
                </p>
                <p>
                  My mission is simple: connect buyers with machines that are already placed in high-traffic, proven locations, and give them all the tools and support they need to succeed from day one.
                </p>
                <p>
                  Every machine I sell comes with transparent earnings data, a clear purchase agreement, full delivery and setup, training on how to restock and maintain, and ongoing support from me personally.
                </p>
                <p>
                  I believe in doing business the right way — with honesty, clarity, and a genuine commitment to your success.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-4 bg-[#F0F6FF] rounded-xl p-4">
                  <MapPin size={22} className="text-[#1E40AF]" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">30+ Locations</p>
                    <p className="text-gray-500 text-xs">Pre-secured & verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#F0F6FF] rounded-xl p-4">
                  <Users size={22} className="text-[#1E40AF]" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">40+ Happy Buyers</p>
                    <p className="text-gray-500 text-xs">Earning passive income</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="tel:+13472352199"
                  className="inline-flex items-center gap-2 bg-[#1E40AF] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#1e3a8a] transition-colors"
                >
                  Call Michael Directly <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#1E40AF]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Company Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1E40AF] rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative z-10">
                    {m.year}
                  </div>
                  <div className="bg-[#F0F6FF] rounded-xl p-4 flex-1 border border-blue-100">
                    <p className="text-gray-800 font-medium">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#1e3a8a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work With Michael?</h2>
          <p className="text-blue-200 text-lg mb-8">Schedule a free consultation or browse available machines today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/machines" className="flex items-center gap-2 bg-white text-[#1E40AF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              View Available Machines <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
