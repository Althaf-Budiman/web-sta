import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "@inertiajs/inertia-react";

export default function EditArticle({ article }) {

    const { data, setData, patch, errors, reset, processing } = useForm({
        title: article.title,
        body: article.body,
    })

    const [isOpen, setIsOpen] = useState(false)

    function onSubmitEventHandler(e) {
        e.preventDefault()
        patch(`/articles/${article.id}/edit`, { onSuccess: () => reset() })
    }


    function openModalEventHandler() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <>
            <Navbar />
            <form className="mt-24" onSubmit={onSubmitEventHandler}>
                {
                    isOpen &&
                    <>
                        <div className="fixed inset-0 flex items-center justify-center z-40">
                            <div className="p-4 rounded-lg flex flex-col bg-white text-black z-50">
                                <h2 className="text-2xl font-semibold">Save Article</h2>
                                <label htmlFor="title" className="mt-5 text-sm">Title:</label>
                                <input type="text" id="title" className=" rounded-lg border py-2 px-3 " value={data.title} onChange={(e) => setData('title', e.target.value)} />
                                <button type="submit" disabled={processing} className={`mt-4 py-2 px-4 bg-darkerBlue rounded-lg text-white ${processing && 'opacity-25'}`}>Save Article</button>
                                {errors.title &&
                                    <p className="mt-2 text-sm text-red-700">{errors.title}</p>
                                }
                                {errors.body &&
                                    <p className="mt-2 text-sm text-red-700">{errors.body}</p>
                                }
                            </div>
                            <div onClick={openModalEventHandler} className="fixed inset-0 bg-black opacity-35"></div>
                        </div>
                    </>
                }
                <Editor
                    apiKey='5d3gmavobfl1gplfh7eithg9chuj3shiru72msgp1kescjzi'
                    init={{
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | table  | addcomment showcomments |  align lineheight | checklist numlist bullist indent outdent |  charmap | removeformat',
                        height: 520,
                    }}
                    value={data.body}
                    onEditorChange={(newValue, editor) => setData('body', newValue)}
                />

                <div onClick={openModalEventHandler} className="hover:bg-gray-200 hover:cursor-pointer bg-white transition-all fixed right-3 bottom-5 rounded-full p-4 card-shadow">
                    Save
                </div>
            </form>

        </>
    )
}