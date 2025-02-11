"use client"


import { useEffect } from "react";

const  HoverScrollBar = ()=> {
    useEffect(() => {
        const body = document.body;

        const handleMouseMove = (event: MouseEvent) => {
            // Scrollbar genişliyini müəyyən et
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            // Maus scrollbar üzərindədirsə, body-ə 'hovered' class-ı əlavə et
            if (event.clientX >= window.innerWidth - scrollbarWidth) {
                body.classList.add("hovered");
            } else {
                body.classList.remove("hovered");
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
}

export default  HoverScrollBar