import type { Metadata } from 'next';
import './globals.css';
import { TrpcProvider } from '@/src/utils/trpc/trpc-provider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'TLGoober App',
  description: 'Demo application with Next.js/tRPC/Prisma/Posgtres/Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <TrpcProvider>
          <div>
            {children}
            <Toaster />
          </div>
        </TrpcProvider>
      </body>
    </html>
  );
}
