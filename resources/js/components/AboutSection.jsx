import { useEffect, useState } from "react"
import React from 'react';

export default function AboutSection() {

    const textSection = [
        `<b>Super Tasko Aria</b> is a leading provider of comprehensive solutions in the field of
                            Air Conditioning System, Engineering Installation, and Supply.With a commitment
                            to excellence and customer satisfaction, we have established ourselves as a trusted
                            partner for clients across various industries.`,
        `Visi`,
        `Misi`
    ];

    const [active, setActive] = useState(0)
    const [text, setText] = useState(textSection[0])

    function setTextHandler(activeIndex, textIndex) {
        setActive(activeIndex)
        setText(textSection[textIndex])
    }

    return (
        <div className="mt-36">
            <h2 className="text-center text-darkerBlue font-semibold text-5xl" id="about">Who Are We?</h2>

            <div className="mt-16 flex flex-col items-center mx-10 lg:flex-row lg:mx-32 gap-16">
                <div className="flex flex-col items-center justify-center lg:items-start">
                    <div className="flex flex-col mx-auto lg:flex-row text-center w-fit gap-10">
                        <div onClick={() => setTextHandler(0, 0)} className={`rounded-3xl text-darkerBlue border px-12 hover:cursor-pointer py-2 ${active == 0 ? 'text-white text-2xl font-bold bg-gradient-to-r from-darkerBlue to-gradientBlue leading-10 ' : ' border-transparent font-semibold text-3xl transition ease hover:border-darkerBlue'}`}>
                            About
                        </div>
                        <div onClick={() => setTextHandler(1, 1)} className={`rounded-3xl text-darkerBlue border px-12 hover:cursor-pointer py-2 ${active == 1 ? 'text-white text-2xl font-bold bg-gradient-to-r from-darkerBlue to-gradientBlue leading-10 ' : ' border-transparent font-semibold text-3xl transition ease hover:border-darkerBlue'}`}>
                            Vision
                        </div>
                        <div onClick={() => setTextHandler(2, 2)} className={`rounded-3xl text-darkerBlue border px-12 hover:cursor-pointer py-2 ${active == 2 ? 'text-white text-2xl font-bold bg-gradient-to-r from-darkerBlue to-gradientBlue leading-10 ' : ' border-transparent font-semibold text-3xl transition ease hover:border-darkerBlue'}`}>
                            Mission
                        </div>
                    </div>

                    <div className="flex mt-10">
                        <p className="text-xl " dangerouslySetInnerHTML={{ __html: text }}>
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="rounded-lg w-80 border">
                        <img src="/icon/logo-supertasko.svg" className="w-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}