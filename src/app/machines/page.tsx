import Image from "next/image"
import Link from "next/link"
import { MapPin, TrendingUp, ArrowRight, Phone, CheckCircle, Package } from "lucide-react"

const machines = [
  {
    id: 1,
    img: "/vending machine/Snack-Vending-Machine..jpg",
    title: "Snack Vending Machine",
    type: "Snack",
    condition: "Refurbished – Excellent",
    location: "Busy Office Park – 200+ employees daily",
    locationNote: "High foot traffic during lunch and break hours. Consistent buyers every day.",
    earnings: "$600–$900/mo",
    price: "$4,500",
    includes: ["Delivery & installation", "Initial stocking", "Restocking training", "30-day support"],
    available: true,
  },
  {
    id: 2,
    img: "/vending machine/mvm.webp",
    title: "Combo Vending Machine",
    type: "Combo",
    condition: "Refurbished – Like New",
    location: "High-Traffic Gym – 300+ members",
    locationNote: "Members purchase drinks and snacks before and after workouts. High volume guaranteed.",
    earnings: "$800–$1,200/mo",
    price: "$5,800",
    includes: ["Delivery & installation", "Initial stocking", "Restocking training", "60-day support"],
    available: true,
  },
  {
    id: 3,
    img: "/vending machine/Automatic-Snack-Beverage-Vending-Machine..jpg",
    title: "Snack & Beverage Machine",
    type: "Snack & Beverage",
    condition: "Refurbished – Excellent",
    location: "Corporate Building – 150 employees",
    locationNote: "Long-term placement secured. Employees rely on machine throughout the day.",
    earnings: "$700–$1,000/mo",
    price: "$5,200",
    includes: ["Delivery & installation", "Initial stocking", "Restocking training", "30-day support"],
    available: true,
  },
  {
    id: 4,
    img: "/vending machine/Fruits_Vending_Machine-scaled.webp",
    title: "Healthy Options Machine",
    type: "Healthy",
    condition: "Refurbished – Good",
    location: "Medical Office Complex – 100+ staff",
    locationNote: "Health-conscious staff and patients demand fresh, healthy snack options year-round.",
    earnings: "$400–$700/mo",
    price: "$3,800",
    includes: ["Delivery & installation", "Initial stocking", "Restocking training", "30-day support"],
    available: true,
  },
  {
    id: 5,
    img: "/vending machine/Merchant-MEDIA-6-Combi-Hi-Res-1.webp",
    title: "Premium Combo Machine",
    type: "Combo",
    condition: "New – Warranty Included",
    location: "University Campus – 500+ students daily",
    locationNote: "Campus location with year-round demand from students and faculty. Top performer.",
    earnings: "$1,000–$1,500/mo",
    price: "$7,500",
    includes: ["Delivery & installation", "Initial stocking", "Restocking training", "90-day support", "Manufacturer warranty"],
    available: true,
  },
  {
    id: 6,
    img: "/vending machine/istockphoto-2187720173-612x612.jpg",
    title: "Beverage Vending Machine",
    type: "Drinks",
    condition: "Refurbished – Excellent",
    location: "Warehouse Facility – 80+ workers",
    locationNote: "Physical workers purchase drinks consistently throughout long shifts. Steady income.",
    earnings: "$500–$750/mo",
    price: "$4,200",
    includes: ["Delivery & installation", "Initial stocking", "Restocking training", "30-day support"],
    available: false,
  },
]

const typeColors: Record<string, string> = {
  Snack: "bg-orange-100 text-orange-700",
  Combo: "bg-purple-100 text-purple-700",
  "Snack & Beverage": "bg-blue-100 text-blue-700",
  Healthy: "bg-green-100 text-green-700",
  Drinks: "bg-cyan-100 text-cyan-700",
}

export default function MachinesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">For Sale</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Available Vending Machines</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Every machine comes with a pre-secured, high-traffic location, full training, and ongoing support from Michael Bennet personally.
          </p>
        </div>
      </section>

      {/* MACHINES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {machines.map((m) => (
              <div key={m.id} className={`bg-white rounded-2xl overflow-hidden border shadow-sm flex flex-col transition-all duration-300 ${m.available ? "border-blue-100 hover:shadow-xl hover:-translate-y-1" : "border-gray-200 opacity-70"}`}>
                {/* Image */}
                <div className="relative">
                  <div className="bg-white flex items-center justify-center p-4" style={{minHeight: '240px'}}>
                    <Image src={m.img} alt={m.title} width={400} height={400} className="w-full h-auto object-contain" style={{maxHeight: '200px'}} />
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[m.type] || "bg-blue-100 text-blue-700"}`}>{m.type}</span>
                    {!m.available && <span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full">Sold</span>}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-1">{m.title}</h3>
                  <p className="text-xs text-gray-400 mb-4">Condition: {m.condition}</p>

                  {/* Location */}
                  <div className="bg-[#F0F6FF] rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-[#1E40AF]" />
                      <span className="text-sm font-semibold text-gray-800">{m.location}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{m.locationNote}</p>
                  </div>

                  {/* Includes */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1.5"><Package size={12} /> Included:</p>
                    <ul className="space-y-1">
                      {m.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between border-t border-blue-50 pt-4 mb-5">
                    <div>
                      <p className="text-xs text-gray-400 flex items-center gap-1"><TrendingUp size={11} /> Est. Monthly Earnings</p>
                      <p className="text-green-600 font-bold text-lg">{m.earnings}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Price</p>
                      <p className="text-[#1E40AF] font-extrabold text-2xl">{m.price}</p>
                    </div>
                  </div>

                  {m.available ? (
                    <a
                      href="tel:+13472352199"
                      className="flex items-center justify-center gap-2 w-full bg-[#1E40AF] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#1e3a8a] transition-colors mt-auto"
                    >
                      <Phone size={15} /> Call to Purchase
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full bg-gray-100 text-gray-500 py-3 rounded-xl text-sm font-semibold mt-auto cursor-not-allowed">
                      Currently Unavailable
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM LISTING NOTE */}
      <section className="bg-[#F0F6FF] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Don&apos;t See What You&apos;re Looking For?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We regularly add new machines and locations. Contact Michael directly and describe exactly what you are looking for — location type, earnings target, budget — and we will find the perfect match.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+13472352199" className="flex items-center gap-2 bg-[#1E40AF] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#1e3a8a] transition-colors">
              <Phone size={18} /> Call Now
            </a>
            <Link href="/contact" className="flex items-center gap-2 border-2 border-[#1E40AF] text-[#1E40AF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              Send a Message <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
