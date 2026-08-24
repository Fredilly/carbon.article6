import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import CarbonHeader from '../components/CarbonHeader';
import CarbonFooter from '../components/CarbonFooter';

const siteUrl = 'https://carbon.article6.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Article6 Carbon | Pre-Validation Evidence Readiness',
  description: 'Find evidence gaps before your validator does. Independent methodology-specific pre-validation evidence readiness review for carbon projects.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Article6 Carbon',
    title: 'Article6 Carbon | Pre-Validation Evidence Readiness',
    description: 'Find evidence gaps before your validator does. Independent methodology-specific pre-validation evidence readiness review for carbon projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article6 Carbon | Pre-Validation Evidence Readiness',
    description: 'Find evidence gaps before your validator does. Independent methodology-specific pre-validation evidence readiness review for carbon projects.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <CarbonHeader />
        <main>{children}</main>
        <CarbonFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
