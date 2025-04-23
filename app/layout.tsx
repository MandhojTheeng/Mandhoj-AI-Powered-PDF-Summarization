import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/common/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mandhoj - PDF Summarization Tool',
  description: 'Summarize your PDF documents quickly and efficiently with Mandhoj.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
