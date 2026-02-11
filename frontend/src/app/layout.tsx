import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'MarineForge - Premium Marine Digital Experiences',
    template: '%s | MarineForge',
  },
  description:
    "We create immersive digital experiences for the world's finest boat and yacht manufacturers. Web design, branding, and digital marketing for the marine industry.",
  metadataBase: new URL('https://marineforge.com'),
  openGraph: {
    title: 'MarineForge - Premium Marine Digital Experiences',
    description:
      'Award-winning digital experiences for marine manufacturers.',
    siteName: 'MarineForge',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarineForge - Premium Marine Digital Experiences',
    description:
      'Award-winning digital experiences for marine manufacturers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#030213',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
