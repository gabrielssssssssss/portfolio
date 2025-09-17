"use client"
import React, { useEffect, useState } from 'react';
import {GET_PROJECT} from "@/utils/actions";
import { JsonValue } from '@prisma/client/runtime/library';

export default function Card() {
    const [projects, setProjects] = useState<{
        name: string;
        id: string;
        title: string;
        description: string;
        technologies: JsonValue;
        repositories: string;
    }[]>([]);

    useEffect(()=> {
        const callback = async() => {
            const response = await GET_PROJECT()
            setProjects(response);
        }
        callback();
    }, [])

    console.log(projects);

    return (
        <div className="grid h-40">
            {Object.entries(projects).length > 0 &&
                Object.entries(projects).map(([key, value]) => {
                return (
                    <div key={key}> 
                        <div className="max-w-xl p-3 bg-white border-gray-200 rounded-lg shadow-sm dark:bg-[#18181b]">
                            <div className="flex justify-between items-center">
                                <h1 className="text-white text-lg font-semibold mb-2">{value["title"]}</h1>
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/gabrielzzzzzzzzz/portfolio"
                                className="relative -top-1"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                                </a>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed [max-width:70ch] mb-4">{value["description"]}</p>
                            <footer className="font-medium text-zinc-200 text-xs leading-relaxed [max-width:70ch] mb-2">
                                {(value["technologies"] as string[]).map((technologie) =>
                                    technologie + " "
                                )}
                            </footer>
                        </div>
                    </div>
            );
            })}
        </div>
    )
}
