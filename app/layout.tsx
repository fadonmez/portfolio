import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  other: {
    viewport:
      'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1,  user-scalable=no',
  },
  title: 'Fatih Donmez - Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex flex-col min-h-screen'>
          <Header />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
