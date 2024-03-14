import React from "react";

export default function ArticlesList({ articles }) {
    return (
        <>
            <ArticlesListHeader />
            <ArticlesListContainer articles={articles} />
        </>
    )
}

function ArticlesListContainer({ articles }) {
    return (
        <div className="mt-6 flex mx-16 gap-10 justify-center flex-wrap">
            {articles.map(article => (
                <ArticleItem title={article.title} />
            ))}
        </div>
    )
}

function ArticleItem({ title }) {
    return (
        <a className="rounded-xl hover:bg-gray-300 transition border flex flex-col border-gray-300 p-4 w-72 h-60">
            <div className="w-full h-32 border border-black rounded-xl">
            </div>
            <h3 className="mt-4 font-semibold h-[48px]">{title}</h3>
            <p className="text-sm">4 Maret 2024</p>
        </a>
    )
}

function ArticlesListHeader() {
    return (
        <div className="mt-8 flex justify-between mx-16 flex-col md:flex-row">
            <h2 className="text-2xl font-semibold">All Articles</h2>
            <div className="flex gap-5 ">
                <img src="/icon/filter.svg" className="w-7" />
                <div className="relative">
                    <input type="text" placeholder="Search" className="px-4 py-2 bg-gray-300 rounded-full pr-10" />
                    <img src="/icon/search.svg" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
            </div>
        </div>
    )
}
