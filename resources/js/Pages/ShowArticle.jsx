import React from "react";
import Navbar from "../components/Navbar";
import OtherArticlesSection from "../components/OtherArticlesSection";

export default function ShowArticle({ article, otherArticles }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Navbar />
            <div className="flex lg:flex-row flex-col">
                <div className="mt-24 shadow-lg w-full rounded-xl mx-0 lg:mx-28 p-5 h-fit border">
                    <h1 className="text-5xl font-semibold text-center">{article.title}</h1>
                    <h1 className="text-sm font-light my-2">{formatDate(article.created_at)}
                        {article.created_at !== article.updated_at && (
                            <small className="text-xs font-light">&middot; edited</small>
                        )}
                    </h1>
                    <img src={`/storage/thumbnail/${article.thumbnail}`} className="w-fit h-80" />
                    <div className="mt-7 article" dangerouslySetInnerHTML={{ __html: article.body }}></div>
                </div>
                <OtherArticlesSection otherArticles={otherArticles} />
            </div>
        </>
    )
}