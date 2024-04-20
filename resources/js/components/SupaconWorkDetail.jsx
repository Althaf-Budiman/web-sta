import React from "react";

export default function SupaconWorkDetail() {
    return (
        <>
            <HowDoesItWorkSection />
        </>
    )
}

function HowDoesItWorkSection() {
    return (
        <div id="work" className="mt-28 flex flex-col items-center mb-10">
            <img src="./img/supaconHow.png" width={500} />
            <h2 data-aos="fade-right" className="text-4xl mt-8 font-bold text-darkerBlue ">How Does It Work?</h2>
            <div data-aos="fade-up" className="h-[3px] mt-2 w-96 bg-darkerBlue"></div>

            {/* How Does It Work */}
            {/* 1 & 2 */}
            <div className="mt-8 flex flex-col lg:flex-row lg:gap-24">
                <div data-aos="fade-up" className="mt-5 lg:mt-10 flex max-w-[30rem]">
                    <p className="font-bold text-2xl relative">1</p>
                    <p className="mt-5 text-xl">Air conditioning units that are over 5 years old will be assisted in compressor work by the Supercondenser.</p>
                </div>
                <div data-aos="fade-up" className="mt-10 flex max-w-[30rem]">
                    <p className="font-bold text-2xl relative">2</p>
                    <p className="mt-5 text-xl">The tired compressor's work will be aided in lightening the load.</p>
                </div>
            </div>

            {/* 3 & 4 */}
            <div className="lg:mt-8 flex flex-col lg:flex-row lg:gap-24">
                <div data-aos="fade-up" className="mt-10 flex max-w-[30rem]">
                    <p className="font-bold text-2xl relative">3</p>
                    <p className="mt-5 text-xl">The Supercondenser also requires airflow from outside to ensure stable heat, as shown in the example image.</p>
                </div>
                <div data-aos="fade-up" className="mt-10 flex max-w-[30rem]">
                    <p className="font-bold text-2xl relative">4</p>
                    <p className="mt-5 text-xl">The Supercondenser assists in maintaining the air conditioning unit and will reduce electricity and maintenance costs.</p>
                </div>
            </div>
        </div>
    )
}