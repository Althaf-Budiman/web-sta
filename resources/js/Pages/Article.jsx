import React from "react";
import Navbar from "../components/Navbar";
import HeaderSectionArticlePage from "../components/HeaderSectionArticlePage";
import ArticlesList from "../components/ArticlesList";

export default function Article({ articles }) {
    return (
        <>
            <Navbar />
            <HeaderSectionArticlePage />
            <ArticlesList articles={articles} />
        </>
    )
}