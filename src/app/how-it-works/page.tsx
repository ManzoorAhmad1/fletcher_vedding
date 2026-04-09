import Link from "next/link"
import { ArrowRight, Phone, Shield, FileText, Eye, CreditCard, Truck, DollarSign } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Eye,
    title: "Browse & Choose a Machine",
    desc: "Start by exploring our available machines on the Available Machines page. Each listing includes the machine type, location details, estimated monthly earnings, condition, and price. Take your time and find the one that fits your goals and budget.",
    detail: "We encourage questions at this stage. Call Michael anytime to discuss which machine and location is right for you.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Make a Secure Deposit",
    desc: "Once you have chosen a machine, secure it with a deposit. This locks in the machine and location while we prepare the purchase agreement. We accept PayPal and Stripe for your security.",
    detail: "Your deposit is fully documented and applied toward the total purchase price. Nothing is taken without a written record.",
  },
  {
    step: "03",
    icon: Eye,
    title: "Inspect the Machine (Optional)",
    desc: "If you are nearby, you are welcome to inspect the machine in person before finalizing. We encourage transparency and want you to feel 100% confident in your purchase.",
    detail: "For remote buyers, we provide detailed photos and video of the machine and location on request.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Review & Sign the Agreement",
    desc: "We provide a clear, straightforward purchase agreement covering the machine, location, terms of the sale, and what is included. You will always know exactly what you are getting.",
    detail: "No complicated legal language. We walk you through the agreement personally.",
  },
  {
    step: "05",
    icon: Shield,
    title: "Finalize Payment",
    desc: "After reviewing and signing the agreement, you complete the remaining payment. We accept multiple secure payment methods including PayPal, Stripe, and bank transfer.",
    detail: "A full receipt and transfer documentation is provided upon payment.",
  },
  {
    step: "06",
    icon: Truck,
    title: "Delivery & Setup",
    desc: "We handle delivery and professional installation of your machine at the secured location. We ensure the machine is fully operational, stocked, and ready to earn before we hand it over.",
    detail: "On delivery day, we walk you through operation, teach you how to restock, and answer any questions.",
  },
  {
    step: "07",
    icon: DollarSign,
    title: "Start Earning Immediately",
    desc: "Your machine is in place, stocked, and generating income from day one. You now have a real passive income stream in a proven, high-traffic location.",
    detail: "We remain available for ongoing support, maintenance questions, and restocking advice.",
  },
]

const faqs = [
  { q: "How long does the full process take?", a: "Typically 1–2 weeks from deposit to delivery, depending on your location and machine availability." },
  { q: "Is my deposit refundable?", a: "Deposits are refundable if we cannot complete the sale for any reason on our end. For buyer-initiated cancellations, this is outlined clearly in the purchase agreement." },
  { q: "Do I need any prior experience?", a: "No experience needed. We provide complete training on restocking, maintenance, and operating your machine." },
  { q: "What payment methods do you accept?", a: "We accept PayPal, Stripe (credit/debit cards), and bank transfers. All payments are documented with receipts." },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Step by Step</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A simple, transparent, 7-step process from choosing your machine to collecting your first earnings.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.step} className="flex gap-6 items-start">
                  {/* Step number + line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1E40AF] rounded-2xl flex items-center justify-center text-white font-extrabold text-xl">
                      {s.step}
                    </div>
                    {i < steps.length - 1 && <div className="w-0.5 bg-blue-100 flex-1 min-h-10 mt-3" />}
                  </div>

                  {/* Content */}
                  <div className="bg-white border border-blue-100 rounded-2xl p-6 flex-1 mb-3 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon size={20} className="text-[#1E40AF]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">{s.desc}</p>
                    <div className="bg-[#F0F6FF] rounded-xl p-4">
                      <p className="text-sm text-[#1E40AF] font-medium">&rarr; {s.detail}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* QUICK FAQs */}
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Common Questions</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Process</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs" className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold hover:underline">
              See all FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#1e3a8a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">Browse available machines or call Michael to discuss your options today.</p>
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
