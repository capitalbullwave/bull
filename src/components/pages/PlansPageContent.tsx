'use client';

import PageEffects from '@/components/PageEffects';
import { plansHtml } from '@/content/plans';

export default function PlansPageContent() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: plansHtml }} />
      <PageEffects page="plans" />
    </>
  );
}
