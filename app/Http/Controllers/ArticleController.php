<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function article()
    {
        return Inertia::render('Article');
    }

    public function create()
    {
        return Inertia::render('CreateArticle');
    }
}
