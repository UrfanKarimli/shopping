"use client"

import { Carousel } from "antd";
import '../MyCarusel.css'
import ItemCard from "../item-card";
import { useGetProductsQuery } from '@/services/sifarishApi';
import { VscLoading } from "react-icons/vsc";

const SecondCarusel = () => {

    const { data, isLoading } = useGetProductsQuery()
    if (isLoading) return <p className=" w-full h-52 flex items-center justify-center "><VscLoading className=" w text-headText-light animate-spin  h-7 w-7 " /></p>;

    return (
        <div className="max-w-full overflow-hidden">
            <Carousel
                arrows
                // autoplay
                dots={false}
                slidesToShow={3}
                slidesToScroll={3}
                className="custom-carousel flex gap-2 "
            >
                {data?.map((item) => (
                    item && item.id &&
                    (<ItemCard item={item} key={item.id} />)
                ))}
            </Carousel>
        </div>
    )
};



export default SecondCarusel;
