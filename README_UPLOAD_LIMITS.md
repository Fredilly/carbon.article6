# Carbon upload compatibility

The public Carbon intake uses the package endpoints under `/api/carbon-intake/*`.

- Exactly one PDD is required and must be PDF.
- Supporting evidence may be PDF, DOCX, XLSX or PPTX.
- Maximum 10 files per package.
- Maximum 150 MB per file.
- Maximum 750 MB per package.
- The legacy `/api/upload/*` single-PDF proxy remains in place for compatibility.
- R2 and database credentials remain owned by the central Article6 service.
