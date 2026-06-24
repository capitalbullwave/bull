'use client';

import PageEffects from '@/components/PageEffects';
import { servicesHtml } from '@/content/services';

export default function ServicesPageContent() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: servicesHtml }} />
      <PageEffects page="services" />
    </>
  );
}
