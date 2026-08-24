const SAMPLE_PDF_SOURCE =
  'https://ik.imagekit.io/tzublgy5d/Article6/Sample%20Documents/VM0007_v1.8_SAMPLE.pdf';

export async function GET() {
  const upstream = await fetch(SAMPLE_PDF_SOURCE, {
    next: { revalidate: 86400 },
  });

  if (!upstream.ok || !upstream.body) {
    return new Response('Sample report unavailable', { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Article6-VM0007-v1.8-Sample.pdf"',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
