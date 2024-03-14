import React from "react";
import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "@inertiajs/inertia-react";

export default function CreateArticle() {

    const { data, setData, post, errors, reset } = useForm({
        title: '',
        body: '',
    })

    function onSubmitEventHandler(e) {
        e.preventDefault()
        post("/article", { onSuccess: () => reset() })
    }

    console.log(data.body)

    return (
        <>
            <Navbar />
            <form className="mt-24" onSubmit={onSubmitEventHandler}>
                <Editor
                    apiKey='5d3gmavobfl1gplfh7eithg9chuj3shiru72msgp1kescjzi'
                    init={{
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | table  | addcomment showcomments |  align lineheight | checklist numlist bullist indent outdent |  charmap | removeformat',
                        height: 520,
                    }}
                    value={data.body}
                    onEditorChange={(newValue, editor) => setData('body', newValue)}
                />
                
                <a className="hover:bg-gray-200 bg-white transition-all fixed right-3 bottom-5 rounded-full p-4 card-shadow">
                    Save
                </a>
            </form>
        </>
    )
}