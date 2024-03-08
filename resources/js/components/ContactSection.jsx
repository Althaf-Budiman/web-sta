import React from 'react';

export default function ContactSection() {
    return (
        <div className="bg-darkerBlue text-white py-24 mt-16 flex items-center flex-col lg:flex-row justify-center gap-10">
            <div className='flex flex-col items-center text-center lg:items-start lg:text-start'>
                <h2 className="font-bold text-4xl " id="contact">CONTACT</h2>
                <p className="font-medium italic mt-4">Need Assistance? Contact Our Team</p>
                <p className='mt-10  max-w-lg'>Contact our seasoned team directly for service, pricing, or general queries. Our experts ensure professional and knowledgeable assistance. Start a conversation with us today to discover how we can cater to your needs.</p>
                <a href="#services" className="mt-11 px-9 w-fit text-sm py-3 font-semibold border rounded-3xl border-white hover:bg-white hover:text-darkerBlue transition-all ease">
                    <p>OUR SERVICES</p>
                </a>
            </div>


            <div className="mt-10 lg:mt-0 h-80 w-[80%] lg:w-[40%]">
                <iframe className='h-full w-full' src="https://www.google.com/maps/embed/v1/place?q=Jl.+K.H.M.+Yusuf+Raya+No.89,+Mekar+Jaya,+Kec.+Sukmajaya,+Kota+Depok,+Jawa+Barat+16411,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
            </div>

        </div>
    )
}

// function ContactItem({ icon, text }) {
//     return (
//         <div className="flex flex-row mb-10 w-full">
//             <img src={`/icon/${icon}.svg`} className="ms-[15%]" />
//             <p className="font-light text-xs break-all max-w-[200px] ms-10" dangerouslySetInnerHTML={{ __html: text }}></p>
//         </div>
//     )
// }

// function Input({ name, placeholder, type = "text" }) {
//     return (
//         <div className="w-full mx-2 md:w-[40%] mb-5">
//             <div className="relative w-full h-12">
//                 <input
//                     className="peer text-black w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
//                     placeholder=" "
//                     type={type}
//                     name={name}
//                     id={name} />
//                 <label
//                     className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">{placeholder}
//                 </label>
//             </div>
//         </div>
//     )
// }


{/* <div className="flex flex-col lg:flex-row top-10 relative rounded-lg card-shadow mx-8 bg-white">
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
                <div className="w-full mx-2 md:mx-14">
                    <div className="relative w-full min-w-[200px]">
                        <textarea
                            className="peer text-black h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            name="inquiry"
                            rows={7}
                            id="inquiry"></textarea>
                        <label
                            className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Details of Inquiry
                        </label>
                    </div>
                </div>
                {/* <textarea name="inquiry" id="inquiry"
                                className="mx-3 md:mx-14 text-black ps-2 mt-4 w-full py-2 border-2 rounded-lg "
                                placeholder="Details of Inquiry"
                                cols="30"
                                rows="7"></textarea> */}
//             </div>

//             <div className="flex w-full justify-center">
//                 <button type="submit" className="rounded-lg text-sm font-semibold mt-8 bg-darkerBlue text-white px-8 py-3">SUBMIT</button>
//             </div>

//         </form>
//     </div>
// </div> */}