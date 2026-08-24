# carbon.article6.org

Carbon-specific Article6 product site.

This repository intentionally mirrors the current public Article6 evidence-readiness experience while remaining independently deployable at `carbon.article6.org`.

Included:
- public Carbon homepage and Carbon-specific navigation
- sample assessment and full VM0007 v1.8 PDF download
- How It Works
- About and Contact
- local PDD submission form with the same public fields and direct-to-R2 upload flow
- thin `/api/upload/*` proxy routes to the trusted Article6 submission service

Excluded:
- internal sales CRM/admin UI
- sales-specific database code and migrations
- duplicated R2 or Neon credentials

The canonical internal sales system and trusted submission backend remain in `Fredilly/Article6`. Carbon owns the public Carbon experience; Article6 owns internal operations.
