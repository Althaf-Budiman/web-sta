import { useEffect } from "react"
import { useState } from "react"
import React from 'react';


export default function Navbar() {
    const [scrollPassHero, setScrollPassHero] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPassHero(window.scrollY > 15)
        })
    }, [])

    return (
        <nav className={`${scrollPassHero ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'} font-jakartaSans transition z-50 px-5 py-4 items-center fixed w-full flex justify-between`}>
            <a href="#" className="flex items-center">
                <img src="/icon/logo-supertasko.svg" className="w-10" />
                <h1 className="text-xl font-semibold ms-4">Super Tasko Aria</h1>
            </a>
            <ul className="gap-8 px-3 hidden md:flex">
                <a href="#" className="hover:text-darkerBlue"><li>Home</li></a>
                <a href="#about" className="hover:text-darkerBlue"><li>About</li></a>
                <a href="#services" className="hover:text-darkerBlue"><li>Services</li></a>
                <a href="#testimonials" className="hover:text-darkerBlue"><li>Reviews</li></a>
                <a href="#contact" className="hover:text-darkerBlue"><li>Contacts</li></a>
            </ul>
        </nav>
    )
}