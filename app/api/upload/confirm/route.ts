import { NextResponse } from 'next/server';

const ORIGIN = process.env.ARTICLE6_SUBMISSION_API_ORIGIN || 'https://article6.org';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const upstream = await fetch(`${ORIGIN}/api/upload/confirm`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        submissionType: 'CARBON',
        sourceSite: 'carbon.article6.org',
        submissionSource: 'website',
      }),
      cache: 'no-store',
    });
    const payload = await upstream.json();
    return NextResponse.json(payload, { status: upstream.status });
  } catch (error) {
    console.error('[carbon confirm proxy]', error);
    return NextResponse.json({ error: 'Failed to confirm submission. Please contact us at contact@article6.org.' }, { status: 500 });
  }
}
