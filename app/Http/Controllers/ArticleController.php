<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->get();
        return Inertia::render('Article', [
            'articles' => $articles
        ]);
    }

    public function show(Article $article)
    {
        return Inertia::render('ShowArticle', [
            'article' => $article
        ]);
    }

    public function create()
    {
        return Inertia::render('CreateArticle');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'thumbnail' => 'required|mimes:png,jpg,jpeg',
        ]);

        // upload image 
        $thumbnail = $request->file('thumbnail')->store('thumbnail');

        Article::create([
            'title' => $request->title,
            'body' => $request->body,
            'thumbnail' => $thumbnail
        ]);
        return redirect('/admin');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect()->route('admin')->with('success', 'data deleted');
    }

    public function edit(Article $article)
    {
        return Inertia::render('EditArticle', [
            'article' => $article
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        $article->update([
            'title' => $request->title,
            'body' => $request->body,
        ]);
        return redirect('/admin');
    }

    public function updateThumbnail(Request $request, Article $article)
    {
        $validated = $request->validate([
            'thumbnail' => 'required|mimes:png,jpg,jpeh'
        ]);

        $article->update($validated);
        return redirect('/admin');
    }
}
