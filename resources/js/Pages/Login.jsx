import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "@inertiajs/inertia-react";

export default function Login() {

    const { data, setData, processing, post, errors, reset } = useForm({
        'name': '',
        'password': ''
    })

    function onSubmitEventHandler(e) {
        e.preventDefault()
        post('/login', { onSuccess: () => reset() })
    }

    return (
        <>
            <Navbar />
            <form onSubmit={onSubmitEventHandler} className="w-screen h-screen flex justify-between items-center">
                <div className="w-1/2 h-full flex flex-col bg-[url(./img/bgSupacon.png)]">
                    <div className="w-1/2 absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="flex flex-col justify-center items-center h-full">
                        <img src="/img/supertaskoaria.png" className="w-60 my-5 z-10"/>
                        <h1 className="text-3xl text-white font-bold z-10">Super Tasko Aria</h1>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <div className="rounded-lg card-shadow p-10 flex flex-col">
                        <h1 className="text-3xl font-semibold text-center">Login</h1>
                        <label htmlFor="name" className="mt-5 text-sm">Name</label>
                        <input type="text" id="name" value={data.name} onChange={e => setData('name', e.target.value)} className="w-72 rounded-lg border py-2 px-3 " />
                        {errors.name &&
                            <p className="mt-2 text-sm text-red-700">{errors.name}</p>
                        }
                        <label htmlFor="password" className="mt-5 text-sm">Password</label>
                        <input type="password" id="password" value={data.password} onChange={e => setData('password', e.target.value)} className="w-72 rounded-lg border py-2 px-3 " />
                        {errors.password &&
                            <p className="mt-2 text-sm text-red-700">{errors.password}</p>
                        }
                        <button type="submit" disabled={processing} className={`mt-4 py-2 px-4 bg-darkerBlue rounded-lg text-white hover:bg-blue-500 hover:transition ${processing && 'opacity-25'}`}>Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}