"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50">

      {/* HERO SECTION */}
      <section className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Fresh Meals <br />
              Delivered to Your Door 🍱
            </h1>

            <p className="text-gray-500 mt-4">
              Order home-style tiffins, daily meals, and bulk food for events —
              fast, fresh & affordable.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/login"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
              >
                Order Now
              </Link>

              <Link
                href="/register"
                className="border px-6 py-3 rounded-md hover:bg-gray-100"
              >
                Become Partner
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-[400px] h-[250px] bg-orange-100 rounded-xl flex items-center justify-center">
            🍛 Image Here
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold">🍱 Daily Meals</h3>
              <p className="text-sm text-gray-500 mt-2">
                Freshly cooked meals delivered daily at your home or office.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold">🥗 Tiffin Service</h3>
              <p className="text-sm text-gray-500 mt-2">
                Affordable and healthy tiffin plans for students & working professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold">🍛 Bulk Orders</h3>
              <p className="text-sm text-gray-500 mt-2">
                Order food in bulk for events, parties, or office meetings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-semibold text-center text-gray-800">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">

            <div>
              <div className="text-3xl">📱</div>
              <h4 className="font-semibold mt-2">Choose Food</h4>
              <p className="text-sm text-gray-500">
                Browse meals, tiffins, or bulk menu.
              </p>
            </div>

            <div>
              <div className="text-3xl">🛒</div>
              <h4 className="font-semibold mt-2">Place Order</h4>
              <p className="text-sm text-gray-500">
                Easy checkout with secure payment.
              </p>
            </div>

            <div>
              <div className="text-3xl">🚚</div>
              <h4 className="font-semibold mt-2">Fast Delivery</h4>
              <p className="text-sm text-gray-500">
                Get your food delivered quickly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-orange-500 text-white text-center">
        <h2 className="text-2xl font-semibold">
          Start Your Food Journey Today 🍽️
        </h2>

        <Link
          href="/login"
          className="inline-block mt-6 bg-white text-orange-500 px-6 py-3 rounded-md font-medium"
        >
          Order Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Ready Mealz. All rights reserved.
      </footer>

    </div>
  );
}