"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X, TrendingUp, MapPin } from "lucide-react"

export const stories = [
  {
    img: "/images/buyer-1.jpg",
    name: "Tasha M.",
    location: "Chicago, IL",
    bought: "Snack Vending Machine",
    machineLocation: "Nail salon – 60+ daily customers",
    monthlyEarning: "$750/month",
    quote: "I was skeptical at first, but Michael walked me through every single step. He was transparent about everything — the location, the earnings history, the machine condition. My machine has been running for 8 months now and earns me $750 every month consistently. It is truly passive income. I just restock it once a week and the money comes in on its own. Best investment I have ever made.",
    rating: 5,
  },
  {
    img: "/images/buyer-2.jpg",
    name: "James R.",
    location: "Atlanta, GA",
    bought: "Combo Vending Machine",
    machineLocation: "Corporate office – 150+ employees",
    monthlyEarning: "$1,050/month",
    quote: "The location Michael secured for me is incredible. A busy corporate office with over 150 employees who buy from the machine every single day. I am hitting over $1,000 a month consistently. Michael handled the delivery, setup, and training personally. The process was transparent, professional, and quick. I went from signing to earning in under 2 weeks. Highly recommend to anyone looking for a serious income stream.",
    rating: 5,
  },
  {
    img: "/images/buyer-3.jpg",
    name: "Chris D.",
    location: "Houston, TX",
    bought: "Two Machine Package",
    machineLocation: "Shooting range & gym",
    monthlyEarning: "$1,800+/month combined",
    quote: "I bought two machines at once and it was the best financial decision I have made in years. Fletcher's Vending handled absolutely everything — delivery, setup, training, and even helped me understand the restocking schedule. Both machines are performing above expectations. I earn over $1,800 combined every month. Michael is responsive, honest, and genuinely wants you to succeed. I am already planning to buy a third machine.",
    rating: 5,
  },
  {
    img: "/images/buyer-4.jpg",
    name: "Kyla F.",
    location: "Dallas, TX",
    bought: "Beverage Vending Machine",
    machineLocation: "Car wash & detail shop",
    monthlyEarning: "$620/month",
    quote: "I never thought I could own a vending machine business but Michael made it so simple. He found me the perfect location at a car wash where customers always wait 20–30 minutes — so they always buy something. I was earning money within 3 days of delivery. Michael even called me two weeks later just to check in. That kind of service is rare. Very happy with my investment.",
    rating: 5,
  },
  {
    img: "/images/buyer-3.jpg",
    name: "Marcus T.",
    location: "Memphis, TN",
    bought: "Snack & Beverage Combo",
    machineLocation: "Warehouse facility – 80 workers",
    monthlyEarning: "$890/month",
    quote: "Warehouse workers buy from the machine during breaks and after shifts — it is the perfect location. Michael explained exactly why the location works before I ever put a dollar down. I appreciated how honest he was about realistic earnings. I am making $890 a month with zero stress. The machine basically runs itself once you get a good restocking routine going. Could not be happier.",
    rating: 5,
  },
]

type Story = (typeof stories)[0]

export default function StoriesGrid() {
  const [active, setActive] = useState<Story | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [active])

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {stories.map((s) => (
          <div
            key={s.name + s.location}
            onClick={() => setActive(s)}
            className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
          >
            <div className="relative w-full h-80 flex-shrink-0 overflow-hidden">
              <Image src={s.img} alt={s.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              {/* hover hint */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-[#1E40AF] font-semibold text-xs px-4 py-2 rounded-full shadow-lg z-10">
                  Click to view full photo
                </span>
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 rounded-full px-3 py-1.5 shadow z-10">
                {[...Array(s.rating)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow z-10">
                {s.monthlyEarning}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <p className="text-white font-bold text-xl leading-tight">{s.name}</p>
                <p className="text-blue-200 text-xs">{s.location} &bull; {s.bought}</p>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-gray-700 leading-relaxed italic text-sm mb-5 flex-1 line-clamp-4">&ldquo;{s.quote}&rdquo;</p>
              <div className="grid grid-cols-2 gap-3 border-t border-blue-50 pt-4">
                <div className="bg-[#F0F6FF] rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <TrendingUp size={12} className="text-[#1E40AF]" />
                    <span className="text-xs font-semibold text-gray-500">Monthly Earnings</span>
                  </div>
                  <p className="text-green-600 font-bold text-sm">{s.monthlyEarning}</p>
                </div>
                <div className="bg-[#F0F6FF] rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={12} className="text-[#1E40AF]" />
                    <span className="text-xs font-semibold text-gray-500">Location</span>
                  </div>
                  <p className="text-gray-700 font-medium text-xs">{s.machineLocation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-md max-h-[92vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              {/* Full uncropped image */}
              <Image src={active.img} alt={active.name} width={600} height={900} className="w-full h-auto block" />
            </div>
            <div className="p-5 overflow-y-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[...Array(active.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="bg-green-100 text-green-700 font-bold text-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                  <TrendingUp size={13} /> {active.monthlyEarning}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-0.5">{active.name}</h3>
              <p className="text-gray-400 text-xs mb-1">{active.location}</p>
              <p className="text-[#1E40AF] text-xs font-semibold mb-3">Purchased: {active.bought}</p>
              <div className="flex items-center gap-2 bg-[#F0F6FF] rounded-xl p-3 mb-4">
                <MapPin size={14} className="text-[#1E40AF] flex-shrink-0" />
                <p className="text-gray-700 text-xs font-medium">{active.machineLocation}</p>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic text-sm border-l-4 border-blue-200 pl-4">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
