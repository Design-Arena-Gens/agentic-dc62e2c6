import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test Bench',
  description: 'Interactive playground to validate UI ideas quickly.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
