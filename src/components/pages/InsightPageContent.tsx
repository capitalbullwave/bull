'use client';

import PageEffects from '@/components/PageEffects';
import { insightHtml } from '@/content/insight';

export default function InsightPageContent() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: insightHtml }} />
      <PageEffects page="insight" />
    </>
  );
}
