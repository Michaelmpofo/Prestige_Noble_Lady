import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Prestige Noble Lady Luxury | Where Luxury Meets Comfort',
  description:
    'Premium bedsheets, duvet sets, curtains, water mattress covers, sofa covers and funnel blankets crafted for luxury living. Trusted by hotels, guest houses, and homeowners across Ghana.',
  keywords: 'luxury bedsheets, premium duvet sets, curtains, water mattress covers, sofa covers, funnel blankets, hotel linen, Ghana',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="font-inter bg-white text-charcoal antialiased" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
