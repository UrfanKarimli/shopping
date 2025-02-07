"use client"

import { Carousel } from "antd";
import '../MyCarusel.css'
import ItemCard from "../item-card";
import { useGetProductsQuery } from '@/services/sifarishApi';

const SecondCarusel = () => {

    const { data } = useGetProductsQuery()
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
