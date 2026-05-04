"use client";

import { useState } from "react";

export default function PartnerLogin() {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }
    console.log("OTP sent to:", phone);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

        {/* Logo */}
        <h1 className="text-center text-orange-500 font-bold text-lg tracking-wide">
          READY MEALZ
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-6 text-gray-800">
          Partner Login
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Enter your phone number to receive a secure login code.
        </p>

        {/* Phone Input */}
        <div className="mt-6">
          <label className="text-xs font-semibold text-gray-600">
            PHONE NUMBER
          </label>
          <div className="flex mt-2 border rounded-md overflow-hidden">
            <select className="px-3 bg-gray-100 border-r outline-none">
              <option>+1</option>
              <option>+91</option>
            </select>
            <input type="tel" placeholder="555-0123" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 outline-none"/>
          </div>
        </div>
        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
        >
          Send OTP →
        </button>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="px-3 text-xs text-gray-400">
            SECURE CONNECTION
          </span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        {/* Register Button */}
        <button className="w-full border border-gray-400 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
          New Partner? Register Now
        </button>
        {/* Terms */}
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
        {/* Footer */}
        <div className="mt-10 text-center text-xs text-gray-400 border-t pt-4">
          🔒 AUTHORIZED ACCESS ONLY
        </div>
      </div>
    </div>
  );
}