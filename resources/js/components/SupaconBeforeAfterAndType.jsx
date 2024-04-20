import React from "react";

export default function SupaconBeforeAfterAndType() {
    return (
        <div id="beforeAfterAndType" className="relative parallax bg-[url('./img/bgSupacon.png')] text-white text-center mt-48 pt-16 pb-14">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            
            {/* Before And After */}
            <h2 data-aos="fade-right" className="text-6xl font-bold tracking-[0.5rem] relative">BEFORE AND AFTER</h2>
            <div className="mt-16 flex-col flex lg:flex-row items-center relative justify-evenly">
                <div data-aos="fade-up" className="flex flex-col">
                    <h3 className="text-4xl font-bold tracking-[0.4rem]">BEFORE</h3>
                    <img className="mt-10" width={400} src="./img/supaconBefore.png" />
                </div>
                <div data-aos="fade-down" className="flex flex-col mt-10 lg:mt-0">
                    <h3 className="text-4xl font-bold tracking-[0.4rem]">AFTER</h3>
                    <img className="mt-10" width={400} src="./img/supaconAfter.png" />
                </div>
            </div>

            {/* Supacon Type */}
            <h2 data-aos="fade-left" className="mt-48 text-6xl font-bold tracking-[0.5rem] relative">SUPACON TYPE</h2>
            <div className="mt-16 flex-col flex lg:flex-row relative items-center justify-evenly">
                <div data-aos="fade-up" className="flex flex-col">
                    <img className="mt-10" width={400} src="./img/supacon-r.png" />
                </div>
                <div data-aos="fade-down" className="flex flex-col">
                    <img className="mt-10" width={400} src="./img/supacon-f.png" />
                </div>
            </div>
        </div>
    )
}