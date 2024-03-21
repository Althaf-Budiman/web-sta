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
            <form onSubmit={onSubmitEventHandler} className="w-screen h-screen flex justify-center items-center">
                <div className="rounded-lg card-shadow p-6 flex flex-col">
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
                    <button type="submit" disabled={processing} className={`mt-4 py-2 px-4 bg-darkerBlue rounded-lg text-white ${processing && 'opacity-25'}`}>Login</button>
                </div>
            </form>
        </>
    )
}