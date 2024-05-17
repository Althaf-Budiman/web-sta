import React from 'react';

export default function ServicesSection() {
    return (
        <div id="services" className="relative parallax bg-[url('./img/bgSupacon.png')] text-white text-center mt-48 pt-16 pb-14">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <h2 className="font-bold text-4xl pt-14 relative">OUR SERVICES</h2>
            <p className="font-medium italic mt-4 text-lg relative">Discover what we offer in our services.</p>

            <div className="flex-col mt-8 lg:mt-0 items-center flex lg:flex-row pb-24 justify-center gap-32 relative">
                <ServiceCard link={'/supacon'} dataAos={"fade-up-right"} name={'Supacon'} logo={'/icon/supaconIcon.svg'} preview={'Supacon is a Japanese-made condenser sold as a unit to revitalize large-scale (building/industrial) outdoor AC units.'} />
                <ServiceCard dataAos={"fade-up"} name={'Electrical Engineering'} logo={'/icon/electricalIcon.svg'} preview={'Our team of experienced engineers can handle all your electrical needs, from lighting and power to security and data systems.'} />
                <ServiceCard dataAos={"fade-up-left"} name={'Supply'} logo={'/icon/tradingIcon.svg'} preview={'We can help you to source any: Electrical, Mechanical, & IT Communication that you need from local & imported items.'} />
            </div>
        </div>


    )
}

function ServiceCard({ name, logo, preview, dataAos, link = '' }) {
    return (
        <div data-aos={dataAos} data-aos-duration="4000" className="hover:border-white hover:bg-darkerBlue  border transition border-transparent p-8 rounded-xl mt-14 flex flex-wrap flex-col items-center max-w-72">
            <img src={logo} className="w-20" />
            <p className="font-semibold text-2xl">{name}</p>
            <p className=" mt-5">{preview}</p>
            {link !== '' && (
                <a href={link} className="mt-3 px-4 py-1 font-semibold border rounded-lg border-white hover:bg-white hover:text-darkerBlue transition ease">
                    <p className="text-sm">Detail</p>
                </a>
            )}
        </div>
    )
}