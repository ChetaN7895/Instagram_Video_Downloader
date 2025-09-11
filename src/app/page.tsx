"use client";
import Link from "next/link";
import { useState } from "react";
import { InstagramVideoForm } from "@/features/instagram/components/form";
import { Download, Link2, CheckCircle, Zap, Smartphone, Film, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FaqPreview from "@/components/FaqPreview";
import { blogPosts } from "@/data/blogPosts";
import { DownloadSteps } from "@/components/DownloadSteps";
import AdBanner from "@/components/ads/AdBanner";


export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  const faqs = [
    {
      q: "Is downloading from Instagram legal?",
      a: "Downloading for personal use is usually fine, but copyright remains with the creator. Always get permission before sharing or republishing content."
    },
    {
      q: "Do I need to log in?",
      a: "No login or account is required. Just paste the public Instagram link."
    },
    {
      q: "What devices are supported?",
      a: "Our downloader works on mobile, tablet, and desktop. Compatible with all browsers."
    },
    {
      q: "What video/photo quality do I get?",
      a: "Photos are downloaded in original resolution (up to 1080px). Videos are MP4 in the best available quality."
    }
  ];

  {
    /* Blog preview */
  }
  <section className="mx-auto max-w-4xl px-4 py-16">
    <h2 className="mb-6 text-3xl font-bold">Latest Blog Posts</h2>
    <div className="space-y-6">
      {blogPosts.slice(0, 2).map((post) => (
        <div key={post.slug} className="rounded-lg border p-4 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-gray-600">{post.excerpt}</p>
          <p className="mt-2 text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center">
      <Link href="/blog"
        className="rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700"
      >
        View All Posts →
      </Link>
    </div>
  </section>;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
          Reels Downloader
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Download Instagram Videos, Reels — fast, secure, and free.
        </p>
        <div className="mx-auto max-w-xl">
          <InstagramVideoForm />
        </div>
      </section>
      {/* Download Steps */}
      <main>
        {/* ✅ Steps Section */}
        <DownloadSteps />
      </main>
      {/* How to use */}
      <div>
        <h1>Welcome to my site</h1>
        <AdBanner adSlot="9876543210" className="my-6" />
        {/* 👈 यहाँ ad दिखेगा */}
      </div>
      <section className="max-w-19xl mx-auto px-4 py-20 text-center">
        <h2 className="mb-12 text-3xl font-bold">How to download?</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="bg-white-500 rounded-lg p-6 shadow">
            <Link2 className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 font-semibold">1. Copy Link</h3>
            <p>Copy the Instagram post, Reel, or video URL.</p>
          </div>
          <div className="bg-white-500 rounded-lg p-6 shadow">
            <Download className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 font-semibold">2. Paste URL</h3>
            <p>Paste the link into the input box above.</p>
          </div>
          <div className="bg-white-500 rounded-lg p-6 shadow">
            <CheckCircle className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 font-semibold">3. Download</h3>
            <p>Click download and save the file to your device.</p>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Zap className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">Fast</h3>
            <p className="text-gray-600">
              Instant processing with no waiting time.
            </p>
          </div>
          <div>
            <Smartphone className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">All devices</h3>
            <p className="text-gray-600">
              Works on mobile, tablet, and desktop browsers.
            </p>
          </div>
          <div>
            <Film className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">HD Quality</h3>
            <p className="text-gray-600">
              Videos are saved in MP4 at the highest resolution.
            </p>
          </div>
          <div>
            <Shield className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">Secure</h3>
            <p className="text-gray-600">
              No login required, private & safe downloads.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-grey-500 overflow-hidden rounded-lg border"
            >
              <button
                className="flex w-full items-center justify-between bg-blue-500 px-4 py-3 text-left font-medium"
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
                    className="px-4 pb-4 text-red-700"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div>
          {/* ... Hero, How-to, Features ... */}
          <FaqPreview /> {/* 👈 shows 3 FAQs + link to full page */}
        </div>
      </section>
    </div>
  );
}
