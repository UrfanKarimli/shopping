"use client"

import { Modal, Rate } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/store/store';
import { toggleModal } from '@/store/modalSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DetailsModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
    const selectedProduct = useSelector((state: RootState) => state.modalProduct.selectedProduct);
    const [size, setSize] = useState({ width: 0, height: 0 });
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
    useEffect(() => {
        if (!isModalOpen[0]) {
            setShowFullDescription(false);
        }
    }, [isModalOpen]);


    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const isDescriptionLong = (selectedProduct?.description?.length ?? 0) > 60;
    const displayedDescription = showFullDescription ? selectedProduct?.description : selectedProduct?.description?.substring(0, 60);

    return (
        <>
            <Modal
                className=' [&>div>div]:p-0'
                open={isModalOpen[0]}
                onOk={() => dispatch(toggleModal({ idx: 0, target: false }))}
                onCancel={() => dispatch(toggleModal({ idx: 0, target: false }))}
                footer=""
                styles={{
                    header: {
                        marginBottom: '0px'
                    },
                    content: {
                        padding: '0px',
                    },
                    mask: {
                        backdropFilter: 'blur(10px)',
                    },
                }}
                width={{
                    xs: '95%',
                    sm: '80%',
                    md: '60%',
                    lg: '500px',
                    xl: '500px',
                    xxl: '500px',
                }}
            >
                <div className=' '>
                    <div className="relative w-full h-72  max-h-72 flex items-center justify-center overflow-hidden rounded-lg">
                        <Image
                            src={selectedProduct?.thumbnail || ''}
                            alt={selectedProduct?.title || 'basliq'}
                            className={` object-contain object-center  h-full max-h-72 w-auto relative z-10 bg-white scale-105  `}
                            width={200}
                            height={181}
                            onLoad={(event) => {
                                const img = event.target as HTMLImageElement;
                                setSize({ width: img.naturalWidth, height: img.naturalHeight });
                            }}
                            style={{
                                aspectRatio: `${size.width} / ${size.height}`,
                            }}
                            priority
                        />
                        <div
                            className="absolute inset-0  bg-center bg-repeat blur-[20px] "
                            style={{
                                backgroundImage: `url(${selectedProduct?.thumbnail})`,
                                aspectRatio: `${size.width} / ${size.height}`,
                                backgroundSize: '150%'
                            }}
                        >
                        </div>
                    </div>
                    <div className=' flex flex-col gap-1  p-1'>
                        <div className=' flex gap-1 items-center text-xl font-bold'>
                            <span className=' text-gray-500'>{selectedProduct?.brand}</span>
                            <span className=' '>{selectedProduct?.title}</span>

                        </div>
                        <span className=' whitespace-pre-wrap '> {displayedDescription}
                        {isDescriptionLong && (
                            <button onClick={toggleDescription} className="ml-2 text-[#949392] font-normal font-lato text-base hover:text-sky-500">
                                {showFullDescription ? "Less view" : "...More view"}
                            </button>
                        )}</span>
                        <span> <Rate style={{ fontSize: '16px' }} disabled defaultValue={selectedProduct?.rating} />{selectedProduct?.rating} </span>
                        <span className=' text-green-600 font-semibold '>{selectedProduct?.price} azn</span>

                        <span> Çəkisi: {selectedProduct?.weight} kq</span>
                        <span> Qarantiya{selectedProduct?.warrantyInformation} </span>
                        <span> Çatdırılma {selectedProduct?.shippingInformation} </span>
                        <span
                            className=' text-white inline p-1 self-start'
                            style={{ backgroundColor: getStockColor(selectedProduct?.availabilityStatus) }}
                        >{selectedProduct?.availabilityStatus} </span>
                    </div>
                </div>
            </Modal >
        </>
    )
}
