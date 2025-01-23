'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();
    const pathname = usePathname();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;

        startTransition(() => {
            // Mövcud yolun dilini yeni dəyərlə əvəz et
            const newPathname = pathname.replace(`/${localeActive}`, `/${nextLocale}`);
            router.replace(newPathname);
        });
    };

    return (
        <label className="border-2 rounded">
            <p className="sr-only">Change language</p>
            <select
                defaultValue={localeActive}
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
