"use client"

import BasketCard from '@/components/basket-card';
import ItemCard from '@/components/item-card';
import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { clearCart } from '@/store/selectItemSlice';
import { useDispatch } from 'react-redux';
import { clearLikedAds } from '@/store/liketItemSlice';

export default function Basket() {
    const dispatch = useDispatch();

    const selectedData = useSelector((state: RootState) => state.selectedItems.selectedData);
    const likedData = useSelector((state: RootState) => state.likedItems.likedData);
    const removeAllFromBasket = () => {
        dispatch(clearCart())
    }
    const removeAllFromFav = () => {
        dispatch(clearLikedAds())
    }
    return (
        <div className='container pt-5'>
            {
                selectedData.length > 0 ? (
                    <div className=' flex flex-col gap-2'>
                        <div className=' w-full flex justify-end items-center'> <button onClick={removeAllFromBasket} className=' text-headText-light py-1 px-2 border  border-border-light rounded-md hover:opacity-70 '> Səbətdəki bütün məhsulları sil</button></div>
                        {selectedData?.map((item) => (
                            item && item.id &&
                            (<BasketCard item={item} key={item.id} />)
                        ))}
                    </div>
                ) : (
                    <div className=' flex items-center justify-center h-screen'>
                        sebet bosdur
                    </div>
                )
            }
            <div>
                <div className=' w-full flex justify-between items-center'>
                    <h2 className='mt-10 text-2xl font-semibold text-headText-light border-b '>Favorit mehsullar</h2>
                    <button onClick={removeAllFromFav} className=' text-headText-light py-1 px-2 border  border-border-light rounded-md hover:opacity-70 '> Bütün favoritləri sil</button>
                </div>
                <div className='mt-4 grid grid-cols-3'>
                    {likedData?.map((item) => (
                        item && item.id &&
                        (<ItemCard item={item} key={item.id} />)
                    ))}
                </div>
            </div>


        </div>
    )
}
