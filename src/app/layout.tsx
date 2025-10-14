import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://emonnghi.vercel.app"),
  title: "Nghi Ho - Product Designer",
  description:
    "Product Designer creating digital brand experiences that drive business results through impactful design.",
  keywords: [
    "Product Designer",
    "UI/UX Designer",
    "Digital Design",
    "Brand Experience",
    "Nghi Ho",
  ],
  authors: [{ name: "Nghi Ho" }],
  creator: "Nghi Ho",
  openGraph: {
    title: "Nghi Ho - Product Designer",
    description:
      "Product Designer creating digital brand experiences that drive business results through impactful design.",
    url: "https://emonnghi.vercel.app",
    siteName: "Nghi Ho Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nghi Ho - Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nghi Ho - Product Designer",
    description:
      "Product Designer creating digital brand experiences that drive business results through impactful design.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body text-text-primary bg-bg-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-text-primary focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-primary"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
