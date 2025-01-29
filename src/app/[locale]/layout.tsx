import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Suspense } from 'react';
import Loading from './loading';
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Shopping commerce site',
  description: 'Online shopping and devilvery platform',
};
enum Locale {
  AZ = "az",
  EN = "en",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  // Locale yoxlaması
  const locale = (await params)?.locale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Mesajların alınması
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} >
        <AntdRegistry>
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="flex-grow">{children}</main>
            </Suspense>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
