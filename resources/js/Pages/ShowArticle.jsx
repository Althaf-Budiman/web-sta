import React from "react";
import Navbar from "../components/Navbar";
import OtherArticlesSection from "../components/OtherArticlesSection";

export default function ShowArticle({ article, otherArticles }) {
    return (
        <>
            <Navbar />
            {/* <div>hello</div> */}
            <div className="mt-24 shadow-lg rounded-xl mx-28 p-5 border max-lg:mx-16">
                {/* <a onClick={history.back()}><img src="/icon/arrow_back.svg" className="w-fit h-fit bg-white shadow-md -translate-x-28 p-3 rounded-full" /></a> */}
                <h1 className="text-5xl font-bold text-center">{article.title}</h1>
                <h1 className="text-base font-bold my-2">{article.updated_at}</h1>
                <img src={`./storage/thumbnail/${article.thumbnail}`} className="w-fit h-fit flex" />
                <h1 className="text-3xl"></h1>
                <div className="mt-7 article" dangerouslySetInnerHTML={{ __html: article.body }}></div>
            </div>
            {/* <OtherArticlesSection otherArticles={otherArticles}/> */}
        </>
    )
}