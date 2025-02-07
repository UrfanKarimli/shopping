"use client";

import { useState, useEffect } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    prefetch?: boolean;
}

const CustomLink = ({ href, className = "", children, prefetch = true, ...props }: CustomLinkProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    // href dəyərinin string olduğunu yoxlayırıq (çünki href bəzən object ola bilər)
    const hrefString = typeof href === "string" ? href : "";

    useEffect(() => {
        setIsLoading(false);
    }, [pathname]);

    return (
        <Link
            href={href}
            prefetch={prefetch}
            className={className}
            style={{ opacity: isLoading ? 0.5 : 1, cursor: isLoading ? "wait": 'pointer' }}
            onClick={() => {
                // Əgər artıq həmin səhifədəyiksə, loading göstərmə
                if (pathname !== hrefString) {
                    setIsLoading(true);
                }
            }}
            {...props}
        >
                        {children}
        </Link>
    );
};

export default CustomLink;
