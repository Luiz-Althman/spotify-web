'use client';

import Link from 'next/link';
import Image from 'next/image';

const Made = [
    {
        id: 0,
        src: '/album.jpg',
        name: 'Bruno Mars',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        id: 1,
        src: '/album.jpg',
        name: 'Bruno Mars',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        id: 2,
        src: '/album.jpg',
        name: 'Bruno Mars',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        id: 3,
        src: '/album.jpg',
        name: 'Bruno Mars',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        id: 4,
        src: '/album.jpg',
        name: 'Bruno Mars',
        description: 'Lorem ipsum dolor sit amet.',
    },
];

export function MadeFor() {
    return (
        <div className="grid md:grid-cols-5 2xl:grid-cols-7 gap-4 mt-4 mb-52">
            {Made.map((item) => (
                <Link
                    href=""
                    className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 relative w-[205px]"
                    key={item.id}
                >
                    <Image
                        src={item.src}
                        alt=""
                        width={173}
                        height={173}
                        className="w-full rounded"
                    />
                    <Image
                        src={item.src}
                        alt=""
                        width={40}
                        height={40}
                        className="absolute bottom-22 left-2 rounded"
                    />
                    <strong className="font-semibold">{item.name}</strong>
                    <span className="text-sm text-zinc-500">
                        {item.description}
                    </span>
                </Link>
            ))}
        </div>
    );
}
