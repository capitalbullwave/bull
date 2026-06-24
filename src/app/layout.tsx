import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Capital Bull Wave',
    template: '%s | Capital Bull Wave',
  },
  description:
    'Capital Bull Wave offers stock market insights, trading guidance, portfolio strategies and investor-focused support.',
  keywords: ['stock market', 'trading', 'investing', 'NIFTY', 'SENSEX', 'Capital Bull Wave'],
  authors: [{ name: 'Capital Bull Wave' }],
  openGraph: {
    title: 'Capital Bull Wave',
    description: 'Smart stock market guidance, trading insights and portfolio-focused support.',
    images: ['/image/logo.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/image/logo.jpg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
