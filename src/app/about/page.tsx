import type { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/about.css" />
      <AboutPageContent />
    </>
  );
}
