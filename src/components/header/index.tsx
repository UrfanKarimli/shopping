"use client";

import { useTranslations } from 'next-intl';
import { IoStorefrontOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import SearchModal from '../search-modal';
import Profile from '../profile';
import CustomLink from '../custom-link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect, useState } from "react";
import LocationComponent from '../user-location';

export default function Header() {
  const selectedData = useSelector((state: RootState) => state.selectedItems.selectedData);
  const t = useTranslations('header');

  const [cartCount, setCartCount] = useState<number | null>(null);

  useEffect(() => {
    setCartCount(selectedData.length);
  }, [selectedData]);

  return (
    <header className=''>
      <div className='border-b border-b-border-light py-4 bg-[#FFF9E5]'>
        <div className='flex items-center justify-between container w-full'>
          <div className='flex items-center gap-10'>
            <CustomLink href='/' className='font-bold text-3xl text-headText-light'>SiFarish</CustomLink>
            <CustomLink href='/stores' className='flex items-center gap-1 font-semibold text-xl text-headText-light'>
              {t('stores')} <IoStorefrontOutline />
            </CustomLink>
            <CustomLink href="/basket" className='flex items-center gap-1 font-semibold text-xl text-headText-light' prefetch={true}>
              {t('basket')}
              <RiShoppingCart2Line className='h-6 w-6' />
              {cartCount !== null && (
                <sup className='text-headText-light text-[12px] font-bold'>{cartCount}</sup>
              )}
            </CustomLink>
            <LocationComponent />
          </div>
          <SearchModal />
          <div className='flex items-center gap-4'>
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
}
