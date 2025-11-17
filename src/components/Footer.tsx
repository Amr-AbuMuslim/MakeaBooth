import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-700 border-t border-gray-200">
      {/* Top Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FEA537] via-[#ffcc7a] to-[#FEA537]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/LOGO (1) (2).png"
                alt="Make A Booth"
                className="w-24 h-24 object-contain drop-shadow-md"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our product is an eco-friendly display system crafted from
              high-quality aluminum. Its foldable trusses seamlessly connect to
              create stunning, durable, and fully customizable booths for
              exhibitions, trade shows, and events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FEA537] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#FEA537] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#FEA537] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#FEA537] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Booth Types */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Display Options
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>U-Shape Booths</li>
              <li>L-Shape Booths</li>
              <li>Luxury Booths</li>
              <li>Modular Systems</li>
              <li>Customizable Structures</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#FEA537]" /> (315) 512-5452
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#FEA537]" />{" "}
                Marketing@makeabooth.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#FEA537]" />
                80 Adams St, Malden, MA 02148
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#FEA537]" />
                www.makeabooth.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Make A Booth. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/make-a-booth"
              className="hover:text-[#FEA537] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
