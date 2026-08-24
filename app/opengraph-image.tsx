import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Article6 Carbon pre-validation evidence readiness';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F8FAF8',
          color: '#111827',
          padding: '72px 80px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: '#245C2A',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            A6
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>Article6 Carbon</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 940 }}>
          <div style={{ color: '#2F6F36', fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>
            Pre-validation evidence readiness
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.08, fontWeight: 700, letterSpacing: -2 }}>
            Find the evidence gaps before your validator does.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.4, color: '#4B5563' }}>
            Methodology-specific review that makes project evidence traceable before validation starts.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
