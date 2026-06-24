import type { Metadata } from 'next';
import PlansPageContent from '@/components/pages/PlansPageContent';

export const metadata: Metadata = {
  title: 'Plans & Pricing',
  description:
    'Choose Capital Bull Wave plans for market learning, trading guidance, investor support, research insights and disciplined stock market education.',
};

export default function PlansPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link rel="stylesheet" href="/css/plans.css" />
      <PlansPageContent />
    </>
  );
}
