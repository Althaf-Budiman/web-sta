import React from "react";
import { ArticleItem } from "./ArticlesList";

export default function OtherArticles({ otherArticles }) {
    return (
        <>
        <div className="m-28">
            <h2 className="font-bold text-2xl pt-16 mb-10">Other Articles You Might Like:</h2>
            <OtherArticlesList otherArticles={otherArticles}/>
        </div>
        </>
    )
}

function OtherArticlesList({ otherArticles }) {
    return (
        <div className="mt-6 flex gap-10 flex-wrap">
        {otherArticles.map(article => (
            <ArticleItem key={article.id} article={article} />
        ))}
        </div>
    )
}