import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Notehub',
  description: 'Приложение для создания и фильтрации заметок',
  openGraph: {
    title: 'Notehub',
    description: 'Приложение для создания и фильтрации заметок',
    url: 'https://notehub.com',
    images: [
      {
        url: 'https://notehub.com',
        width: 1200,
        height: 630,
        alt: 'Notehub Preview',
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="uk">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
