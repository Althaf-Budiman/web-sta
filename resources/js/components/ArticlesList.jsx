import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { Link, useForm, usePage } from "@inertiajs/inertia-react";

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

export function ArticleItem({ article }) {

    const { data, setData, post, errors } = useForm({
        thumbnail: article.thumbnail,
        _method: 'patch'
    })

    const { url } = usePage();
    const inAdminPage = url.includes('/admin');

    const [options, setOptions] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    const [isModalEditThumbnailOpen, setIsModalEditThumbnailOpen] = useState(false)

    const [isDeleteInProgress, setIsDeleteInProgress] = useState(false)
    const [isThumbnailEditInProgress, setIsThumbnailEditInProgress] = useState(false)

    const handleOptionsClick = (e) => {
        e.preventDefault();
        setOptions(!options);
    };

    function onSubmitThumbnailChangeHandler(e) {
        e.preventDefault()
        setIsThumbnailEditInProgress(true)
        post(`/articles/${article.id}/editThumbnail`, { onSuccess: () => window.location.reload(), onError: () => setIsThumbnailEditInProgress(false) })
    }

    return (
        <>
            {
                isModalDeleteOpen &&
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-40">
                        <div className="p-4 rounded-lg flex flex-col bg-white text-black z-50">
                            <h2 className="text-2xl font-semibold">Delete "{article.title}"?</h2>
                            <p className="mt-4">Are you sure to delete this article forever?</p>
                            <div className="justify-end flex gap-3 mt-6">
                                <button onClick={() => setIsModalDeleteOpen(!isModalDeleteOpen)} className="px-4 py-2 text-white rounded-lg bg-darkerBlue">Close</button>
                                <Link
                                    as="button"
                                    method="delete"
                                    preserveState
                                    href={`/articles/${article.id}`}
                                    onClick={() => setIsDeleteInProgress(true)}
                                    onSuccess={() => { window.location.reload(); }}
                                    disabled={isDeleteInProgress}
                                    className={`px-4 py-2 text-white rounded-lg bg-red-600 ${isDeleteInProgress && 'opacity-25'}`}>Delete</Link>
                            </div>
                        </div>
                        <div onClick={() => setIsModalDeleteOpen(!isModalDeleteOpen)} className="fixed inset-0 bg-black opacity-35"></div>
                    </div>
                </>
            }

            {
                isModalEditThumbnailOpen &&
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-40">
                        <div className="p-4 rounded-lg flex flex-col bg-white text-black z-50 relative">
                            <div onClick={() => { setIsModalEditThumbnailOpen(!isModalEditThumbnailOpen); setOptions(false) }} className="hover:cursor-pointer absolute -top-2 -right-2 shadow-md p-2 bg-white  rounded-full">
                                <img src="/icon/closeIcon.svg" className="w-4" />
                            </div>

                            <h2 className="text-2xl font-semibold">Edit Thumbnail "{article.title}"</h2>
                            <img src={`./storage/thumbnail/${article.thumbnail}`} className="w-full my-5 h-52 border border-black rounded-xl"></img>

                            <form onSubmit={onSubmitThumbnailChangeHandler} encType="multipart/form-data">
                                <label htmlFor="thumbnail" className="mt-5 text-sm">Thumbnail:</label> <br />
                                <input type="file" className="mt-2" id="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />

                                {errors.thumbnail &&
                                    <p className="mt-2 text-sm text-red-700">{errors.thumbnail}</p>
                                }

                                <div className="justify-end flex gap-3 mt-6">
                                    <button type="submit" disabled={isThumbnailEditInProgress} className={`mt-4 w-full py-2 px-4 bg-darkerBlue rounded-lg text-white ${isThumbnailEditInProgress && 'opacity-25'}`}>Save</button>
                                </div>
                            </form>
                        </div>
                        <div onClick={() => setIsModalDeleteOpen(!isModalEditThumbnailOpen)} className="fixed inset-0 bg-black opacity-35"></div>
                    </div>
                </>
            }
            <div className="relative">
                <div className="rounded-xl transition border flex flex-col border-gray-300 p-4 w-72 h-60">
                    <a href={`/articles/${article.id}`}>
                        <img src={`./storage/thumbnail/${article.thumbnail}`} className="w-full h-32 border border-black rounded-xl"></img>
                    </a>
                    <a href={`/articles/${article.id}`}>
                        <h3 className="hover:underline mt-4 font-semibold h-[48px]">{article.title}</h3>
                    </a>
                    <div className="flex flex-row justify-between">
                        <p className="text-sm">{dayjs(article.created_at).fromNow()}</p>
                        {inAdminPage &&
                            <>
                                <div onClick={handleOptionsClick} className="hover:bg-gray-100 hover:cursor-pointer transition rounded-full p-2 relative">
                                    <img src="/icon/options.svg" className="w-1" />
                                </div>
                                {options &&
                                    <div id="options" className="absolute right-10 bottom-0  shadow-md">
                                        <ul className="flex flex-col">
                                            <button onClick={() => setIsModalDeleteOpen(!isModalDeleteOpen)} className="hover:bg-gray-200 bg-white px-4 py-3 text-start" >Delete Article</button>
                                            <a href={`/articles/${article.id}/edit`} className="hover:bg-gray-200 bg-white px-4 py-3">Edit Article</a>
                                            <button onClick={() => setIsModalEditThumbnailOpen(!isModalEditThumbnailOpen)} className="hover:bg-gray-200 bg-white px-4 py-3" >Edit Thumbnail</button>
                                        </ul>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

function ArticlesListContainer({ articles }) {
    const [articleList, setArticleList] = useState(articles);

    useEffect(() => {
        setArticleList(articles);
    }, [articles]);

    return (
        <div className="mt-6 flex mx-16 gap-10 justify-center flex-wrap">
            {articleList.map(article => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    );
}

function ArticlesListHeader({ search, setSearch }) {
    return (
        <div className="mt-8 flex justify-between mx-16 flex-col md:flex-row">
            <h2 className="text-2xl font-semibold">All Articles</h2>
            <div className="flex gap-5 ">
                <div className="relative">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="px-4 py-2 bg-gray-300 rounded-full pr-10" />
                    <img src="/icon/search.svg" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
            </div>
        </div>
    )
}