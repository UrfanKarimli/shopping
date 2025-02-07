"use client"

import ItemCard from '@/components/item-card';
import { useGetProductsQuery } from '@/services/sifarishApi';

export default function AllDatas() {

    const { data } = useGetProductsQuery()
    return (
        <div
            className=' grid grid-cols-4'
        >
            {data?.map((item) => (
                item && item.id &&
                (<ItemCard item={item} key={item.id} />)
            ))}

        </div>
    )
}
