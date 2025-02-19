"use client"

import { useGetProductByIdQuery } from "@/services/sifarishApi"
import { Carousel, Rate } from "antd";
import Image from "next/image";
import { useParams } from 'next/navigation';
import { useState } from "react";
import { FaComment } from "react-icons/fa6";
import { VscLoading } from "react-icons/vsc";
import '@/components/MyCarusel.css'
import ImageModal from "@/components/image-modal";
import { useDispatch } from "react-redux";
import { toggleImgModal } from "@/store/slicers/imgModalSlice";

export default function Details() {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params!.params![0]
    const { data, isLoading } = useGetProductByIdQuery(Number(id))
    const [showFullDescription, setShowFullDescription] = useState(false);
    const getStockColor = (stock: string | undefined) => {
        switch (stock) {
            case 'In Stock':
                return '#79fc84';
            case 'Low Stock':
                return '#ece577';
            default:
                return '#79fc84'
        }
    }



    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handleCardClick = () => {
        dispatch(toggleImgModal({ idx: 0, target: true }));
      };

    const isDescriptionLong = (data?.description?.length ?? 0) > 60;
    const displayedDescription = showFullDescription ? data?.description : data?.description?.substring(0, 60);
    const discountPrice = data?.price && data?.discountPercentage
        ? ((data?.price - (data.price * data.discountPercentage) / 100)).toFixed(2)
        : "0.00";

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
        <div className=' container mt-2'>

            <div className=' flex '>
                <div className='  w-[500px]'>
                    <div className=" border rounded-xl ">
                        <Carousel
                            arrows
                            dots={false}
                            slidesToShow={1}
                            slidesToScroll={1}
                            className="custom-carousel h-[500px] w-[500px] "
                        >
                            {data?.images?.map((item, idx) => (

                                <div onClick={handleCardClick} key={item + idx} className=" h-[500px]">
                                    <ImageModal src={item}/>
                                    <Image
                                        src={item || ''}
                                        alt={item || ''}
                                        className='object-center object-cover  h-full '
                                        width={500}
                                        height={181}
                                        priority
                                    />
                                </div>

                            ))}
                        </Carousel>

                    </div>
                    <div className=" mt-2">
                        <div className=" flex items-center justify-between ">
                            <span className=" flex gap-1 items-center text-xl"> <Rate style={{ fontSize: '24px' }} disabled defaultValue={data?.rating} />{data?.rating} </span>
                            <button className=" flex items-center text-base gap-1">Alıcı şərhləri <FaComment /></button>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        {data?.reviews?.map((item, idx) => (
                            <div key={item.reviewerEmail + idx}
                                className=" flex flex-col border  w-auto p-1 rounded-xl">
                                <div className=" flex  items-center gap-3"> <Rate style={{ fontSize: '16px' }} disabled defaultValue={item?.rating} />

                                    <span className=" font-semibold ">{item?.reviewerName}</span>
                                </div>
                                <p className="">{item?.comment}</p>
                                <span className=" text-xs text-customGray self-end ">{item?.date?.split("T")[0]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=' flex-1 pl-5'>
                    <div className=' flex flex-col gap-1  p-1'>
                        <div className=' flex gap-1 items-center text-xl font-bold'>
                            <span className=' text-gray-500'>{data?.brand}</span>
                            <span className=' '>{data?.title}</span>
                        </div>
                        <span className=' whitespace-pre-wrap '> {displayedDescription}
                            {isDescriptionLong && (
                                <button onClick={toggleDescription} className="ml-2 text-customGray font-normal font-lato text-base hover:text-sky-500">
                                    {showFullDescription ? "Less view" : "...More view"}
                                </button>
                            )}</span>
                        <span className=' text-green-600 font-semibold '>{discountPrice} AZN <sup><s className=" text-customGray">{data?.price} AZN</s></sup> </span>

                        <span className=" text-[#495057] bg-[#f1f3f5] p-1 self-start"> Çəkisi: {data?.weight} kq</span>
                        <span className=" text-[#004085] bg-[#cce5ff] p-1 self-start"> Qarantiya : {data?.warrantyInformation} </span>
                        <span className=" bg-[#d1ecf1]  self-start p-1 text-[#0c5460]">Təxmini Çatdırılma: {data?.shippingInformation} </span>
                        <span
                            className=' text-white inline p-1 self-start'
                            style={{ backgroundColor: getStockColor(data?.availabilityStatus) }}
                        >{data?.availabilityStatus} </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
