"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    stateRegion: "",
    eventType: "",
    products: [] as string[],
    message: "",
    uploadFiles: false,
    sms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, type, value, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProductChange = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />

      {/* ---------------- HEADER ---------------- */}
      <PageHeader title="Contact Transformers" image="/Contact.jpg" />

      {/* ---------------- FORM SECTION ---------------- */}
      <section className="py-20 px-4 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Let us help transform your next event!"
            subtitle="Fill out the form below to request a free quote regarding any of our products or services."
          />

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="mt-14 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#e5e4e0]"
          >
            <h3 className="text-3xl font-serif font-bold mb-8 text-slate-900">
              Free Quote
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {/* Inputs */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537] focus:border-[#fea537] transition"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537]"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name *"
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537]"
              />
              <input
                type="text"
                name="stateRegion"
                value={formData.stateRegion}
                onChange={handleChange}
                placeholder="State/Region *"
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537]"
              />

              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-[#fea537]"
              >
                <option value="">How can we help? *</option>
                <option value="trade-show">Trade Show</option>
                <option value="event">Event</option>
                <option value="brand-space">Brand Space</option>
                <option value="other">Other</option>
              </select>

              {/* Products */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Display design",
                  "Display rental",
                  "Portable displays",
                  "Interactive technology",
                  "Graphics",
                  "Branded environment",
                  "Event services",
                  "Other",
                ].map((product) => (
                  <label
                    key={product}
                    className="flex items-center gap-2 p-3 border border-slate-300 rounded-2xl bg-white shadow-sm cursor-pointer hover:border-[#fea537] transition"
                  >
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product)}
                      onChange={() => handleProductChange(product)}
                      className="accent-[#fea537] w-4 h-4"
                    />
                    <span className="text-sm text-slate-700">{product}</span>
                  </label>
                ))}
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                required
                className="col-span-1 md:col-span-2 w-full p-4 rounded-2xl border border-slate-300 bg-white shadow-sm min-h-[140px] focus:ring-2 focus:ring-[#fea537]"
              />

              {/* Toggles */}
              <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    name="uploadFiles"
                    checked={formData.uploadFiles}
                    onChange={handleChange}
                    className="accent-[#fea537]"
                  />
                  Do you have files to upload?
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    name="sms"
                    checked={formData.sms}
                    onChange={handleChange}
                    className="accent-[#fea537]"
                  />
                  Would you like to receive text messages?
                </label>
              </div>

              <p className="col-span-1 md:col-span-2 text-sm text-slate-500 mt-1 leading-relaxed">
                We do not sell your data. Message & data rates may apply. You
                may opt out at any time by texting STOP. Visit our Privacy
                Policy for more details.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-[#fea537] transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ---------------- CONTACT CARDS ---------------- */}
      <section className="bg-[#f1efea] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#e5e4e0]">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 text-lg text-slate-800">
                <a
                  href="tel:+(315) 512-5452
"
                  className="flex items-center gap-3 hover:text-[#fea537] transition "
                >
                  <Phone size={18} /> +(315) 512-5452
                </a>
                <a
                  href="Email:Marketing@makeabooth.com

"
                  className="flex items-center gap-3 hover:text-[#fea537] transition "
                >
                  <Mail size={18} /> Marketing@makeabooth.com
                </a>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#e5e4e0]">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6">
                We’re Here to Help
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Reach out anytime for booth design, event support, or custom
                exhibition experiences designed specially for the Middle East
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MAP SECTION ---------------- */}
      <section className="py-20 px-4 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-6">
            Location on Map
          </h2>

          <p className="text-center text-slate-600 mb-10">
            Visit us or reach out anytime — we’re always ready to transform your
            event.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#e5e4e0]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65322135.879672326!2d67.24123812818628!3d2.1739289119857763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3714358c8dea5%3A0x4bf5142448be2fc1!2zODAgQWRhbXMgU3QsIE1hbGRlbiwgTUEgMDIxNDjYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1763292143165!5m2!1sar!2seg"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
