import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-center px-4 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">404</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.035em] text-gray-950 md:text-5xl">This page is not part of the current Carbon site.</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">The public Carbon experience now lives primarily on one page. Return to the homepage or go straight to the PDD review form.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="preview-secondary-cta">Back to Carbon</Link>
          <Link href="/#upload-pdd" className="preview-primary-cta">Upload your PDD</Link>
        </div>
      </div>
    </section>
  );
}
