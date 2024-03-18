import React from "react";
import Navbar from "../components/Navbar";

export default function ShowArticle({ article }) {
    return (
        <>
            <Navbar />
            <div className="mt-24 shadow-lg rounded-xl mx-10 p-5">
                <h1 className="text-5xl font-bold">{article.title}</h1>
                <h1 className="text-3xl"></h1>
                <div className="mt-7 article" dangerouslySetInnerHTML={{ __html: article.body }}></div>
            </div>
        </>
    )
}