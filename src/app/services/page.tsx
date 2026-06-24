import type { Metadata } from 'next';
import ServicesPageContent from '@/components/pages/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Capital Bull Wave services including market research, trading education, risk management, premium signals, portfolio guidance and dedicated support.',
};

export default function ServicesPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/services.css" />
      <ServicesPageContent />
    </>
  );
}
