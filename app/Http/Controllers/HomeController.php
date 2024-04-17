<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        $latestArticles = Article::latest()->take(3)->get();
        return Inertia::render('Home', [
            'latestArticles' => $latestArticles
        ]);
    }
}
