import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import React from 'react';

export default function Navbar() {
    const { url } = usePage();
    const [scrollPassHero, setScrollPassHero] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
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
                <a href="/about" className={`hover:text-darkerBlue transition md:p-0 p-2 ${scrollPassHero ? 'text-black' : 'text-black md:text-white'}`}><li>About & Contact</li></a>
                <li className={`relative ${showDropdown ? 'z-50' : ''}`}>
                    <button onClick={toggleDropdown} className={`hover:text-darkerBlue transition md:p-0 p-2 focus:outline-none ${scrollPassHero ? 'text-black' : 'text-black md:text-white'}`}>
                        Services
                        <svg className={`w-4 h-4 ml-1 inline-block transition ${showDropdown ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {showDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-md py-1">
                            <a href="/supacon" className="block ps-4 pe-10 py-2 text-lg md:text-base text-gray-700 hover:bg-gray-100">Supacon</a>
                        </div>
                    )}
                </li>
                <a href="/articles" className={`hover:text-darkerBlue transition md:p-0 p-2 ${scrollPassHero ? 'text-black' : 'text-black md:text-white'}`}><li>Article</li></a>
            </ul>
        </nav>
    );
}
