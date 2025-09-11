// data/blogPosts.ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string; // ✅ new field
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-download-instagram-videos-iphone-android",
    title: "How to Download Instagram Videos on iPhone and Android",
    excerpt:
      "Step-by-step guide for saving Instagram videos on mobile devices.",
    date: "2025-09-01",
    category: "Guides",
    content: `
      ## Downloading Instagram Videos on iPhone
      Use Safari browser, paste the link into our tool, and press Download.
      
      ## Downloading Instagram Videos on Android
      Use Chrome browser, copy the Instagram link, paste it, and press Download.
      
      ✅ Works without installing extra apps.
    `,
  },
  {
    slug: "instagram-reels-vs-tiktok",
    title: "Instagram Reels vs TikTok: What's the Difference?",
    excerpt: "A quick comparison of Instagram Reels and TikTok.",
    date: "2025-09-05",
    category: "Instagram Updates",
    content: `
      Both Reels and TikTok focus on short-form video, but there are key differences:
      
      - Reels integrate with Instagram's ecosystem.
      - TikTok offers advanced editing and viral trends.
      
      For creators, using both can expand your reach.
    `,
  },
];
