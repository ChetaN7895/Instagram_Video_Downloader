import FaqList from "@/components/FaqList";

export default function FAQPage() {
  return (
    // <div>
    //   <FaqList />
    // </div>

    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-6 text-center text-4xl font-bold  text-green-500">
        FAQ – Frequently Asked Questions
      </h1>
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p className="text-white-700 mx-auto mb-12 max-w-2xl text-center">
          Ok. Suppose you are here on this page now. In that case, you might be
          looking for clarifying questions about how to download Instagram
          photos and videos. So, look below and find the most commonly asked
          questions about one of the best Instagram Downloaders and their
          answers.
        </p>

        {/* FAQ items */}
        <div className="space-y-10">
          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              What is fastdl.app and why you might need it for?
            </h2>
            <p className="text-white-700 mb-2">
              Downloading and saving photos or/and videos from Instagram is now
              possible by using fastdl.app. It is the easiest and most
              convenient way to enjoy watching later those moments of happiness
              and memories.
            </p>
            <p className="text-white-700">
              <strong>fastdl.app advantages:</strong> Insert an Instagram link
              in the bar and get instant downloads. Supports multiple photos,
              high-quality videos, and requires no extra software.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              A Note to the right holders
            </h2>
            <p className="text-white-700">
              fastdl.app does not store any files or publish any links on its
              servers. All your files are stored on Instagram. If you believe
              your copyright has been violated, please contact Instagram
              directly at instagram.com.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              Where are the downloaded files stored?
            </h2>
            <p className="text-white-700">
              Normally you can see your downloads list by pressing{" "}
              <kbd>Ctrl + J</kbd>. It also depends on your operating system and
              browser settings. Some browsers open downloads in a new tab
              automatically.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              What is the quality of the content downloaded by FastDl?
            </h2>
            <p className="text-white-700">
              All video and photo content is kept in the same quality as
              uploaded by the original author. We do not compress or modify the
              media.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-blue-500">
              Is downloading private Instagram posts prohibited?
            </h2>
            <p className="text-white-700">
              Only public Instagram posts can be downloaded. Private posts are
              not supported. Even with public content, reusing or publishing it
              requires giving proper credit to the author, especially for
              commercial purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              What operating system can I use to download Instagram videos?
            </h2>
            <p className="text-white-700">
              All operating systems (iOS, Android, Linux, Windows, macOS) with a
              modern browser like Chrome, Safari, Opera, or Firefox can be used.
              For large files, ensure your device has enough memory.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-blue-500">
              Can I download multiple videos at a time with FastDl?
            </h2>
            <p className="text-white-700">
              Unfortunately no, you can only download one video at a time. We
              recommend keeping a list of links and downloading them one by one.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              What device can I use to download Instagram videos?
            </h2>
            <p className="text-white-700">
              Any device with a browser — PC, laptop, Mac, iPhone, Android
              phone, or tablet — can use FastDl. It is a cloud-based web tool,
              so no installation is required.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold  text-blue-500">
              What is the quality of the Instagram videos I save through this
              video downloader?
            </h2>
            <p className="text-white-700">
              All videos are downloaded in the same format and quality as they
              were uploaded (MP4, MOV, AVI, etc.). We always preserve the
              original quality.
            </p>
            <div>
              <FaqList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}