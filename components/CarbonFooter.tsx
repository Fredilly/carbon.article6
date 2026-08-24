import Link from 'next/link';

export default function CarbonFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-gray-900">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-forest-800 text-xs font-bold tracking-wider text-white">A6</span>
          <span>Article6 Carbon</span>
        </Link>
        <p className="mt-2 text-sm text-gray-500">Evidence readiness assessments for carbon projects.</p>
        <p className="mt-1 max-w-md text-xs leading-relaxed text-gray-400">
          Independent pre-validation review. Not affiliated with Verra or any validation and verification body.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
          <Link href="/sample-assessment" className="hover:text-forest-700">Sample Report</Link>
          <Link href="/how-it-works" className="hover:text-forest-700">How It Works</Link>
          <Link href="/about" className="hover:text-forest-700">About</Link>
          <Link href="/contact" className="hover:text-forest-700">Contact</Link>
        </div>
        <div className="mt-6 border-t border-gray-100 pt-5 text-xs text-gray-400">© {new Date().getFullYear()} Article6. All rights reserved.</div>
      </div>
    </footer>
  );
}
