import Link from "next/link";

const previewFaqs = [
  { q: "Is downloading from Instagram legal?", a: "Downloading for personal use is fine, but copyright belongs to the creator." },
  { q: "Do I need to log in?", a: "No, just paste a public Instagram link." },
  { q: "What devices are supported?", a: "Works on mobile, tablet, and desktop." },
];

export default function FaqPreview() {
return (
  <div className="mt-6 flex justify-center">
    <Link
      href="/faq"
      className="rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700"
    >
      See all FAQs →
    </Link>
  </div>
);
}
