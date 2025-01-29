import Image from 'next/image'
import React from 'react'
import Fill from '../../../../../public/fill.jpg'
import { Rate } from 'antd';
import ItemCard from '@/components/item-card';
export default function ShopPage() {
  return (
    <div className=' container mt-2  '>

      <div className="flex items-end h-[500px] rounded-t-[20px] w-full bg-[url('/fill.jpg')] bg-[#ccc] bg-no-repeat bg-center bg-cover z-0">
        <div
          className=" w-full  bg-white border-b "
        >
          <div className=' flex items-center gap-2 pl-5 h-min transform -translate-y-1/3 '>
            <div className='   ' >
              <Image
                src={Fill}
                alt=''
                width={160}
                height={160}
                className='z-40 w-40 h-40 rounded-[50%] object-center object-cover overflow-hidden bg-background-light p-1'
              />
            </div>
            <div className=' flex flex-col w-[30%] mt-2 '>
              <div className=' flex items-center gap-3'>
                <span className=' font-bold'>Zoo market</span>
                <button className=' border border-border-light bg-background-light text-headText-light rounded-md px-2 py-1'>izle</button>
              </div>
              <p className=' text-sm truncate'>Ev heyvanlarınız üçün hər şeyi bizim mağazada tapa bilərsiz! Sizi gözləyirik!</p>
            </div>
          </div>
          <div className=' flex gap-3'>
            <span> <Rate disabled count={1} defaultValue={1} />(4.5)</span>
            <span>baglidir</span>
            <input type="text" className=' border p-1' placeholder='magazada axtar' />
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-4 gap-2 my-44'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  )
}
