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

        $thumbnail = $request->file('thumbnail');
        $filename = time() . '.' . $thumbnail->getClientOriginalExtension();

        // Save File To The Storage
        $thumbnail->storeAs('thumbnail', $filename);

        Article::create([
            'title' => $request->title,
            'body' => $request->body,
            'thumbnail' => $filename // Save file name in thumbnail field
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
        $request->validate([
            'thumbnail' => 'required|image|mimes:png,jpg,jpeg|max:2048', // Validation
        ]);

        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');
            $filename = time() . '.' . $thumbnail->getClientOriginalExtension();

            // Save file to storage
            $thumbnail->storeAs('thumbnail', $filename);

            // Update path thumbnail in article model
            $article->thumbnail = $filename;
            $article->save();

            return redirect('/admin')->with('success', 'Thumbnail updated successfully');
        }

        return redirect('/admin')->with('error', 'Failed to update thumbnail');
    }
}
