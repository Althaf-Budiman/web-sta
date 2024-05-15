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
                <h1 className="font-semibold text-2xl">Welcome, {auth.name}!</h1>
                <div className="inline-flex items-center">
                    <a href="/articles/create">
                        <button className="mx-2 my-4 px-5 py-2.5 text-center inline-flex items-center font-medium rounded-lg text-sm border transition text-gray-900 border-gray-200 bg-white hover:shadow-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100">
                            <img src="/icon/create.svg" className="w-5 h-5 mr-2.5"/>
                            Create New Article
                        </button>
                    </a>
                    <form onSubmit={onLogoutSubmitEventHandler}>
                        <button className="mx-2 my-4 px-5 py-2.5 text-center inline-flex text-sm bg-red-600 rounded-lg shadow-inner justify-center items-center text-white font-medium transition focus:ring-4 focus:ring-red-200 hover:bg-red-700 hover:shadow-md" type="submit">
                            <img src="/icon/logout.svg" className="w-5 h-5 mr-2.5"/>
                            Logout
                        </button>
                    </form>
                </div>
                <div className="h-[1px] mt-3 w-16 bg-gray-200"></div>
            </div>
            <ArticlesList articles={articles} />
        </>
    )
}