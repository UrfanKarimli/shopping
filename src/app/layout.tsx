import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { cookies } from 'next/headers'; // ✅ Next.js cookies API
import './globals.css';
import Header from '@/components/header';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Suspense } from 'react';
import Loading from './loading';
interface Locale {
  locale?: string | undefined
}
export const metadata: Metadata = {
  title: 'Shopping commerce site',
  description: 'Online shopping and delivery platform',
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Next.js-in `cookies()` API-si ilə dili götürürük
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'az'; // Cookie varsa, götür; yoxdursa, default 'az'

  // Mesajların alınması
  const messages = await getMessages(locale as Locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
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
