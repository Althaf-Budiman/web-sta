import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import ContactCard from "../components/ContactCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import HeroAboutService from "../components/HeroAboutService";


export default function About() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <Navbar />
            <HeroAboutService title={'ABOUT & CONTACT'} />
            <div id="about" data-aos="fade-up" className="mt-36 flex justify-center">
                <AboutCard />
            </div>
            <div id="contact" className="bg-[url('./img/bgMap.png')] parallax relative p-10 mt-36 flex justify-center">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <ContactCard />
            </div>
        </>
    )
}