import {
    Play,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2,
    Heart,
} from 'lucide-react';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-black-500 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed w-full bottom-0">
            <div className="flex items-center gap-4">
                <Image src="/album.jpg" alt="" width={56} height={56} />
                <div className="flex flex-col ">
                    <strong className="font-normal text-sm text-white">
                        Tune Jo Kaha
                    </strong>
                    <span className="text-xs">
                        Pritam, Mohit Chauhan, Sandeep Shrivastava
                    </span>
                </div>

                <Heart />
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle className="text-zinc-200" size={20} />
                    <SkipBack className="text-zinc-200" size={20} />
                    <button
                        type="button"
                        className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto "
                    >
                        <Play />
                    </button>

                    <SkipForward className="text-zinc-200" size={20} />
                    <Repeat className="text-zinc-200" size={20} />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full" />
                    </div>
                    <span className="text-xs text-zinc-400">2:24</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />

                <div className="flex items-center gap-2">
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-10 h-1 rounded-full" />
                    </div>
                </div>

                <Maximize2 size={20} />
            </div>
        </footer>
    );
}
