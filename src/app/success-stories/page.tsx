import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import StoriesGrid from "@/components/StoriesGrid"

const stories = [
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

const caseStudies = [
  {
    title: "Gym Location Case Study",
    img: "/vending machine/mvm.webp",
    location: "High-Traffic Gym – 300+ members",
    machine: "Combo Machine (Snacks + Drinks)",
    avgVisitors: "300+ daily",
    purchaseRate: "~18% of visitors buy daily",
    avgSale: "$2.50 avg transaction",
    monthlyEarning: "$800–$1,200/month",
    notes: "Gym members buy pre- and post-workout snacks and drinks consistently. Weekend traffic is especially high.",
  },
  {
    title: "Office Park Case Study",
    img: "/vending machine/Snack-Vending-Machine..jpg",
    location: "Office Park – 200+ employees",
    machine: "Snack Machine",
    avgVisitors: "200+ daily Mon–Fri",
    purchaseRate: "~25% during lunch/break hours",
    avgSale: "$2.00 avg transaction",
    monthlyEarning: "$600–$900/month",
    notes: "Office workers are habitual buyers. Predictable, consistent income with low variance month to month.",
  },
]

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Real People. Real Results.</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Every person below started exactly where you are — curious, cautious, and looking for a reliable income stream. Here is what happened next.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StoriesGrid />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {stories.map((s) => (
              <div key={s.name} className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Large photo */}
                <div className="relative w-full h-80 flex-shrink-0">
                  <Image src={s.img} alt={s.name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  {/* Stars */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 rounded-full px-3 py-1.5 shadow">
                    {[...Array(s.rating)].map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  {/* Earnings badge */}
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {s.monthlyEarning}
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-xl leading-tight">{s.name}</p>
                    <p className="text-blue-200 text-xs">{s.location} &bull; {s.bought}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed italic text-sm mb-5 flex-1">&ldquo;{s.quote}&rdquo;</p>
                  {/* Stats row */}
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
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Data Breakdown</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Location Earnings Case Studies</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              See the actual earnings breakdown for two of our most popular location types so you know what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
                <div className="bg-[#F0F6FF] flex items-center justify-center p-4" style={{minHeight: '200px'}}>
                  <Image src={cs.img} alt={cs.title} width={400} height={400} className="w-full h-auto object-contain" style={{maxHeight: '180px'}} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{cs.title}</h3>
                  <p className="text-[#1E40AF] text-sm mb-4">{cs.location}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: "Machine Type", val: cs.machine },
                      { label: "Daily Visitors", val: cs.avgVisitors },
                      { label: "Purchase Rate", val: cs.purchaseRate },
                      { label: "Avg Transaction", val: cs.avgSale },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-[#F0F6FF] rounded-xl p-3">
                        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                        <p className="font-semibold text-gray-900 text-sm">{val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                    <p className="text-xs text-green-700 font-semibold uppercase mb-1">Estimated Monthly Earnings</p>
                    <p className="text-2xl font-extrabold text-green-600">{cs.monthlyEarning}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{cs.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#1e3a8a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Success Story Starts Here</h2>
          <p className="text-blue-200 text-lg mb-8">Join 40+ buyers already earning passive income. Browse our available machines today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/machines" className="flex items-center gap-2 bg-white text-[#1E40AF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              View Available Machines <ArrowRight size={18} />
            </Link>
            <a href="tel:+13472352199" className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              <Phone size={18} /> Call Michael Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
