<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function adminView()
    {
        $articles = Article::latest()->get();
        return Inertia::render('Admin', [
            'articles' => $articles
        ]);
    }
}
