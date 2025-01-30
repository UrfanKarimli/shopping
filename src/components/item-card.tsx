import Image from 'next/image'
import React from 'react'
import PisikYemeyi from '../../public/pisik yemeyi.jpg'
import { Rate } from 'antd'
import Link from 'next/link'

export default function ItemCard() {
    return (
        <div className=' relative w-full h-[290p]   rounded-[7px] p-2'>
            <Link href={`#`} target="_blank" rel="noopener noreferrer" className='relative font-arial w-full h-full rounded-[7px] align-top  flex flex-col bg-white overflow-hidden hover:shadow-shadow-hover shadow-custom-light'>
                <div className="img-box relative  h-[181px] ">
                    <Image
                        src={PisikYemeyi}
                        alt=''
                        className='object-center object-cover h-full w-full '
                    />
                    <span
                        // style={{ display: storedisplay }}
                        className='bg-blue-600 text-sm absolute left-[10px] bottom-[10px] text-white px-3 py-[2px] rounded-lg'> 20 AZN</span>
                </div>
                <div className='p-3 flex flex-col h-[125px]'>
                    <h3 className=' whitespace-pre-wrap  text-[12px] font-semibold leading-[16px] mb-1 mt-0 text-[rgb(123,123,123)] overflow-hidden line-clamp-2'>
                        <span className=' text-[#484848] mr-1'> Magaza adi</span>
                        aciqlama hissesi  jbnjvdbvjbdjvjdbvjkdbvjdbjvbdbvdvjbdjkbvjkdbvjkbsjdkvnfkbnfklbklfnj,fbvjfbvjf
                    </h3>
                    <span> <Rate disabled defaultValue={2} />(2)</span>
                </div>
            </Link>
            <button className='absolute bottom-[10px] right-1/2 translate-x-1/2 z-10 border border-border-light bg-background-light text-headText-light rounded-md px-2 py-1'>Sebete elave et</button>
        </div>
    )
}
