import { NextIntlClientProvider } from 'next-intl';
import {getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from './providers';


export const metadata: Metadata = {
  title: 'Shopping commerce site',
  description: 'Online shopping and delivery platform',
};

export default async function LocaleLayout({ children}: {children: React.ReactNode;}) {

  // Mesajların alınması
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="flex-grow">{children}</main>
            </Suspense>
          </AntdRegistry>
        </NextIntlClientProvider>
        </Providers>

      </body>
    </html>
  );
}
