import { useTranslations } from 'next-intl';
import LocaleSwitcher from './local-switcher';
import { IoStorefrontOutline } from "react-icons/io5";
import SearchModal from './search-modal';
import Profile from './profile';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className=''>
      <div className=' border-b border-b-border-light  py-4 bg-[#FFF9E5]'>
        <div className='flex items-center justify-between container w-full '>
          <nav className=' flex items-center gap-10'>
            <Link href='/' className=' font-bold text-3xl text-[#fe7600]'>SiFarish</Link>
            <Link href='/stores' className='flex items-center font-semibold text-xl text-[#fe7600]'><IoStorefrontOutline /> {t('stores')}</Link>

          </nav>
          <SearchModal />
          <div className=' flex items-center gap-4'>
            <LocaleSwitcher />
            <Profile />
          </div>

        </div>
      </div>

    </header>
  );
}