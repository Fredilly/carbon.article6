import { redirect } from 'next/navigation';

const SAMPLE_PDF_VIEW =
  'https://ik.imagekit.io/tzublgy5d/Article6/Sample%20Documents/VM0007_v1.8_SAMPLE.pdf';

export const metadata = {
  title: 'Sample Evidence Readiness Assessment | Article6 Carbon',
  description: 'View the full VM0007 v1.8 Article6 evidence readiness assessment sample.',
};

export default function SampleAssessmentPage() {
  redirect(SAMPLE_PDF_VIEW);
}
