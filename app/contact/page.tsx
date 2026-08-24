import ContactForm from '../../components/ContactForm';

export const metadata = { title: 'Contact Article6 Carbon', description: 'Contact Article6 about carbon project evidence-readiness assessments.' };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <section className="mb-16">
        <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-gray-600">We work with carbon project teams, consultants, investors, and partners worldwide.</p>
          <p><a href="mailto:contact@article6.org" className="font-semibold text-forest-700 hover:underline">contact@article6.org</a></p>
        </div>
      </section>
      <section className="mb-16"><ContactForm /></section>
    </div>
  );
}
