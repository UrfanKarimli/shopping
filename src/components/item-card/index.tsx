"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { PiHeartStraightDuotone, PiHeartStraightFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikedAd } from '@/store/liketItemSlice';
import { RootState } from '@/store/store'
import { addToCart } from '@/store/selectItemSlice'
import { message, Tooltip, Rate } from 'antd';
import { ProductType } from '@/types';
import { toggleModal } from '@/store/modalSlice';
import { setSelectedProduct } from '@/store/modalProductSlice';


export default function ItemCard({ item }: { item: ProductType }) {
    const dispatch = useDispatch();
    const likedAds = useSelector((state: RootState) => state.likedItems.likedData);
    const [isLiked, setIsLiked] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();


    useEffect(() => {
        if (item && item.id) {
            setIsLiked(likedAds.some((i) => i.id === item.id));
        }
    }, [likedAds, item]);

    const handleLikeToggle = () => {
        dispatch(toggleLikedAd(item));
    };
    const info = () => {
        messageApi.open({
            type: 'success',
            content: 'Məhsul səbətə əlavə olundur',
        });
    };

    const addTheBox = () => {
        dispatch(addToCart(item));
        info()
    }


    const handleCardClick = () => {
      dispatch(setSelectedProduct(item));
      dispatch(toggleModal({ idx: 0, target: true }));
    };

    return (
        <div className=' relative w-full h-[290p]   rounded-[7px] p-2'>{contextHolder}
            <div onClick={handleCardClick}  className='relative cursor-pointer font-arial w-full h-full rounded-[7px] align-top  flex flex-col bg-white overflow-hidden hover:shadow-shadow-hover shadow-custom-light'>
                <div className="img-box relative w-full  h-[181px]  overflow-hidden flex items-center justify-center">
                    <Image
                        src={item?.thumbnail}
                        alt={item?.title}
                        className='object-center object-cover h-full w-[200px] '
                        width={200}
                        height={181}
                        priority
                    />
                    <span
                        // style={{ display: storedisplay }}
                        className='bg-blue-600 text-sm absolute left-[10px] bottom-[10px] text-white px-3 py-[2px] rounded-lg'> {item.price} AZN</span>
                </div>
                <div className='p-3 flex flex-col h-[125px]'>
                    <h3 className=' whitespace-pre-wrap  text-[12px] font-semibold leading-[16px] mb-1 mt-0 text-[rgb(123,123,123)] overflow-hidden line-clamp-2'>
                        <span className=' text-[#484848] mr-1'> Magaza adi</span>
                        {item.description}
                    </h3>
                    <span> <Rate disabled defaultValue={item.rating} />({item.rating})</span>
                </div>
            </div>
            <button
                onClick={handleLikeToggle}
                className='bg-transparent absolute top-[10px] right-[10px] z-10'
            >
                <Tooltip title={isLiked ? "Favoritlərdən sil" : "Favoritlərə əlavə et"} color='#ff4f08' arrow={false}>
                    <span>
                        {isLiked ? (
                            <PiHeartStraightFill className='h-7 w-7 text-[#ff4f08]' />
                        ) : (
                            <PiHeartStraightDuotone className='h-7 w-7 text-[#c7c7c7] hover:text-[#ff4f08]' />
                        )}
                    </span>
                </Tooltip>
            </button>
            <button
                onClick={addTheBox}
                className='absolute truncate bottom-[10px] right-1/2 translate-x-1/2 z-10 border border-border-light bg-background-light text-headText-light rounded-md px-2 py-1'>Səbətə əlavə et</button>
        </div>
    )
}
