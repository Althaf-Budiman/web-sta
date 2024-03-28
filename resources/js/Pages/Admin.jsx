import React from "react";
import Navbar from "../components/Navbar";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import ArticlesList from "../components/ArticlesList";

export default function Admin({ articles }) {

    const { auth } = usePage().props

    function onLogoutSubmitEventHandler(e) {
        e.preventDefault()
        Inertia.post('/logout')
    }

    return (
        <>
            <Navbar />
            <div className="mt-28 flex flex-col items-center">
                <h1 className="font-semibold text-2xl">Welcome {auth.name}!</h1>
                <form onSubmit={onLogoutSubmitEventHandler}>
                    <button type="submit">Logout</button>
                </form>
                <div className="h-[1px] mt-3 w-16 bg-gray-200"></div>
            </div>
            <ArticlesList articles={articles} />
        </>
    )
}