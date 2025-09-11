"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  Info,
  HelpCircle,
  FileText,
  Home,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export  function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Insta Reel Downloader
        </Link>

        {/* Desktop menu */}
        <div className="hidden space-x-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "font-semibold text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t bg-white md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 ${
                pathname === link.href
                  ? "bg-purple-50 font-semibold text-purple-600"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-gradient-to-r from-gray-50 via-purple-50 to-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-gray-700 sm:grid-cols-2 md:grid-cols-3">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-3 text-lg font-semibold text-purple-700">
            Insta Reel Downloader
          </h3>
          <p className="text-sm text-gray-600">
            Free Instagram downloader for videos and Reels. <br />⚡ Fast, 🔒
            secure, works on all devices.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-3 text-lg font-semibold text-purple-700">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home", icon: Home },
              { href: "/blog", label: "Blog", icon: FileText },
              { href: "/faq", label: "FAQ", icon: HelpCircle },
              { href: "/about", label: "About", icon: Info },
              { href: "/contact", label: "Contact", icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center gap-2 transition hover:text-purple-600"
                >
                  <Icon className="h-4 w-4 text-gray-400 group-hover:text-purple-500" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="mb-3 text-lg font-semibold text-purple-700">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/privacy"
                className="transition hover:text-purple-600"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-purple-600">
                Terms of Service
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div
        className="flex justify-center gap-6 py-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          href="https://www.instagram.com/gaming_zone.world/#"
          target="_blank"
          className="transform text-gray-500 transition hover:scale-110 hover:text-pink-600"
        >
          <Instagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.facebook.com/JaYShriRAM9p/"
          target="_blank"
          className="transform text-gray-500 transition hover:scale-110 hover:text-blue-600"
        >
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="https://youtube.com/@makemoneydailyathome?si=z0VSaHnO65Uu6HtF"
          target="_blank"
          className="transform text-gray-500 transition hover:scale-110 hover:text-red-600"
        >
          <Youtube className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/chetan-solanki-66a6842b5/"
          target="_blank"
          className="transform text-gray-500 transition hover:scale-110 hover:text-blue-700"
        >
          <Linkedin className="h-6 w-6" />
        </Link>

        {/* Github */}
        <Link
          href="https://github.com/ChetaN7895"
          target="_blank"
          className="transform text-gray-500 transition hover:scale-110 hover:text-blue-700"
        >
          <Github className="h-6 w-6" />
        </Link>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="border-t py-4 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-purple-700">
          Insta Reel Downloader
        </span>
        . All rights reserved.
      </motion.div>
    </footer>
  );
}

