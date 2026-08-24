import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Sample Evidence Readiness Assessment | Article6 Carbon',
  description: 'View the full VM0007 v1.8 Article6 evidence readiness assessment sample.',
};

export default function SampleAssessmentPage() {
  redirect('/sample-report.pdf');
}
