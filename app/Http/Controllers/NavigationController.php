<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NavigationController extends Controller
{
    public function home()
    {
        $latestArticles = Article::latest()->take(3)->get();
        return Inertia::render('Home', [
            'latestArticles' => $latestArticles
        ]);
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function supaconService() {
        return Inertia::render('SupaconService');
    }
}
