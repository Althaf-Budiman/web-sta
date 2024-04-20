import React from "react";

export default function ContactCard() {
    return (
        <div data-aos="fade-down" className="flex flex-col lg:flex-row min-w-[90%] relative rounded-lg card-shadow mx-8 bg-white">
            <div className="flex flex-col rounded-tl-lg rounded-bl-lg bg-black text-white p-6 lg:max-w-96">
                <h3 className="text-2xl font-medium mt-5">Contact Information</h3>
                <p className="font-light text-xs mt-3">Contact our seasoned team directly for service, pricing, or general queries.
                    Our experts ensure professional and knowledgeable assistance. Start a conversation
                    with us today to discover how we can cater to your needs.</p>
                <div className="w-full bg-white h-[1px] mt-4"></div>


                <div className="flex flex-col items-center mt-10">
                    <ContactItem icon={'telephoneIcon'} text={'081320361179 <br/> 085280145489'} />
                    <ContactItem icon={'emailIcon'} text={'supertaskoaria@gmail.com'} />
                    <ContactItem icon={'locationIcon'} text={'Jl. k.h.m. Yusuf Raya No.89 Mekar Jaya Kec. Sukmajaya Kota Depok Provinsi Jawa Barat'} />
                </div>

            </div>

            <div className="flex flex-col pt-6 pb-5 w-full">
                <form action="">
                    <div className="flex flex-col md:flex-row justify-evenly">
                        <Input name={'name'} placeholder={'Your Username'} />
                        <Input name={'email'} placeholder={'Your Email'} />
                    </div>

                    <div className="flex flex-col md:flex-row justify-evenly ">
                        <Input name={'company'} placeholder={'Company'} />
                        <Input name={'phoneNumber'} placeholder={'Phone Number'} type={'number'} />
                    </div>

                    <div className="flex justify-center">
                        <textarea name="inquiry" id="inquiry"
                            className="mx-3 md:mx-14 text-black ps-2 mt-4 w-full py-2 border-2 rounded-lg "
                            placeholder="Details of Inquiry"
                            cols="30"
                            rows="7"></textarea>
                    </div>

                    <div className="flex w-full justify-center">
                        <button type="submit" className="rounded-lg text-sm font-semibold mt-8 bg-darkerBlue text-white px-8 py-3">SUBMIT</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

function ContactItem({ icon, text }) {
    return (
        <div className="flex flex-row mb-10 w-full">
            <img src={`/icon/${icon}.svg`} className="ms-[15%]" />
            <p className="font-light text-xs break-all max-w-[200px] ms-10" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    )
}

function Input({ name, placeholder, type = "text" }) {
    return (
        <div className="w-full md:w-[40%] mb-5">
            <div className="relative w-full h-12">
                <input
                    className="text-black mt-4 ps-2 w-full py-2 border rounded-lg"
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={name} />
            </div>
        </div>
    )
}


