'use client';

import PageEffects from '@/components/PageEffects';
import { contactHtml } from '@/content/contact';

export default function ContactPageContent() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: contactHtml }} />
      <PageEffects page="contact" />
    </>
  );
}
