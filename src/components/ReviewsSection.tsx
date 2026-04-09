"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, X, TrendingUp } from "lucide-react"

const reviews = [
  {
    img: "/images/buyer-1.jpg",
    name: "Tasha M.",
    bought: "Snack Vending Machine",
    earning: "$750/month",
    quote: "I was skeptical at first, but Michael walked me through every step. My machine now earns me $750/month consistently. Best investment I have made!",
  },
  {
    img: "/images/buyer-2.jpg",
    name: "James R.",
    bought: "Combo Vending Machine",
    earning: "$1,000+/month",
    quote: "The location Michael secured for me is incredible. I am hitting over $1,000 a month. The process was transparent and professional from start to finish.",
  },
  {
    img: "/images/buyer-3.jpg",
    name: "Chris D.",
    bought: "Two Machine Package",
    earning: "$1,800+/month",
    quote: "Bought two machines at once and it was the best decision. Fletcher's Vending handled everything — delivery, setup, training. I earn passive income every week.",
  },
]

type Review = (typeof reviews)[0]

export default function ReviewsSection() {
  const [active, setActive] = useState<Review | null>(null)

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
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Real Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Real buyers. Real machines. Real passive income.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((t) => (
              <div
                key={t.name}
                onClick={() => setActive(t)}
                className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image src={t.img} alt={t.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  {/* hover hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-[#1E40AF] font-semibold text-xs px-4 py-2 rounded-full shadow-lg">
                      Click to view full photo
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/95 rounded-full px-3 py-1.5 shadow z-10">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow z-10">
                    {t.earning}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-4 line-clamp-3">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-blue-50 pt-3 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">Purchased: {t.bought}</p>
                    </div>
                    <span className="text-[#1E40AF] text-xs font-semibold flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      View <ArrowRight size={12} />
                    </span>
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
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="bg-green-100 text-green-700 font-bold text-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                  <TrendingUp size={13} /> {active.earning}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-0.5">{active.name}</h3>
              <p className="text-[#1E40AF] text-xs font-semibold mb-4">Purchased: {active.bought}</p>
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
