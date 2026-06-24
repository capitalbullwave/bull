'use client';

import PageEffects from '@/components/PageEffects';
import { aboutHtml } from '@/content/about';

export default function AboutPageContent() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
      <PageEffects page="about" />
    </>
  );
}
