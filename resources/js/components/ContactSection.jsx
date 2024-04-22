import React from 'react';

export default function ContactSection() {
    return (
        <div className="bg-[url('./img/bgMap.png')] parallax relative text-white py-24 mt-44 flex items-center flex-col lg:flex-row justify-center gap-10">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className='relative flex flex-col items-center text-center lg:items-start lg:text-start'>
                <h2 data-aos="fade-right" className="font-bold text-4xl " id="contact">CONTACT</h2>
                <p data-aos="fade-left" className="font-medium italic mt-4">Need Assistance? Contact Our Team</p>
                <p data-aos="fade-right" className='mt-10  max-w-lg'>Contact our seasoned team directly for service, pricing, or general queries. Our experts ensure professional and knowledgeable assistance. Start a conversation with us today to discover how we can cater to your needs.</p>
                <a data-aos="fade-left" href="/about#contact" className="mt-11 px-9 w-fit text-sm py-3 font-semibold border rounded-3xl border-white hover:bg-white hover:text-darkerBlue transition ease">
                    <p>CONTACT US</p>
                </a>
            </div>


            <div data-aos="fade-up" className="relative mt-10 lg:mt-0 h-80 w-[80%] lg:w-[40%]">
                <iframe className='h-full w-full rounded-lg' src="https://www.google.com/maps/embed/v1/place?q=Jl.+K.H.M.+Yusuf+Raya+No.89,+Mekar+Jaya,+Kec.+Sukmajaya,+Kota+Depok,+Jawa+Barat+16411,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
            </div>

        </div>
    )
}

