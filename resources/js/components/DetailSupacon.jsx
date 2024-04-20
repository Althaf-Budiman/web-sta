import React from "react";

export default function DetailSupacon() {
    return (
        <div id="detail" className="mt-36 ms-20">
            <h2 data-aos="fade-right" className="text-4xl font-bold text-darkerBlue ">Supacon</h2>
            <div data-aos="fade-up" className="h-[3px] mt-2 w-44 bg-darkerBlue"></div>

            <div className="flex-col lg:flex-row justify-between">
                <div className="flex flex-col max-w-[45rem]">
                    <p data-aos="fade-right" className="mt-5 text-xl">Introducing Supacon The outdoor units of air conditioners and refrigerators may not have the initial performance due to the deterioration of the condenser by over time. <br /><br />

                        In addition, the environment has become harsher due to climate change in recent years, and coolers are often being operated at overcapacity. By installing Supacon, the refrigerant is sufficiently liquefied, air conditioning efficiency is improved, and the following effects can be expected.</p>
                    <ol data-aos="fade-left" className="mt-5 text-xl">
                        <li>1. Reduction of power consumption (reduction of C02 emissions)</li>
                        <li>2. Improved cooling capacity</li>
                        <li>3. Prolonging the life of the outdoor unit</li>
                    </ol>
                </div>
                <div className="flex mr-16">
                    <img data-aos="fade-down" src="./img/supaconAfter.png" width={360} />
                </div>
            </div>

            <h2 data-aos="fade-right" className="text-4xl mt-16 font-bold text-darkerBlue ">Air Conditioner Doesn't Work!</h2>
            <p data-aos="fade-right" className="mt-5 text-xl">As the aluminum fins of the outdoor unit deteriorate over
                time, they are no longer able to dissipate sufficient heat and
                the air conditioner's performance declines.
            </p>
            <img className="mt-5" src="./img/aluminiumFins.png" alt="" />
        </div>
    )
}