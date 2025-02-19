"use client"

import { toggleImgModal } from '@/store/slicers/imgModalSlice';
import { RootState } from '@/store/store';
import { Modal } from 'antd'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function ImageModal({src}: {src:string}) {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.imgModal.isOpen);



    return (
        <div>
            <Modal
                className=' [&>div>div]:p-0'
                open={isModalOpen[0]}
                onOk={() => dispatch(toggleImgModal({ idx: 0, target: false }))}
                onCancel={() => dispatch(toggleImgModal({ idx: 0, target: false }))}
                footer=""
                styles={{
                    header: {
                        marginBottom: '0px'
                    },
                    content: {
                        padding: '0px',
                    },
                    mask: {
                        backdropFilter: 'blur(2px)',
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
                <Image
                    src={src || ''}
                    alt={src || ''}
                    className='object-center object-cover  h-full w-full'
                    width={500}
                    height={500}
                    priority
                />
            </Modal>
        </div>
    )
}
