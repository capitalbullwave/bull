'use client';

import PageEffects from '@/components/PageEffects';
import { homeHtml } from '@/content/home';

export default function HomePageContent() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
      <PageEffects page="home" />
    </>
  );
}
