import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { usePage } from "@inertiajs/inertia-react";

dayjs.extend(relativeTime)

export default function ArticlesList({ articles }) {

    const [articlesState, setArticlesState] = useState(articles)
    const [search, setSearch] = useState('')

    let articlesData = articlesState.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
            <ArticlesListHeader search={search} setSearch={setSearch} />
            <ArticlesListContainer articles={articlesData} />
        </>
    )
}

function ArticlesListContainer({ articles }) {
    return (
        <div className="mt-6 flex mx-16 gap-10 justify-center flex-wrap">
            {articles.map(article => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

function ArticleItem({ article }) {
    const { url } = usePage()
    const inAdminPage = url === '/admin' ? true : false

    const [options, setOptions] = useState(false)

    const handleOptionsClick = (e) => {
        e.preventDefault();
        setOptions(!options);
    };

    return (
        <>
            <div className="relative">
                <div className="rounded-xl transition border flex flex-col border-gray-300 p-4 w-72 h-60">
                    <div className="w-full h-32 border border-black rounded-xl"></div>
                    <a href={`/article/${article.id}`}>
                        <h3 className="hover:underline mt-4 font-semibold h-[48px]">{article.title}</h3>
                    </a>
                    <div className="flex flex-row justify-between">
                        <p className="text-sm">{dayjs(article.created_at).fromNow()}</p>
                        {inAdminPage &&
                            <div onClick={handleOptionsClick} className="hover:bg-gray-100 hover:cursor-pointer transition rounded-full p-2 relative">
                                <img src="/icon/options.svg" className="w-1" />
                                {options &&
                                    <div id="options" className="absolute right-7 top-0  shadow-md">
                                        <ul>
                                            <li className="hover:bg-gray-200 bg-white px-4 py-3">Edit</li>
                                            <li className="hover:bg-gray-200 bg-white px-4 py-3">Delete</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}



function ArticlesListHeader({ search, setSearch }) {
    return (
        <div className="mt-8 flex justify-between mx-16 flex-col md:flex-row">
            <h2 className="text-2xl font-semibold">All Articles</h2>
            <div className="flex gap-5 ">
                <img src="/icon/filter.svg" className="w-7" />
                <div className="relative">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="px-4 py-2 bg-gray-300 rounded-full pr-10" />
                    <img src="/icon/search.svg" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
            </div>
        </div>
    )
}
