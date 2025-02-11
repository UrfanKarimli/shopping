"use client"
import React, { useState } from 'react';
import { Modal } from 'antd';
import { GoSearch } from "react-icons/go";


const SearchModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState([false, false]);

    const toggleModal = (idx: number, target: boolean) => {
        setIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };
    return (
        <>
            <div onClick={() => toggleModal(0, true)} className='p-2 flex items-center gap-2 cursor-pointer border bg-white  w-[200px] rounded-[20px]'>
                <GoSearch className=' h-6 w-6' /> Axtar
            </div>
            <Modal
                className=' [&>div>div]:p-0'
                title={(<div className=' flex items-center gap-2 p-4'>
                    <GoSearch className=' h-6 w-6' />
                    <input type="text" className=' w-11/12   outline-none   ' placeholder='Buraya yazın' />
                </div>)}
                open={isModalOpen[0]}
                onOk={() => toggleModal(0, false)}
                onCancel={() => toggleModal(0, false)}
                footer=""
                styles={{
                    header: {
                        borderBottom: '1px solid #333',
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
                    md: '70%',
                    lg: '60%',
                    xl: '50%',
                    xxl: '40%',
                }}
            >
                <div className='modalScroll h-[150px] overflow-y-scroll px-4'>

                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <div>skdcnkldnvl</div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
            </Modal>
        </>
    );
};

export default SearchModal;