import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function ContactCard() {
    const { data, setData, reset, processing, errors, post } = useForm({
        name: '',
        email: '',
        company: '',
        phoneNumber: '',
        inquiry: '',
    })

    function onSubmitInquiryFormHandler(e) {
        e.preventDefault();
        post('/sendInquiry', { onSuccess: () => reset(), preserveScroll: true })
    }


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
                <form onSubmit={onSubmitInquiryFormHandler}>
                    <div className="flex flex-col md:flex-row justify-evenly mb-3">
                        <div className="flex flex-col w-full md:w-[40%]">
                            <Input value={data.name} onChange={(e) => setData('name', e.target.value)} name={'name'} placeholder={'Your Name'} />
                            {errors.name && <p className="mt-2 text-sm text-red-700">{errors.name}</p>}
                        </div>

                        <div className="flex flex-col w-full md:w-[40%]">
                            <Input value={data.email} onChange={(e) => setData('email', e.target.value)} name={'email'} placeholder={'Your Email'} />
                            {errors.email && <p className="mt-2 text-sm text-red-700">{errors.email}</p>}
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row justify-evenly mb-3">
                        <div className=" flex flex-col w-full md:w-[40%]">
                            <Input value={data.company} onChange={(e) => setData('company', e.target.value)} name={'company'} placeholder={'Company'} />
                            {errors.company &&
                                <p className="mt-2 text-sm text-red-700">{errors.company}</p>
                            }
                        </div>

                        <div className=" flex flex-col w-full md:w-[40%]">
                            <Input value={data.phoneNumber} onChange={(e) => setData('phoneNumber', e.target.value)} name={'phoneNumber'} placeholder={'Phone Number'} type={'number'} />
                            {errors.phoneNumber &&
                                <p className="mt-2 text-sm text-red-700">{errors.phoneNumber}</p>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <textarea value={data.inquiry} onChange={(e) => setData('inquiry', e.target.value)} name="inquiry" id="inquiry"
                            className="mx-3 md:mx-14 text-black ps-2 mt-4 py-2 border rounded-lg "
                            placeholder="Details of Inquiry"
                            cols="30"
                            rows="7"></textarea>

                        {errors.inquiry &&
                            <p className="mt-2 text-sm text-red-700 text-center">{errors.inquiry}</p>
                        }
                    </div>

                    <div className="flex w-full justify-center">
                        <button type="submit" disabled={processing} className={`rounded-lg text-sm font-semibold mt-8 bg-darkerBlue text-white px-8 py-3 ${processing && 'opacity-25'}`}>SUBMIT</button>
                    </div>

                    {processing && (
                        <div className="flex justify-center">
                            <p>Processing..</p>
                        </div>
                    )}
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

function Input({ name, placeholder, value, onChange, type = "text" }) {
    return (
        <div className="relative w-full h-12">
            <input
                className="text-black mt-4 ps-2 w-full py-2 border rounded-lg"
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                id={name} />
        </div>
    )
}


