"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { GET } from "../../utils/actions";

export default function Stack() {
    const [links, setLinks] = useState<{ icon: string; redirect: string; technologie: string }[]>([]);

    useEffect(() => {
        (async () => {
            const result = await GET();
            const formatted = Object.entries(result).map(([_, value]) => ({
                icon: value.icon,
                redirect: value.redirect,
                technologie: value.technologie,
            }));
            setLinks(formatted);
        })();
    }, []);

    return (
        <div className="flex flex-wrap gap-3 mb-6">
            {links.map((link, index) => (
                <a
                    key={index}
                    type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.redirect}
                    className="flex items-center gap-2 cursor-pointer text-white bg-[#18181b] hover:bg-zinc-800 font-medium rounded-md text-xs px-3 py-1.5"
                >
                    {parse(link.icon)}
                    {link.technologie}
                </a>
            ))}
        </div>
    );
}
