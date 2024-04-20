import { usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react"
import { useState } from "react"
import React from 'react';


export default function Navbar() {
    const { url } = usePage()
    const [scrollPassHero, setScrollPassHero] = useState(false)

    const transparentFirst = url === '/' ? true : false || url === '/about' || url === '/supacon' ? true : false

    useEffect(() => {
        if (transparentFirst) {
            window.addEventListener("scroll", () => {
                setScrollPassHero(window.scrollY > 15)
            })
        } else {
            setScrollPassHero(true)
        }
    }, [])

    return (
        <nav className={`${scrollPassHero ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'} font-jakartaSans transition z-30 px-5 py-4 items-center fixed top-0 w-full flex justify-between`}>
            
            <a href="/" className="flex items-center">
                <img src="/icon/logo-supertasko.svg" className="w-10" />
                <h1 className="text-xl font-semibold ms-4">Super Tasko Aria</h1>
            </a>
            <ul className="gap-8 px-3 hidden md:flex">
                <a href="/about" className="hover:text-darkerBlue"><li>About</li></a>
                <a href="/articles" className="hover:text-darkerBlue"><li>Article</li></a>
            </ul>
        </nav>
    )
}