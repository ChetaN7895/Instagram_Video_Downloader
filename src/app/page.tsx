import { InstagramVideoForm } from "@/features/instagram/components/form";
import Script from "next/script";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>

      {/* Load AdSense Script Correctly */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6262293062544734"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  );
}
