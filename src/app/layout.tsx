import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

import { Providers } from '@/providers/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Image AP Testing',
  description: 'WIP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <Script
          src='https://beamanalytics.b-cdn.net/beam.min.js'
          data-token='7b93b436-c2e2-4be3-b042-8e41b6afdaf6'
          async
        ></Script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
