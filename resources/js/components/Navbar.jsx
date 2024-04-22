import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import React from 'react';

export default function Navbar() {
    const { url } = usePage();
    const [scrollPassHero, setScrollPassHero] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const transparentFirst = url === '/' || url === '/about' || url === '/supacon';

    useEffect(() => {
        if (transparentFirst) {
            window.addEventListener("scroll", () => {
                setScrollPassHero(window.scrollY > 15);
            });
        } else {
            setScrollPassHero(true);
        }
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={`${scrollPassHero ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'} font-jakartaSans transition z-30 px-5 py-4 items-center fixed top-0 w-full flex justify-between`}>
            <a href="/" className="flex items-center">
                <img src="/icon/logo-supertasko.svg" className="w-10" />
                <h1 className="text-xl font-semibold ms-4">Super Tasko Aria</h1>
            </a>
            <div className="md:hidden">
                <button onClick={toggleMenu} className={`${scrollPassHero ? 'text-white' : 'text-black'}block focus:outline-none`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <ul className={`${showMenu ? 'flex flex-col md:flex-row gap-8 px-3 md:items-center' : 'hidden md:flex gap-10'} flex flex-row absolute top-16 left-0 bg-white w-full md:relative md:w-auto md:bg-transparent md:top-auto`}>
                <a href="/about" className={`hover:text-darkerBlue transition md:p-0 p-2 ${scrollPassHero ? 'text-black' : 'text-black md:text-white'}`}><li>About</li></a>
                <a href="/articles" className={`hover:text-darkerBlue transition md:p-0 p-2 ${scrollPassHero ? 'text-black' : 'text-black md:text-white'}`}><li>Article</li></a>
            </ul>
        </nav>
    );
}
