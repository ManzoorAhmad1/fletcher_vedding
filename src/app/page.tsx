import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Star, TrendingUp, MapPin, Shield, Users, Award } from "lucide-react"

const trustStats = [
  { icon: TrendingUp, label: "Machines Placed", value: "50+" },
  { icon: MapPin, label: "Locations Secured", value: "30+" },
  { icon: Users, label: "Happy Buyers", value: "40+" },
  { icon: Award, label: "Years Experience", value: "5+" },
]

const machineHighlights = [
  {
    img: "/vending machine/Snack-Vending-Machine..jpg",
    title: "Snack Vending Machine",
    location: "Busy Office Park – 200+ employees",
    earnings: "$600–$900/mo",
    price: "$4,500",
    type: "Snack",
    condition: "Refurbished – Excellent",
  },
  {
    img: "/vending machine/mvm.webp",
    title: "Combo Vending Machine",
    location: "High-Traffic Gym – 300+ members",
    earnings: "$800–$1,200/mo",
    price: "$5,800",
    type: "Combo",
    condition: "Refurbished – Like New",
  },
  {
    img: "/vending machine/Automatic-Snack-Beverage-Vending-Machine..jpg",
    title: "Snack & Beverage Machine",
    location: "Corporate Building – 150 employees",
    earnings: "$700–$1,000/mo",
    price: "$5,200",
    type: "Snack & Beverage",
    condition: "Refurbished – Excellent",
  },
]

const steps = [
  { step: "01", title: "Choose a Machine & Location", desc: "Browse our available machines with pre-secured, high-traffic locations." },
  { step: "02", title: "Make a Secure Deposit", desc: "Lock in your machine with a secure deposit. Full payment only after inspection." },
  { step: "03", title: "Inspect the Machine", desc: "Optional on-site inspection. We encourage transparency throughout." },
  { step: "04", title: "Finalize & Transfer", desc: "Sign a clear agreement, finalize payment, and take ownership." },
  { step: "05", title: "Start Earning Immediately", desc: "Machine is stocked, placed, and ready to generate income from day one." },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Fletcher&apos;s Vending Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable Vending Machines With{" "}
              <span className="text-blue-200">Proven Locations</span> – Start Earning Today.
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              We place vending machines in high-traffic, pre-secured locations so you can earn passive income
              from day one. Transparent pricing. Real results. Full support.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["50+ machines sold", "Real profitable locations", "Transparent purchase process", "Full training & support"].map((item) => (
                <span key={item} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm">
                  <CheckCircle size={14} className="text-blue-200" />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/machines" className="flex items-center gap-2 bg-white text-[#1E40AF] font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                View Available Machines <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/images/WhatsApp Image 2026-04-09 at 11.10.12 AM.jpeg"
                alt="Michael Bennet with a Fletcher's Vending machine"
                width={500}
                height={650}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-white font-semibold text-sm">Michael Bennet – Owner, Fletcher&apos;s Vending Services</p>
                <p className="text-blue-200 text-xs">5+ years placing machines in proven locations</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg. Monthly Earnings</p>
                  <p className="font-bold text-gray-900 text-lg">$600–$1,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="bg-white py-14 border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustStats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Icon size={26} className="text-[#1E40AF]" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#1E40AF]">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MACHINES */}
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Featured Listings</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Available Machines</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Each machine comes with a secured, high-traffic location, training, and full support.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineHighlights.map((m) => (
              <div key={m.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-52">
                  <Image src={m.img} alt={m.title} fill className="object-cover" />
                  <span className="absolute top-3 left-3 bg-[#1E40AF] text-white text-xs font-semibold px-3 py-1 rounded-full">{m.type}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{m.title}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                    <MapPin size={13} className="text-[#1E40AF]" />{m.location}
                  </div>
                  <p className="text-xs text-gray-400 mb-4">Condition: {m.condition}</p>
                  <div className="flex items-center justify-between border-t border-blue-50 pt-4">
                    <div>
                      <p className="text-xs text-gray-400">Est. Monthly Earnings</p>
                      <p className="text-green-600 font-bold">{m.earnings}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Price</p>
                      <p className="text-[#1E40AF] font-extrabold text-lg">{m.price}</p>
                    </div>
                  </div>
                  <Link href="/machines" className="mt-4 flex items-center justify-center gap-2 w-full bg-[#1E40AF] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1e3a8a] transition-colors">
                    View Details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/machines" className="inline-flex items-center gap-2 border-2 border-[#1E40AF] text-[#1E40AF] font-bold px-8 py-3 rounded-xl hover:bg-[#1E40AF] hover:text-white transition-colors">
              View All Available Machines <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From choosing a machine to your first dollar earned — we make it simple and secure.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-[#1E40AF] rounded-2xl flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold hover:underline">
              See full process details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES PREVIEW */}
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Real Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Real buyers. Real machines. Real passive income.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/images/WhatsApp Image 2026-04-09 at 11.10.14 AM.jpeg", name: "Tasha M.", bought: "Snack Vending Machine", quote: "I was skeptical at first, but Michael walked me through every step. My machine now earns me $750/month consistently. Best investment I have made!" },
              { img: "/images/WhatsApp Image 2026-04-09 at 11.10.16 AM.jpeg", name: "James R.", bought: "Combo Vending Machine", quote: "The location Michael secured for me is incredible. I am hitting over $1,000 a month. The process was transparent and professional from start to finish." },
              { img: "/images/WhatsApp Image 2026-04-09 at 11.10.18 AM.jpeg", name: "Chris D.", bought: "Two Machine Package", quote: "Bought two machines at once and it was the best decision. Fletcher's Vending handled everything — delivery, setup, training. I earn passive income every week." },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-blue-50 pt-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                    <Image src={t.img} alt={t.name} fill className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">Bought: {t.bought}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/success-stories" className="inline-flex items-center gap-2 bg-[#1E40AF] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#1e3a8a] transition-colors">
              View All Success Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="bg-white py-16 border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-widest font-semibold mb-10">Why Buyers Trust Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "Secure Payments", desc: "PayPal & Stripe accepted" },
              { icon: CheckCircle, label: "Clear Agreements", desc: "Written contracts always" },
              { icon: Award, label: "Licensed Business", desc: "Fully registered & insured" },
              { icon: Users, label: "24-hr Support", desc: "We respond within 24 hours" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Icon size={24} className="text-[#1E40AF]" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#1e3a8a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Earning Passive Income?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Browse available machines or schedule a free consultation with Michael Bennet today. Locations sell fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/machines" className="flex items-center gap-2 bg-white text-[#1E40AF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              View Available Machines <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

