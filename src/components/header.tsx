import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='p-4 bg-gradient-to-r from-[#FF7F50] to-[#FF4500] '>
      <nav className='flex items-center justify-between  w-full'>
        <Link href='/'>{t('home')}</Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}