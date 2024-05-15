import React from "react";

export default function AboutCard() {
    return (
        <div className="rounded-xl  w-fit flex flex-col items-center lg:flex-row max-lg:gap-10">
            <div className="flex card-shadow flex-col bg-darkerBlue rounded-bl-xl rounded-tl-xl relative z-10 mx-2 order-1 lg:mx-0 lg:left-4 text-white p-7 max-w-[44rem] max-lg:rounded-xl max-lg:order-2">
                <h2 className="font-bold text-4xl text-center">About</h2>
                <div className="h-[3px] mt-4 w-full bg-white"></div>
                <p className="mt-5 text-lg text-center"><b>PT. Super Tasko Aria</b> is a leading provider of comprehensive solutions in the field of Air Conditioning System, Engineering Installation, and Supply. With a commitment to excellence and customer satisfaction, we have established ourselves as a trusted partner for clients across various industries.</p>
            </div>
            <div className="flex w-80 px-6 card-shadow border-black border-l-2 lg:border-l-0 border-t-2 border-r-2 border-b-2 relative order-2 rounded-tr-xl rounded-br-xl max-lg:rounded-xl max-lg:order-1">
                <img src="./icon/logo-supertasko.svg"  />
            </div>
        </div>
    )
}