import { PlatformDownloader } from "@/components/platform-downloader"
import { Instagram } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Instagram Video Downloader: Save Reels, Stories & IGTV in HD - Free & No Watermark",
  description:
    "Free Instagram Video Downloader: Easily download Instagram videos, Reels, Stories, and IGTV in HD MP4. No watermark, no login, fast, and secure. Works on all devices (iOS & Android).",
  keywords:
    "Instagram video downloader, download Instagram videos, Instagram Reels download, Instagram Story saver, IGTV downloader, free Insta downloader, HD Instagram videos, no watermark Instagram, save IG videos",
  openGraph: {
    title: "Instagram Video Downloader: Save Reels, Stories & IGTV in HD - Free & No Watermark",
    description:
      "Download Instagram videos, Reels, Stories, and IGTV online for free. Get high-quality MP4s without watermarks or login. Fast and reliable Insta saver.",
    type: "website",
    url: "https://freevideodownloader.co/instagram", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/insta-downloader-og-image.jpg", // Create a relevant image for Instagram
        width: 1200,
        height: 630,
        alt: "Instagram Video Downloader - Save IG Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Instagram Videos FREE: Reels, Stories, IGTV in HD",
    description: "Save Instagram Reels, Stories, and IGTV videos in HD quality, without watermarks. Free & fast Insta video downloader.",
    images: [
      "https://freevideodownloader.co/images/insta-downloader-twitter-card.jpg", // Create a relevant image for Instagram
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/instagram", // Ensure this is your actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function InstagramPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Download Instagram Videos, Reels, Stories & IGTV in HD</h1>
          <p className="text-muted-foreground">
            Use our <strong>free Instagram downloader</strong> to save videos, Reels, Stories, and IGTV clips in HD
            quality – no watermark or login needed.
          </p>
        </div>

        <PlatformDownloader
          platform="instagram"
          endpoint="/api/instagram"
          placeholder="https://www.instagram.com/p/..."
        />

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Features of Our Instagram Downloader</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>HD Quality for videos and photos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Supports Reels, Stories, IGTV, and more</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Works on iOS, Android, and desktop</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>No watermark, no ads in media</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Secure and private – no data collected</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Fast processing and downloads</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Steps to Download */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Steps to Download Instagram Content</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">1</Badge>
                    <span>Copy the public Instagram post link</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">2</Badge>
                    <span>Paste it in the box above</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">3</Badge>
                    <span>Click "Download" and save the file</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Supported Content Types */}
          <section>
            <h2 className="text-2xl font-bold mb-6">What Can You Download?</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>📱 Instagram Reels (short videos)</li>
                    <li>📖 Stories (24-hour content)</li>
                    <li>📺 IGTV (long-form videos)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>📷 Photo posts and carousels</li>
                    <li>🎬 Video posts and clips</li>
                    <li>✨ Highlights and saved stories</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is this Instagram downloader free to use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, it's completely free with no hidden costs.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need to log in?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>No account or login is required.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I download content on mobile?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, it's mobile-friendly for both Android and iOS.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are downloads safe and private?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Absolutely. We don't store any personal data or track your downloads.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Trusted by Thousands</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                10,000+ Active Users
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                No Personal Data Stored
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                Fast & Reliable
              </Badge>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
