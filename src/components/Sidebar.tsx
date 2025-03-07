'use client';

import Link from 'next/link';
import {
    Home as HomeIcon,
    Search,
    Library,
    Plus,
    Heart,
    ArrowDownToLine,
    Bookmark,
} from 'lucide-react';
import { ButtonLanguage } from './ButtonLanguage';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const menus = [
    { id: 0, name: 'home', icon: <HomeIcon /> },
    { id: 1, name: 'search', icon: <Search /> },
    { id: 2, name: 'yourLibrary', icon: <Library /> },
];

const actions = [
    { id: 0, name: 'actionCreate', icon: <Plus className="size-5" /> },
    { id: 1, name: 'actionLiked', icon: <Heart className="size-5" /> },
    { id: 2, name: 'actionEpisodes', icon: <Bookmark className="size-5" /> },
];

export function SideBar() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const t = useTranslations('Sidebar');

    const handleActive = (id: number) => {
        setActiveId(id);
    };

    return (
        <aside className="w-60 bg-black p-6">
            <div className="flex items-center">
                <Image src="/logo.png" alt="" width={131} height={40} />
            </div>
            <nav className="space-y-5 mt-10">
                {menus.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => handleActive(item.id)}
                        className={`flex items-center gap-3 text-sm cursor-pointer hover:text-white ${
                            activeId === item.id
                                ? 'text-white font-semibold'
                                : 'text-gray-inactive font-bold'
                        }`}
                    >
                        {item.icon} {t(item.name)}
                    </button>
                ))}
            </nav>
            <nav className="space-y-5 flex flex-col mt-10">
                {actions.map((item) => (
                    <Link key={item.id} href="/" className="flex gap-3">
                        <span
                            className={`${
                                item.id === 0 && 'bg-zinc-300 text-zinc-700'
                            } ${
                                item.id === 1 &&
                                'bg-gradient-to-br from-violet-600 via-violet-500 to-green-200  text-gray-inactive'
                            } ${
                                item.id === 2 && 'bg-green-900  text-green-200'
                            }  flex items-center rounded-md p-1 `}
                        >
                            {item.icon}
                        </span>
                        <span className="font-bold">{t(item.name)}</span>
                    </Link>
                ))}
            </nav>
            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
                <Link
                    href="/"
                    className="text-sm text-gray-inactive hover:text-white"
                >
                    Jazz
                </Link>
                <Link
                    href="/"
                    className="text-sm text-gray-inactive hover:text-white"
                >
                    Hangover Cure
                </Link>
                <Link
                    href="/"
                    className="text-sm text-gray-inactive hover:text-white"
                >
                    Your Top Songs 2025
                </Link>
                <Link
                    href="/"
                    className="text-sm text-gray-inactive hover:text-white"
                >
                    Funk
                </Link>
                <Link
                    href="/"
                    className="text-sm text-gray-inactive hover:text-white"
                >
                    Rock
                </Link>
                <button
                    type="button"
                    className="flex items-center gap-3 text-gray-inactive font-semibold hover:text-white cursor-pointer"
                >
                    <ArrowDownToLine
                        size={28}
                        className="border border-gray-inactive rounded-full p-1"
                    />
                    <span className="text-sm">{t('installApp')}</span>
                </button>
            </nav>
            <ButtonLanguage />
        </aside>
    );
}
