"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is downloading from Instagram legal?",
    a: "Downloading for personal use is fine, but copyright belongs to the creator.",
  },
  { q: "Do I need to log in?", a: "No, just paste a public Instagram link." },
  {
    q: "What devices are supported?",
    a: "Works on mobile, tablet, and desktop.",
  },
  {
    q: "What quality do I get?",
    a: "Photos in full resolution, videos in MP4 HD.",
  },
  {
    q: "Is it safe?",
    a: "Yes, we don’t track your data or require sign-up. Secure and private downloads.",
  },
];

export default function FaqList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="overflow-hidden rounded-lg border">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
              onClick={() => toggleFaq(i)}
            >
              {faq.q}
              <span className="text-xl">{openFaq === i ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-700"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
