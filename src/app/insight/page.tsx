import type { Metadata } from 'next';
import InsightPageContent from '@/components/pages/InsightPageContent';

export const metadata: Metadata = {
  title: 'Market Insights',
  description:
    'Capital Bull Wave market insights, trading education, research notes and investor guidance for smarter financial decisions.',
};

export default function InsightPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/insight.css" />
      <InsightPageContent />
    </>
  );
}
