import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "@inertiajs/inertia-react";

export default function CreateArticle() {

    const { data, setData, post, errors, reset, processing } = useForm({
        title: '',
        body: '',
        thumbnail: ''
    })

    const [isOpen, setIsOpen] = useState(false)

    function onSubmitEventHandler(e) {
        e.preventDefault()
        post("/articles", { onSuccess: () => reset() })
    }


    function openModalEventHandler() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <>
            <Navbar />
            <form className="mt-24" onSubmit={onSubmitEventHandler} encType="multipart/form-data">
                {
                    isOpen &&
                    <>
                        <div className="fixed inset-0 flex items-center justify-center z-40">
                            <div className="p-4 rounded-lg flex flex-col bg-white text-black z-50 relative">
                                <div onClick={openModalEventHandler} className="hover:cursor-pointer absolute -top-2 -right-2 shadow-md p-2 bg-white  rounded-full">
                                    <img src="/icon/closeIcon.svg" className="w-4" />
                                </div>
                                <h2 className="text-2xl font-semibold">Create Article</h2>
                                <label htmlFor="title" className="mt-5 text-sm">Title:</label>
                                <input type="text" id="title" className=" rounded-lg border py-2 px-3 " value={data.title} onChange={(e) => setData('title', e.target.value)} />

                                <label htmlFor="thumbnail" className="mt-5 text-sm">Thumbnail:</label>
                                <input type="file" className="mt-2" id="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />

                                <button type="submit" disabled={processing} className={`mt-4 py-2 px-4 bg-darkerBlue rounded-lg text-white hover:bg-blue-500 hover:transition ${processing && 'opacity-25'}`}>Create Article</button>
                                {errors.title &&
                                    <p className="mt-2 text-sm text-red-700">{errors.title}</p>
                                }
                                {errors.body &&
                                    <p className="mt-2 text-sm text-red-700">{errors.body}</p>
                                }
                                {errors.thumbnail &&
                                    <p className="mt-2 text-sm text-red-700">{errors.thumbnail}</p>
                                }
                            </div>
                            <div onClick={openModalEventHandler} className="fixed inset-0 bg-black opacity-35"></div>
                        </div>
                    </>
                }
                <h1 className="text-5xl font-semibold text-center py-10 shadow-lg">Write new article here!</h1>
                <Editor
                    apiKey='5d3gmavobfl1gplfh7eithg9chuj3shiru72msgp1kescjzi'
                    init={{
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | table  | addcomment showcomments |  align lineheight | checklist numlist bullist indent outdent |  charmap | removeformat',
                        height: 520,
                    }}
                    value={data.body}
                    onEditorChange={(newValue, editor) => setData('body', newValue)}
                />

                <a onClick={openModalEventHandler} className="group hover:bg-gray-200 hover:cursor-pointer bg-white transition-all fixed right-3 bottom-5 rounded-full p-4 card-shadow">
                    <svg viewBox="0 0 18 18" fill="none" className="w-8 text-black transition-all group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 4V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H14L18 4ZM16 4.85L13.15 2H2V16H16V4.85ZM9 15C9.83333 15 10.5417 14.7083 11.125 14.125C11.7083 13.5417 12 12.8333 12 12C12 11.1667 11.7083 10.4583 11.125 9.875C10.5417 9.29167 9.83333 9 9 9C8.16667 9 7.45833 9.29167 6.875 9.875C6.29167 10.4583 6 11.1667 6 12C6 12.8333 6.29167 13.5417 6.875 14.125C7.45833 14.7083 8.16667 15 9 15ZM3 7H12V3H3V7ZM2 4.85V16V2V4.85Z" fill="currentColor" />
                    </svg>
                </a>


            </form>

        </>
    )
}