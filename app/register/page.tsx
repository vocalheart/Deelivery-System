"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Store,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Lock,
  FileText,
  Eye,
  Loader2,
  CheckCircle2,
  ChefHat,
  Utensils,
  Package,
} from "lucide-react";

const SERVICE_TYPES = [
  { id: "daily", label: "Daily Meals", icon: Utensils },
  { id: "tiffin", label: "Tiffin Service", icon: ChefHat },
  { id: "bulk", label: "Bulk Orders", icon: Package },
];

export default function PartnerRegister() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    businessName: "",
    city: "",
    address: "",
    serviceTypes: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: string, val: string) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const toggleService = (id: string) => {
    setForm((p) => ({
      ...p,
      serviceTypes: p.serviceTypes.includes(id)
        ? p.serviceTypes.filter((s) => s !== id)
        : [...p.serviceTypes, id],
    }));
    setErrors((p) => ({ ...p, serviceTypes: "" }));
  };

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone || form.phone.length < 7) e.phone = "Enter a valid phone number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.businessName.trim()) e.businessName = "Business name is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (form.serviceTypes.length === 0) e.serviceTypes = "Select at least one service type";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
    console.log("Partner registered:", form);
  };

  // ── Success Screen ──
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-orange-100/60 border border-orange-100 overflow-hidden text-center">
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />
          <div className="p-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-100">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Application Submitted!</h2>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed max-w-xs mx-auto">
              Thanks <span className="font-semibold text-gray-700">{form.fullName}</span>! We've received your partner application. Our team will review and contact you within <span className="font-semibold text-orange-500">24–48 hours</span>.
            </p>
            <div className="mt-8 bg-orange-50 rounded-2xl p-4 text-left">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Submitted Details</p>
              <div className="space-y-1.5 text-sm text-gray-700">
                <div className="flex gap-2"><span className="text-gray-400 w-24 shrink-0">Business</span><span className="font-medium">{form.businessName}</span></div>
                <div className="flex gap-2"><span className="text-gray-400 w-24 shrink-0">Phone</span><span className="font-medium">{form.countryCode} {form.phone}</span></div>
                <div className="flex gap-2"><span className="text-gray-400 w-24 shrink-0">City</span><span className="font-medium">{form.city}</span></div>
              </div>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-sm hover:shadow-orange-200 hover:shadow-lg text-sm w-full"
            >
              Go to Login <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-orange-100/60 border border-orange-100 overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />

          <div className="p-8">

            {/* Logo */}
            <div className="flex justify-center mb-6">
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
                Partner Registration
              </span>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2].map((s) => (
                <div key={s} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step >= s
                        ? "bg-orange-500 text-white shadow-sm shadow-orange-200"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                  </div>
                  <span className={`text-xs font-medium ${step >= s ? "text-orange-500" : "text-gray-400"}`}>
                    {s === 1 ? "Personal Info" : "Business Info"}
                  </span>
                </div>
              ))}
              <div className={`h-0.5 w-full max-w-[60px] rounded-full transition-all duration-300 ${step === 2 ? "bg-orange-400" : "bg-gray-100"} mb-5`} />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
              {step === 1 ? "Personal Details" : "Business Details"}
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-7">
              {step === 1
                ? "Tell us a bit about yourself to get started."
                : "Help us understand your food business."}
            </p>

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <div className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    <User className="w-3.5 h-3.5 text-orange-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition-all duration-200 ${
                      errors.fullName
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    Phone Number
                  </label>
                  <div className={`flex rounded-xl border overflow-hidden transition-all duration-200 focus-within:ring-2 ${
                    errors.phone ? "border-red-300 focus-within:ring-red-100" : "border-gray-200 focus-within:border-orange-400 focus-within:ring-orange-100"
                  }`}>
                    <div className="relative flex items-center shrink-0 bg-gray-50 border-r border-gray-200 px-3">
                      <select
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className="appearance-none bg-transparent text-sm font-semibold text-gray-700 outline-none pr-5 cursor-pointer py-3.5"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
                      maxLength={10}
                      className="w-full px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none bg-white"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                    Email Address{" "}
                    <span className="text-gray-400 font-normal normal-case tracking-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition-all duration-200 ${
                      errors.email
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.email}</p>}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-orange-200 hover:shadow-lg text-sm"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <div className="space-y-5">

                {/* Business Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    <Store className="w-3.5 h-3.5 text-orange-400" />
                    Business / Kitchen Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sharma's Home Kitchen"
                    value={form.businessName}
                    onChange={(e) => update("businessName", e.target.value)}
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition-all duration-200 ${
                      errors.businessName
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    }`}
                  />
                  {errors.businessName && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.businessName}</p>}
                </div>

                {/* City */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Bhopal"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition-all duration-200 ${
                      errors.city
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    }`}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.city}</p>}
                </div>

                {/* Address */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    Full Address
                  </label>
                  <textarea
                    placeholder="House No., Street, Area, City, Pincode"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    rows={3}
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none resize-none transition-all duration-200 ${
                      errors.address
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    }`}
                  />
                  {errors.address && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.address}</p>}
                </div>

                {/* Service Types */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">
                    <ChefHat className="w-3.5 h-3.5 text-orange-400" />
                    Services You Offer
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {SERVICE_TYPES.map(({ id, label, icon: Icon }) => {
                      const selected = form.serviceTypes.includes(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleService(id)}
                          className={`flex flex-col items-center gap-2 py-3 px-2 rounded-xl border-2 text-xs font-semibold transition-all duration-200 ${
                            selected
                              ? "border-orange-400 bg-orange-50 text-orange-600"
                              : "border-gray-200 bg-white text-gray-500 hover:border-orange-200 hover:bg-orange-50/50"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${selected ? "text-orange-500" : "text-gray-400"}`} />
                          {label}
                          {selected && <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />}
                        </button>
                      );
                    })}
                  </div>
                  {errors.serviceTypes && <p className="text-xs text-red-500 mt-1.5 pl-1">{errors.serviceTypes}</p>}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-600 hover:text-orange-600 py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-[2] bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-orange-200 hover:shadow-lg text-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <Lock className="w-3 h-3" />
                Secure Registration
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Already have account */}
            <p className="text-sm text-gray-500 text-center mt-4">
              Already a partner?{" "}
              <Link href="/login" className="text-orange-500 font-semibold hover:underline">
                Login here
              </Link>
            </p>

            {/* Terms */}
            <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
              By registering, you agree to our{" "}
              <Link href="/terms" className="inline-flex items-center gap-0.5 text-gray-600 underline underline-offset-2 hover:text-orange-500 transition">
                <FileText className="w-3 h-3" />
                Terms
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
            <Lock className="w-3.5 h-3.5" />
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