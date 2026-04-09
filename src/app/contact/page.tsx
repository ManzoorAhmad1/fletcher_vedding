"use client"
import { useState } from "react"
import { Phone, Mail, Clock, MapPin, CheckCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: connect to EmailJS or Formspree
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ready to start earning? Have a question? Michael Bennet responds personally to every inquiry — usually within the same day.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Ways to Reach Us</h2>
              <div className="space-y-5">
                <a href="tel:+13472352199" className="flex items-center gap-5 p-5 bg-[#F0F6FF] rounded-2xl border border-blue-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-[#1E40AF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Call or Text</p>
                    <p className="font-bold text-gray-900 text-lg">+1 (347) 235-2199</p>
                    <p className="text-gray-500 text-sm">Michael Bennet – Owner</p>
                  </div>
                </a>

                <a href="mailto:info@fletchersvending.com" className="flex items-center gap-5 p-5 bg-[#F0F6FF] rounded-2xl border border-blue-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-[#1E40AF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Email</p>
                    <p className="font-bold text-gray-900">info@fletchersvending.com</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 p-5 bg-[#F0F6FF] rounded-2xl border border-blue-100">
                  <div className="w-14 h-14 bg-[#1E40AF] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Response Time</p>
                    <p className="font-bold text-gray-900">Within 24 Hours</p>
                    <p className="text-gray-500 text-sm">Usually same-day for calls & texts</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-[#F0F6FF] rounded-2xl border border-blue-100">
                  <div className="w-14 h-14 bg-[#1E40AF] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Service Area</p>
                    <p className="font-bold text-gray-900">United States</p>
                    <p className="text-gray-500 text-sm">Serving buyers nationwide</p>
                  </div>
                </div>
              </div>

              {/* Promise box */}
              <div className="mt-8 bg-gradient-to-br from-[#1E40AF] to-[#1e3a8a] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Our Promise to You</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  {[
                    "We respond to every inquiry personally",
                    "No high-pressure sales tactics — ever",
                    "Honest answers to every question",
                    "Free consultation with no obligation",
                    "24-hour response guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-2">Thank you for reaching out. Michael will personally get back to you within 24 hours.</p>
                  <p className="text-gray-500 text-sm">For urgent inquiries, call directly: <a href="tel:+13472352199" className="text-[#1E40AF] font-semibold">+1 (347) 235-2199</a></p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">I am interested in...</label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="snack">Snack Vending Machine</option>
                      <option value="drinks">Drink / Beverage Machine</option>
                      <option value="combo">Combo Machine</option>
                      <option value="healthy">Healthy Options Machine</option>
                      <option value="multiple">Multiple Machines</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about what you are looking for, your budget, preferred location type, or any questions you have..."
                      className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full bg-[#1E40AF] text-white font-bold py-4 rounded-xl hover:bg-[#1e3a8a] transition-colors text-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respond within 24 hours. Your information is private and never shared.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
