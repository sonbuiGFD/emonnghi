import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const NY_Font = localFont({
  src: '../../public/fonts/MRCH_NewYork.ttf',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emonnghi.vercel.app'),
  title: 'Nghi Ho - Product Designer',
  description: 'Product Designer creating digital brand experiences that drive business results through impactful design.',
  keywords: ['Product Designer', 'UI/UX Designer', 'Digital Design', 'Brand Experience', 'Nghi Ho'],
  authors: [{ name: 'Nghi Ho' }],
  creator: 'Nghi Ho',
  openGraph: {
    title: 'Nghi Ho - Product Designer',
    description: 'Product Designer creating digital brand experiences that drive business results through impactful design.',
    url: 'https://emonnghi.vercel.app',
    siteName: 'Nghi Ho Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nghi Ho - Product Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nghi Ho - Product Designer',
    description: 'Product Designer creating digital brand experiences that drive business results through impactful design.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#333333',
      },
    ],
  },
  manifest: '/icons/site.webmanifest',
  other: {
    'msapplication-TileColor': '#333333',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${beVietnamPro.className} font-body bg-white text-text-primary transition-colors duration-300`}
        style={
          {
            '--font-mrch-newyork': `${NY_Font.style.fontFamily}, serif`,
            '--font-be-vietnam-pro': `${beVietnamPro.style.fontFamily}, sans-serif`,
          } as React.CSSProperties
        }>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-text-primary focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-primary">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
