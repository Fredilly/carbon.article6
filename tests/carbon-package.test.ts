import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

test('carbon package form exposes the 150 MB multi-document path', () => {
  const form = fs.readFileSync(new URL('../components/PddUploadForm.tsx', import.meta.url), 'utf8');
  assert.match(form, /150 \* 1024 \* 1024/);
  assert.match(form, /MAX_FILES = 10/);
  assert.match(form, /MAX_TOTAL_SIZE = 750 \* 1024 \* 1024/);
  assert.match(form, /multiple/);
  assert.match(form, /\.docx/);
  assert.match(form, /\.xlsx/);
  assert.match(form, /\.pptx/);
  assert.match(form, /\/api\/carbon-intake\/presign/);
  assert.match(form, /\/api\/carbon-intake\/confirm/);
});

test('legacy single-PDF proxies remain available during migration', () => {
  assert.ok(fs.existsSync(new URL('../app/api/upload/presign/route.ts', import.meta.url)));
  assert.ok(fs.existsSync(new URL('../app/api/upload/confirm/route.ts', import.meta.url)));
});
