import React from 'react';

export default function AboutSection() {
    return (
        <div className="mt-48" id="about">
            <div className="mt-16 flex flex-col items-center justify-between mx-10 lg:flex-row lg:mx-32 gap-16">
                <img data-aos="fade-up-right" src="./img/about1.png" className="rounded-xl shadow-xl w-64" />
                <div className="flex flex-col items-center gap-5">
                    <h1 data-aos="fade-up" className="text-6xl md:text-8xl text-center font-bold drop-shadow-md text-grayText uppercase tracking-[0.3em]">About Us</h1>
                    <a href="/about">
                        <div data-aos="fade-up" className="fly-hover transition rounded-3xl bg-darkerBlue p-5 w-fit mt-5 text-white shadow-xl">
                            <img src="./icon/arrowIcon.svg" className="w-7" />
                        </div>
                    </a>
                </div>
                <img data-aos="fade-up-left" src="./img/about2.png" className="rounded-xl shadow-xl w-64" />

            </div>
        </div>
    )
}