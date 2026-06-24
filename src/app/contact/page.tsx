import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Capital Bull Wave for stock market guidance, investment planning, trading support, and financial learning assistance.',
};

export default function ContactPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/contact.css" />
      <ContactPageContent />
    </>
  );
}
