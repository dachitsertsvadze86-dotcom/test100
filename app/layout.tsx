import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Car Customizer - Toyota Supra A90',
  description: 'Customize your Toyota Supra with premium parts and real-time visualization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
      </head>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}