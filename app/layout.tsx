import type { Metadata } from 'next';
import './globals.css';
import CarbonHeader from '../components/CarbonHeader';
import CarbonFooter from '../components/CarbonFooter';

export const metadata: Metadata = {
  title: 'Article6 Carbon | Pre-Validation Evidence Readiness',
  description: 'Find evidence gaps before your validator does. Independent methodology-specific pre-validation evidence readiness review for carbon projects.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <CarbonHeader />
        <main>{children}</main>
        <CarbonFooter />
      </body>
    </html>
  );
}
