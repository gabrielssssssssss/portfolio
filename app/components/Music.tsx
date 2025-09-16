"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {GET_MUSIC} from "@/utils/actions";

export default function Music() {
    const [music, setMusic] = useState<{
        id: string;
        artists: string;
        Cover: string;
        Redirect: string;
    }[]>([]);

    useEffect(()=> {
        const callback = async () => {
            const response = await GET_MUSIC();
            setMusic(response);
        }
        callback()
    }, [])

    function ShuffleList<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    function ShuffleDictionary<T>(obj: T[]): T[] {
        return ShuffleList([...obj]).slice(0, 7)
    }

    return (
        <div className="mt-3">
            <div className="flex items-stretch space-x-2">
                {Object.entries(music).length > 0 &&
                    Object.entries(ShuffleDictionary(music)).map(([key, value]) => {
                    return (
                        <div key={key}>
                            <a href={value["Redirect"]} target="_blank" rel="noopener noreferrer" className="w-1.5 h-10">
                                <Image src={value["Cover"]} width={90} height={150} className="rounded-md" alt={key}/>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
