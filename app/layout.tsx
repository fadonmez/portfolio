import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fatih Donmez - Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
