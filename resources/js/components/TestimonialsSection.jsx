import React from 'react';

export default function TestimonialsSection() {
    return (
        <div className="mt-4 text-center">
            <h2 className="font-bold text-4xl pt-16" id="testimonials">TESTIMONIALS</h2>
            <p className="font-medium italic mt-4 text-lg">Find Out Why Our Clients Love Working With Us.</p>
            <div className="flex p-12 flex-col md:flex-row items-center justify-center gap-16 mt-7">
                <TestimonialCard name={'Kasep'} job={'PT. Super Tasko Aria'} review={`"I've been consistently impressed by the quality of service provided by Super Tasko Aria. Their team goes above and beyond to ensure client satisfaction. I wouldn't hesitate to recommend them to others."`} />
                <TestimonialCard name={'Kasep'} job={'PT. Super Tasko Aria'} review={`"I've been consistently impressed by the quality of service provided by Super Tasko Aria. Their team goes above and beyond to ensure client satisfaction. I wouldn't hesitate to recommend them to others."`} />
                <TestimonialCard name={'Kasep'} job={'PT. Super Tasko Aria'} review={`"I've been consistently impressed by the quality of service provided by Super Tasko Aria. Their team goes above and beyond to ensure client satisfaction. I wouldn't hesitate to recommend them to others."`} />
            </div>
        </div>
    )
}

function TestimonialCard({ name, job, review }) {
    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(
            <img key={i} src="/icon/Star.svg" className="w-6" />)
    }
    return (
        <div className="flex flex-col p-5 border border-transparent hover:border-gray-400 transition-all rounded-lg card-shadow text-sm max-w-80">
            <div className="flex gap-2">
                <img src="/icon/guest.svg" />
                <div className="flex items-start flex-col ">
                    <p className="font-medium">{name}</p>
                    <p className="font-extralight italic">{job}</p>
                </div>
            </div>
            <div className="flex mt-2 gap-1">
                {stars}
            </div>
            <p className="font-light italic  text-start mt-2">{review}</p>
        </div>
    )
}
