"use client";

import ItemCard from "@/components/item-card";
import { useGetProductsQuery } from "@/services/sifarishApi";
import { VscLoading } from "react-icons/vsc";

export default function AllDatas() {
    const { data, isLoading } = useGetProductsQuery();

    if (isLoading)
        return (
            <div className="w-full h-[30vh] flex items-center justify-center">
                <div className="relative">
                    <VscLoading className="text-headText-light animate-spin h-16 w-16" />
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                        Yüklənir...
                    </span>
                </div>
            </div>
        );

    return (
        <div className="grid grid-cols-4">
            {data?.products.map(
                (item) => item?.id && <ItemCard item={item} key={item.id} />
            )}
        </div>
    );
}
