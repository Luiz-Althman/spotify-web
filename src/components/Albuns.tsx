'use client';

import Link from 'next/link';
import { Play } from 'lucide-react';
import Image from 'next/image';

const Album = [
    {
        id: 0,
        img: '/album.jpg',
        name: '24K Magic',
        src: '/',
    },
    {
        id: 1,
        img: '/album.jpg',
        name: '24K Magic',
        src: '/',
    },
    {
        id: 2,
        img: '/album.jpg',
        name: '24K Magic',
        src: '/',
    },
    {
        id: 3,
        img: '/album.jpg',
        name: '24K Magic',
        src: '/',
    },
    {
        id: 4,
        img: '/album.jpg',
        name: '24K Magic',
        src: '/',
    },
    {
        id: 5,
        img: '/album.jpg',
        name: '24K Magic',
        src: '/',
    },
];

export function Albuns() {
    return (
        <div className="grid md:grid-cols-3 2xl:grid-cols-5 gap-6 mt-4">
            {Album.map((item) => (
                <Link
                    key={`${item.id}`}
                    href={item.src}
                    target="_blank"
                    className="flex items-center gap-4 bg-white/10 rounded-md ovreflow-hidden hover:bg-white/20 transition-colors group"
                >
                    <Image
                        src={item.img}
                        alt=""
                        width={80}
                        height={80}
                        className="rounded-tl-md rounded-bl-md shadow-[0px_8px_24px_0px_rgba(0,_0,_0,_0.5)]"
                    />
                    <strong className="text-white text-md font-bold">
                        {item.name}
                    </strong>
                    <button
                        type="button"
                        className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-200 text-black ml-auto mr-8 invisible group-hover:visible"
                    >
                        <Play />
                    </button>
                </Link>
            ))}
        </div>
    );
}
