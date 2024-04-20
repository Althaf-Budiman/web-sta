import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'
import HeroAboutService from "../components/HeroAboutService";
import DetailSupacon from "../components/DetailSupacon";
import SupaconBeforeAfterAndType from "../components/SupaconBeforeAfterAndType";
import SupaconWorkDetail from "../components/SupaconWorkDetail";

export default function SupaconService() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar />
            <HeroAboutService title={'SUPACON'} />
            <DetailSupacon />
            <SupaconBeforeAfterAndType />
            <SupaconWorkDetail />
        </>
    )
}