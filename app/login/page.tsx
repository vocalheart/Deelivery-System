"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Lock,
  ChevronDown,
  UserPlus,
  FileText,
  Eye,
  Loader2,
} from "lucide-react";

export default function PartnerLogin() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!phone || phone.length < 7) {
      alert("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    console.log("OTP sent to:", countryCode + phone);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-orange-100/60 border border-orange-100 overflow-hidden">

          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />

          <div className="p-8">

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white font-extrabold text-sm">RM</span>
                </div>
                <span className="text-orange-500 font-extrabold text-xl tracking-tight">
                  Ready<span className="text-gray-900">Mealz</span>
                </span>
              </Link>
            </div>

            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-100">
                <ShieldCheck className="w-3.5 h-3.5" />
                Partner Portal
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center leading-tight">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 text-center mt-2 leading-relaxed">
              Enter your phone number to receive a secure OTP login code.
            </p>

            {/* Phone Input */}
            <div className="mt-8">
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                Phone Number
              </label>
              <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all duration-200 bg-white">
                {/* Country Code Selector */}
                <div className="relative flex items-center shrink-0 bg-gray-50 border-r border-gray-200 px-3">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent text-sm font-semibold text-gray-700 outline-none pr-5 cursor-pointer"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 pointer-events-none" />
                </div>
                {/* Number Field */}
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  maxLength={10}
                  className="w-full px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none bg-white"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5 pl-1">
                We'll send a 6-digit OTP to this number
              </p>
            </div>

            {/* Send OTP Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-orange-200 hover:shadow-lg text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending OTP...
                </>
              ) : (
                <>
                  Send OTP
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <Lock className="w-3 h-3" />
                Secure Connection
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Register Button */}
            <Link
              href="/register"
              className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700 hover:text-orange-600 py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm"
            >
              <UserPlus className="w-4 h-4" />
              New Partner? Register Now
            </Link>

            {/* Terms */}
            <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="inline-flex items-center gap-0.5 text-gray-600 underline underline-offset-2 hover:text-orange-500 transition">
                <FileText className="w-3 h-3" />
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="inline-flex items-center gap-0.5 text-gray-600 underline underline-offset-2 hover:text-orange-500 transition">
                <Eye className="w-3 h-3" />
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Footer Strip */}
          <div className="bg-gray-50 border-t border-gray-100 px-8 py-3 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
            <Lock className="w-3.5 h-3.5 text-gray-400" />
            AUTHORIZED PARTNER ACCESS ONLY
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Need help?{" "}
          <Link href="/support" className="text-orange-500 hover:underline font-medium">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}