"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight, Phone } from "lucide-react"

const faqCategories = [
  {
    category: "Buying a Machine",
    faqs: [
      {
        q: "Are locations exclusive to my machine?",
        a: "Yes. When you purchase a machine and location from us, that location is exclusively yours. We will never place another machine from our inventory in the same spot.",
      },
      {
        q: "Do I need experience to own a vending machine?",
        a: "No experience is required. We provide full training on how to restock, maintain, and operate your machine. We are also available by phone for ongoing questions.",
      },
      {
        q: "Can I inspect the machine before buying?",
        a: "Absolutely. If you are able to visit in person, we encourage it. For remote buyers, we provide detailed photos and video of both the machine and the location on request.",
      },
      {
        q: "How do I know the location will actually generate sales?",
        a: "We only sell machines in locations we have personally researched and verified. We share foot traffic data, estimated buyer demographics, and where possible, historical sales data from the location. You will see the numbers before you buy.",
      },
      {
        q: "What is included in the purchase price?",
        a: "Every purchase includes delivery and professional installation, initial stocking of the machine, full training on restocking and basic maintenance, and at least 30 days of direct support from Michael. Some machines include extended support or manufacturer warranties — check each listing.",
      },
    ],
  },
  {
    category: "Payments & Deposits",
    faqs: [
      {
        q: "Is my deposit refundable if I change my mind?",
        a: "If we are unable to complete the sale on our end for any reason, your deposit is fully refunded. For buyer-initiated cancellations, our refund policy is clearly outlined in the purchase agreement we provide before you pay a cent.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept PayPal, Stripe (credit and debit cards), and bank transfers. All payments come with a documented receipt and are applied toward the total purchase price.",
      },
      {
        q: "Do I pay the full amount upfront?",
        a: "No. You start with a deposit to secure the machine and location while we prepare the purchase agreement. The remaining balance is paid after you have reviewed and signed the agreement.",
      },
      {
        q: "Are there any hidden fees?",
        a: "Never. The price listed is the price you pay. There are no setup fees, placement fees, or hidden charges. Everything is itemized in the purchase agreement.",
      },
    ],
  },
  {
    category: "Earnings & Operations",
    faqs: [
      {
        q: "How much can I realistically earn per month?",
        a: "Earnings depend on the location and machine type. Our machines typically earn between $400 and $1,500 per month. Each listing includes estimated monthly earnings based on the specific location. We do not inflate these numbers — we share realistic averages.",
      },
      {
        q: "Do I need to stock the machine myself?",
        a: "Yes, you are responsible for restocking your machine. We teach you exactly how to do this during setup. Most buyers restock once or twice a week — it typically takes 30–60 minutes per visit.",
      },
      {
        q: "What happens if the machine breaks down?",
        a: "We provide maintenance support during your support period and can guide you through common issues by phone. For hardware repairs, we can connect you with trusted local technicians. We will never leave you stranded.",
      },
      {
        q: "When will I start earning money?",
        a: "Your machine is fully stocked and operational on delivery day. Many buyers receive their first sales within hours of delivery. You start earning immediately.",
      },
      {
        q: "Can I move the machine to a different location?",
        a: "The machine is yours, so technically yes. However, we strongly recommend keeping it in the verified, high-traffic location we secured — that is the location producing the estimated earnings. Moving it elsewhere carries risk of lower performance.",
      },
    ],
  },
  {
    category: "Support & Process",
    faqs: [
      {
        q: "How long does the full process take?",
        a: "From deposit to delivery typically takes 1–2 weeks, depending on your location and current machine availability.",
      },
      {
        q: "How do I contact Michael for support?",
        a: "You can call or text Michael directly at +1 (347) 235-2199. We also respond to messages via the Contact page. We promise to respond within 24 hours — usually much faster.",
      },
      {
        q: "Do you provide a written purchase agreement?",
        a: "Yes, always. We provide a clear, straightforward purchase agreement before any final payment. You will know exactly what you are buying, what is included, and the terms of the sale.",
      },
      {
        q: "What if I want to buy more than one machine?",
        a: "Many of our buyers purchase a second or third machine after seeing results. We offer multi-machine discussions on a case-by-case basis — just call or message us to talk about options.",
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-blue-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-blue-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <ChevronDown size={18} className={`text-[#1E40AF] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-50 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Got Questions?</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Everything you need to know about buying a vending machine from Fletcher&apos;s Vending Services.
            Transparent answers to real buyer questions.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#1E40AF] rounded-full block" />
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="bg-[#F0F6FF] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or message Michael directly. He personally answers every inquiry and responds within 24 hours — usually the same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+13472352199" className="flex items-center gap-2 bg-[#1E40AF] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#1e3a8a] transition-colors">
              <Phone size={18} /> Call +1 (347) 235-2199
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
