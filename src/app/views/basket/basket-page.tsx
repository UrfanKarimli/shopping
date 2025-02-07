"use client"

import ItemCard from '@/components/item-card';
import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Basket() {
    const selectedData = useSelector((state: RootState) => state.selectedItems.selectedData);

    console.log("first", selectedData)
    return (
        <div className='container'>
            {
                selectedData.length > 0 ? (
                    <div className=' grid grid-cols-4'>
                        {selectedData?.map((item) => (
                            item && item.id &&
                            (<ItemCard item={item} key={item.id} />)
                        ))}
                    </div>
                ) : (
                    <div className=' flex items-center justify-center h-screen'>
                        sebet bosdur
                    </div>
                )
            }

        </div>
    )
}
