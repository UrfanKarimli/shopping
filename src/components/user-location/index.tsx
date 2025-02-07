"use client";

import { useGetLocationQuery } from "@/services/locationApi"; 
import { VscLoading } from "react-icons/vsc";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useState } from "react";



export default function LocationComponent() {
    const [localeLang, setLocaleLang] = useState('az');
    useEffect(() => {
        const userLocale = navigator.language.split('-')[0]; // Tarayıcı dilini al
        setLocaleLang(userLocale);
    }, []);

    const { data, error, isLoading } = useGetLocationQuery(localeLang);
    if (isLoading) return <p><VscLoading className=" text-headText-light animate-spin  h-5 w-5 " /></p>;
    if (error) return <span className=" text-sm  font-bold text-red-700">Xəta!</span>;

    return (
        <div>
            <h3 className=" flex items-center gap-1 text-headText-light font-semibold"><IoLocationSharp className=" text-headText-light   h-5 w-5  " /> {data?.city}</h3>
        </div>
    );
}

