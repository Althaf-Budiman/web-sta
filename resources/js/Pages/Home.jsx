import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import AOS from 'aos';
import 'aos/dist/aos.css'
import LatestArticlesSection from '../components/LatestArticlesSection';

export default function Home({ latestArticles }) {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <LatestArticlesSection latestArticles={latestArticles}  />
            <ContactSection />
            {/* <Footer /> */}
        </>
    )
}
            // <div className="mt-[53rem] md:mt-[45rem] lg:mt-80">