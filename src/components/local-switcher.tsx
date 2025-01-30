'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();

    // Cookie-dən dili oxu
    const [localeActive, setLocaleActive] = useState(() => {
        return Cookies.get('locale') || 'az'; // Default olaraq 'az' təyin et
    });

    console.log("localeActive (before useEffect):", localeActive);

    // Cookie-də olan dili state-ə tətbiq et (bunu yalnız component mount olunduqda edirik)
    useEffect(() => {
        const storedLocale = Cookies.get('locale');
        if (storedLocale) {
            setLocaleActive(storedLocale); // State-i yenilə
        }
    }, []); // Bu effect yalnız bir dəfə işləyəcək, component mount olunduğunda

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        Cookies.set('locale', nextLocale); // Yeni dili cookie-yə yaz

        startTransition(() => {
            // Yeni dili URL-də tətbiq etmək üçün
            const newPathname = pathname.replace(`/${localeActive}`, `/${nextLocale}`);
            router.replace(newPathname); // Yeni locale ilə URL-i dəyişdiririk
            router.refresh(); // Dəyişikliklərin tətbiq olunması üçün səhifəni yenilə
        });

        setLocaleActive(nextLocale); // State-i yenilə
    };

   


    return (
        <label className="border-2 rounded">
            <select
                value={localeActive}
                className="bg-transparent py-2"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="az">Az</option>
                <option value="en">En</option>
            </select>
        </label>
    );
}
