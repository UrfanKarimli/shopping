import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <div>
          <h1>{t('title')}</h1>
          <Link href="/about" className=' underline'>{t('about')}</Link>
        </div>
      </main>
    </div>
  );
}
