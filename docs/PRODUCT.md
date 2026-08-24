# Article6 Carbon Product

## Product

`carbon.article6.org`

Article6 Carbon provides independent pre-validation evidence and methodology readiness review for carbon projects.

The service complements project developers, consultants, and validation/verification bodies rather than replacing them.

The product helps teams identify evidence and methodology issues before they become validation friction.

## Customer Outcome

The customer should understand:

> Before validation becomes expensive or slow, we independently check whether the project documentation and supporting evidence are ready for scrutiny.

Lead with project outcome rather than internal process.

## Existing Article6 Site

The existing Article6 public carbon site is a useful starting point.

Do not redesign or rewrite it from scratch merely because `carbon.article6.org` is being introduced.

When implementing the carbon site:

1. inspect the current `Fredilly/Article6` code directly
2. identify the strongest existing carbon sections and components
3. reuse or adapt those patterns
4. remove unrelated parent-company messaging
5. preserve functionality that already works

Do not rely on screenshots or summaries when source code is available.

## MVP Customer Journey

1. Visitor lands on `carbon.article6.org`.
2. Visitor understands the validation-readiness problem.
3. Visitor understands Article6's independent role.
4. Visitor understands what the review produces.
5. Visitor submits project information and documents.
6. Article6 receives the material securely.
7. Visitor receives confirmation.
8. Article6 can perform the review.

When this works reliably, identify it as a usable MVP before suggesting additional features.

## MVP Pages

Prefer one strong landing page plus submission flow.

Core content:

- validation-readiness problem
- independent review positioning
- what Article6 checks
- what the client receives
- who it is for
- how the review works
- sample/evidence of output where appropriate
- confidentiality
- submission CTA

Avoid turning the website into a carbon-market knowledge portal.

## Submission Form

Minimum useful fields:

- contact name
- work email
- organization
- project name
- registry/project ID when applicable
- methodology when known
- current project/validation stage
- relevant validation timeline when known
- project documents
- optional context/message

Keep fields optional where Article6 can determine the information from submitted documentation.

Do not force customers to understand Article6's internal terminology in order to submit.

## Submission Backend

Do not build a new carbon upload/storage backend.

Reuse the existing Article6 pattern:

`browser -> presigned Cloudflare R2 upload -> confirmation -> R2 verification -> Neon submission record -> notification`

Use the existing Article6 Neon database where safe.

Label carbon submissions with:

- `submission_type = CARBON`
- `source_site = carbon.article6.org`
- CRM experiment = `ARTICLE6_CARBON`

Where a genuine prospect submits a project document, update/create the relevant CRM state so that document receipt corresponds to `OPPORTUNITY`.

Link submissions where practical to:

- sales organization
- contact
- carbon project
- project documents

Keep CRM business rules centralized. Avoid duplicating complex CRM SQL in the carbon application.

## Documents

Project documents may contain sensitive commercial and technical information.

Uploaded files must remain private.

Before adding new storage code, inspect the existing Article6 R2 implementation and reuse it where appropriate.

## Validation Stage

The customer's current validation stage materially affects value and urgency.

Capture it simply.

Do not build an elaborate project-stage workflow in the public application.

## Confirmation

Differentiate between:

- material received
- Article6 accepting the engagement

A successful upload should acknowledge receipt rather than automatically promise delivery until commercial/operational acceptance has occurred.

## Existing Internal System

The existing Article6 internal sales system remains the operational source for carbon prospects and project relationships.

Do not recreate CRM functionality inside the public carbon site.

## Not MVP

Do not initially build:

- customer accounts
- customer dashboards
- carbon registry synchronization
- automated methodology engines
- VVB portals
- live validation status tracking
- project-management software
- investor marketplaces
- consultant workspaces
- generalized carbon databases

Add these only if actual customer behavior demonstrates that they are required.

The initial product is a professional service with a focused software intake experience.
