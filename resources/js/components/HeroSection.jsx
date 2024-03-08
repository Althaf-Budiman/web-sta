import React from 'react';

export default function HeroSection() {
    return (
        <div className="bg-darkerBlue text-white gap-2 h-screen px-5 w-full flex items-center justify-center flex-col">
            <h2 className="text-7xl font-bold text-center ">Super Tasko Aria</h2>
            <h3 className="text-4xl mt-7 text-center">Air Conditioning System,<br />Engineering Installation, & Supply.</h3>
            <a href="#services" className="mt-14 px-9 py-3 font-semibold border rounded-3xl border-white hover:bg-white hover:text-darkerBlue transition-all ease">
                <p>OUR SERVICES</p>
            </a>
        </div>
    )
}