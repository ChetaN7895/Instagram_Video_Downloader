"use client";

import { motion } from "framer-motion";
import { Copy, Link as LinkIcon, Download } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";

// ✅ Import a clean modern font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export function DownloadSteps() {
  const steps = [
    {
      icon: <Copy className="h-10 w-10 animate-bounce text-purple-600" />,
      img: "/images/step1.png",
      title: "Copy Instagram Link",
      desc: "Open Instagram, choose the Reel, Post, or Video you want, and copy its link and Paste here.",
    },
    {
      icon: <LinkIcon className="h-50 w-50 animate-pulse text-purple-600" />,
      img: "/images/step2.png",
      title: "Paste the Link",
      desc: "After Paste the copied link into our input box above they will redirect to video and then download.",
    },
    {
      // ✅ Bold + animated download icon
      icon: (
        <Download className="h-10 w-10 animate-spin font-bold text-purple-600" />
      ),
      img: "/images/demo.gif",
      title: "Click Download",
      desc: "Full Guide Step By Step Download Your Reel in Simple Steps.",
    },
  ];

  return (
    <section className={`bg-white py-16 ${poppins.className}`}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900">
          How to Download Instagram Reels?
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-gray-50 p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>

              {/* ✅ Responsive image with fixed height */}
              <div className="relative mb-4 h-64 w-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="rounded-md object-fill shadow-md"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
