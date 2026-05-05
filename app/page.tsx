"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">

    
      {/* ── HERO ── */}
      <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
              🔥 Fresh & Homemade
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Fresh Meals <br />
              <span className="text-orange-500">Delivered</span> to <br />
              Your Door
            </h1>
            <p className="text-gray-500 mt-5 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
              Order home-style tiffins, daily meals, and bulk food for events — fast, fresh & affordable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
              <Link href="/login" className="w-full sm:w-auto text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-lg hover:shadow-orange-200 hover:shadow-xl text-sm sm:text-base">
                🍽️ Order Now
              </Link>
              <Link href="/register" className="w-full sm:w-auto text-center border-2 border-gray-200 hover:border-orange-300 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:bg-orange-50 transition text-sm sm:text-base">
                Become a Partner
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-1.5">✅ <span>FSSAI Certified</span></span>
              <span className="flex items-center gap-1.5">⚡ <span>30-min Delivery</span></span>
              <span className="flex items-center gap-1.5">🌟 <span>4.8★ Rating</span></span>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-200">
              <span className="text-8xl sm:text-9xl">🍛</span>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold text-gray-800 flex items-center gap-2">
                🚀 <span>Fast Delivery</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold text-gray-800 flex items-center gap-2">
                ❤️ <span>Home Cooked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-orange-500 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: "10K+", label: "Happy Customers" },
            { num: "500+", label: "Meals Daily" },
            { num: "30 min", label: "Avg Delivery" },
            { num: "4.8★", label: "App Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-extrabold">{stat.num}</div>
              <div className="text-sm text-orange-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">Everything you need for delicious, hassle-free meals every day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🍱", title: "Daily Meals", desc: "Freshly cooked meals delivered daily at your home or office. Balanced nutrition, homestyle taste.", tag: "Most Popular" },
              { icon: "🥗", title: "Tiffin Service", desc: "Affordable and healthy tiffin plans for students & working professionals. Weekly & monthly plans.", tag: "Best Value" },
              { icon: "🍛", title: "Bulk Orders", desc: "Order food in bulk for events, parties, or office meetings. Custom menus available.", tag: "Events" },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-transparent hover:border-orange-100 relative overflow-hidden">
                <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">{card.tag}</span>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                <Link href="/login" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-orange-500 hover:text-orange-600 transition">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">Simple Steps</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">Order your favourite food in just 3 easy steps.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-orange-100 z-0" />
            {[
              { icon: "📱", step: "01", title: "Choose Food", desc: "Browse meals, tiffins, or bulk menu from top home chefs near you." },
              { icon: "🛒", step: "02", title: "Place Order", desc: "Easy checkout with secure UPI, card, or cash on delivery payment." },
              { icon: "🚚", step: "03", title: "Fast Delivery", desc: "Your hot, fresh food delivered right to your doorstep in 30 minutes." },
            ].map((step) => (
              <div key={step.title} className="relative z-10 flex flex-col items-center text-center bg-white">
                <div className="w-20 h-20 rounded-full bg-orange-50 border-2 border-orange-100 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-orange-400 tracking-widest mb-1">STEP {step.step}</span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Customers Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Priya S.", role: "Student, Bhopal", text: "The tiffin service is amazing! Tastes just like ghar ka khana. Very affordable too.", avatar: "👩" },
              { name: "Rahul M.", role: "Software Engineer", text: "Order from office every day. Always on time and the food is fresh and delicious!", avatar: "👨" },
              { name: "Sneha K.", role: "Homemaker", text: "Ordered bulk for a family function. They handled everything perfectly. Highly recommend!", avatar: "👩‍🦱" },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">{t.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <p className="text-sm text-gray-600 leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/10 rounded-full" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-5xl mb-4">🍽️</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Start Your Food Journey Today
          </h2>
          <p className="mt-3 text-orange-100 text-sm sm:text-base max-w-md mx-auto">
            Join 10,000+ happy customers already enjoying fresh homemade meals every day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login" className="w-full sm:w-auto bg-white text-orange-500 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 transition shadow-lg text-sm sm:text-base">
              Order Now 🚀
            </Link>
            <Link href="/register" className="w-full sm:w-auto border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition text-sm sm:text-base">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-extrabold text-orange-400 mb-2">ReadyMealz 🍱</div>
              <p className="text-sm leading-relaxed">Fresh, homemade meals delivered to your door. Bhopal's most loved tiffin service.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white mb-3">Quick Links</div>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/login" className="hover:text-orange-400 transition">Order Now</Link>
                <Link href="/register" className="hover:text-orange-400 transition">Become a Partner</Link>
                <Link href="#services" className="hover:text-orange-400 transition">Our Services</Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white mb-3">Contact</div>
              <div className="flex flex-col gap-2 text-sm">
                <span>📞 +91 98765 43210</span>
                <span>📧 hello@readymealz.in</span>
                <span>📍 Bhopal, MP</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Ready Mealz. All rights reserved. Made with ❤️ in India.
          </div>
        </div>
      </footer>
    </div>
  );
}