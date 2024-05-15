import React from "react";
import { ArticleItem } from "./ArticlesList";

export default function OtherArticlesSection({ otherArticles }) {
    return (
        <>
            <div className="mt-14 md:me-28 me-0 flex justify-center items-center flex-col">
                <h2 className="font-semibold text-2xl pt-16 mb-10">Other Articles You Might Like:</h2>
                <OtherArticlesList otherArticles={otherArticles} />
            </div>
        </>
    )
}

function OtherArticlesList({ otherArticles }) {
    return (
        <div className="mt-6 flex gap-10 items-center flex-col">
            {otherArticles.map(article => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}