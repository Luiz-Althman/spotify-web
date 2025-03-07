'use client';

import { Globe } from 'lucide-react';
import { Link, usePathname } from '../i18n/navigation';

export function ButtonLanguage() {
    const pathname = usePathname();

    return (
        <div className="mt-10 inline-flex flex-col gap-2">
            <Link
                href={pathname}
                locale="pt"
                className="p-2 text-sm flex items-center gap-2 border border-zinc-100 rounded-full cursor-pointer"
            >
                <Globe size={20} /> Português
            </Link>
            <Link
                href={pathname}
                locale="en"
                className="p-2 text-sm flex items-center gap-2 border border-zinc-100 rounded-full cursor-pointer"
            >
                <Globe size={20} /> English
            </Link>
        </div>
    );
}
