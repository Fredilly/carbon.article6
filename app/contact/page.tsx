import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Article6 Carbon',
  description: 'Contact Article6 about carbon project evidence-readiness assessments.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <section className="mb-16">
        <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-gray-600">We work with carbon project teams, consultants, investors, and partners worldwide.</p>
          <p><a href="mailto:contact@article6.org" className="font-semibold text-forest-700 hover:underline">contact@article6.org</a></p>
          <div><a href="https://wa.me/8618030828814" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center rounded-full bg-green-600 px-5 py-3 text-white hover:bg-green-700">Chat on WhatsApp</a></div>
        </div>
      </section>
      <section className="mb-16"><ContactForm /></section>
    </div>
  );
}
