"use client";
import { useEffect, useState } from 'react';

export default function Timer() {
    const [time, setTime] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        const date = new Date();
        const formatDate = date.toLocaleString("en-US", {hour12: false,}).split(",")[1];
        setCurrentTime(formatDate);
        
        return () => {
            clearInterval(interval);
        }
    }, [time]);

    return (
        currentTime
    );
}
