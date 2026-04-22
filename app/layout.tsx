import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Duc Vinh Vu | Portfolio',
  description:
    'Portfolio of Duc Vinh Vu - ICT Graduate, aspiring software developer open to internship and entry-level opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}