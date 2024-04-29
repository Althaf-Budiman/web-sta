import React from "react";
import { ArticleItem } from "./ArticlesList";

export default function LatestArticlesSection({ latestArticles }) {

    let articleExists = false
    if (latestArticles.length < 1) {
        articleExists = false
    } else {
        articleExists = true
    }

    return (
        <>
            <div className="mt-28 ms-20">
                <h2 data-aos="fade-down" className="font-bold text-4xl pt-16 mb-10" id="latestArticles">Latest Articles</h2>
                {articleExists ?
                    (
                        <LatestArticlesList latestArticles={latestArticles} />)
                    :(
                        <p className="text-gray-400 text-center">No Article Exist.</p>
                    )
                }
            </div>
        </>
    )
}

function LatestArticlesList({ latestArticles }) {
    return (
        <div data-aos="fade-up" className="mt-6 flex gap-10 flex-wrap">
            {latestArticles.map(article => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}