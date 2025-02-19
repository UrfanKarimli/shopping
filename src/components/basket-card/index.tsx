import { addToCart, decreaseQuantity, removeFromCart } from '@/store/slicers/selectItemSlice';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa6";
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleLikedAd } from '@/store/slicers/liketItemSlice';
import { ProductType } from '@/types';


export default function BasketCard({ item }: { item: ProductType }) {
    const likedData = useSelector((state: RootState) => state.likedItems.likedData);
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        if (item && item.id) {
            setIsLiked(likedData.some((i) => i.id === item.id));
        }
    }, [likedData, item]);

    const plusQuantity = () => {
        dispatch(addToCart(item));
    }
    const minusQuantity = () => {
        dispatch(decreaseQuantity(Number(item.id)));
    }

    const removeFromBasket = () => {
        dispatch(removeFromCart(Number(item.id)))
    }
    const removeAndAddFav = () => {
        dispatch(toggleLikedAd(item));
        dispatch(removeFromCart(Number(item.id)))
    }

    const returnPrice = () => {
        let price = 0
        if (item.quantity !== undefined) {
            price = item.quantity * item.price
        }
        return price
    }
    const content = (
        <div className=' select-none'>

            <p className='mb-1'>silmək istədiyinə əminsən ?</p>
            {isLiked ?
                (<span className=' text-headText-light'>Favorit mehsulun</span>)
                : (<a onClick={removeAndAddFav} className='flex gap-1 items-center '><FaHeart /> sil və favoritlərə əlavə et</a>)
            }
            <a onClick={removeFromBasket} className='flex gap-1 items-center mt-[2px]'><RiDeleteBinLine /> sil</a>
        </div>
    );
    return (
        <div className='w-full flex  flex-col  border border-border-light rounded-md overflow-hidden '>
            <div className=' w-full border-b border-b-border-light p-1'>
                <span className=' flex items-center gap-1'>satici: <Link className=' font-bold' href={'#'}>Satici adi</Link></span>

            </div>
            <div className='p-1 flex items-center  gap-2'>
                <div className=' flex flex-col'>
                    <div className='h-[150px] w-[100px] flex items-center justify-center' >
                        <Image
                            src={item?.thumbnail}
                            alt={item?.title}
                            width={100}
                            height={150}
                            className='   object-fill object-center p-1'
                        />
                    </div>
                </div>
                <div className=' flex justify-between w-full'>
                    <div className=' flex flex-col  overflow-x-hidden' >
                        <span className=' font-semibold'>{item.title.length > 110 ? item.title.slice(0, 100) + "..." : item.title}</span>
                        <span className=''>{item.description.length > 110 ? item.description.slice(0, 100) + "..." : item.description}</span>
                        <div className=' font-semibold text-green-600 mt-2'>
                            {returnPrice()} AZN
                        </div>
                    </div>
                    <div className=' flex gap-10'>
                        <div className=' flex flex-col border'>
                            <button
                                onClick={plusQuantity} ><FaPlus className={`m-1 text-buttonText-light`} /></button>
                            <span className=' border-y  flex items-center justify-center '>{item?.quantity}</span>
                            <button
                                disabled={item?.quantity == 1}
                                onClick={minusQuantity}
                            >
                                <FaMinus className={`m-1  ${item?.quantity == 1 ? ' text-gray-400 cursor-no-drop' : 'text-buttonText-light'}`} /></button>
                        </div>
                        <div className='mr-2'>
                            <Popover
                                content={content}
                                trigger="click">
                                <button>
                                    <RiDeleteBinLine className=' h-5 w-5 text-buttonText-light' />
                                </button>
                            </Popover>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
