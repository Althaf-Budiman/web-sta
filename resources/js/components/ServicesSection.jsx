import React from 'react';

export default function ServicesSection() {
    return (
        <div className="bg-darkerBlue text-white text-center mt-44 pt-16 pb-14">
            <h2 className="font-bold text-4xl pt-14" id="services">OUR SERVICES</h2>
            <p className="font-medium italic mt-4 text-lg">Discover what we offer in our services.</p>

            <div className="flex-col mt-8 lg:mt-0 items-center flex lg:flex-row pb-24 justify-center gap-32">
                <ServiceCard name={'Supacon'} logo={'/icon/supaconIcon.svg'} preview={'Supacon is a Japanese-made condenser sold as a unit to revitalize large-scale (building/industrial) outdoor AC units.'} />
                <ServiceCard name={'Electrical Engineering'} logo={'/icon/electricalIcon.svg'} preview={'Our team of experienced engineers can handle all your electrical needs, from lighting and power to security and data systems.'} />
                <ServiceCard name={'Trading'} logo={'/icon/tradingIcon.svg'} preview={'We can help you to source any: Electrical, Mechanical, & Industrial Products that you need from local & imported items.'} />
            </div>
        </div>
    )
}

function ServiceCard({ name, logo, preview }) {
    return (
        <div className="mt-14 flex flex-col items-center max-w-52">
            <img src={logo} className="w-16" />
            <p className="font-semibold text-2xl">{name}</p>
            <p className="text-sm mt-2">{preview}</p>
            <a href="#" className="mt-3 px-4 py-1 font-semibold border rounded-lg border-white hover:bg-white hover:text-darkerBlue transition-all ease">
                <p className="text-sm">Learn More</p>
            </a>
        </div>
    )
}