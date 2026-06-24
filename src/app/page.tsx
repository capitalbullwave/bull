import type { Metadata } from 'next';
import HomePageContent from '@/components/pages/HomePageContent';

export const metadata: Metadata = {
  title: 'Capital Bull Wave',
  description:
    'Capital Bull Wave offers stock market insights, trading guidance, portfolio strategies and investor-focused support.',
};

export default function HomePage() {
  return (
    <>
      <link rel="stylesheet" href="/css/index.css" />
      <HomePageContent />
    </>
  );
}
