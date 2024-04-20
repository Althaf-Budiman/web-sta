import React from "react";

export default function HeroAboutService({ title }) {
    return (
        <div className="relative parallax bg-[url(./img/bgSupacon.png)] text-white gap-2 h-screen px-5 w-full flex items-center justify-center flex-col">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <h1 data-aos="fade-right" className="text-5xl md:text-7xl font-bold text-center tracking-[0.3em] relative">{title}</h1>
        </div>
    )
}