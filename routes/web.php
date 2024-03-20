<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/article', [ArticleController::class, 'index'])->name('articles.index');

Route::get('/article/create', [ArticleController::class, 'create'])->name('articles.create');

Route::post('/article', [ArticleController::class, 'store'])->name('articles.store');

Route::get('/article/{article}', [ArticleController::class, 'show'])->name('articles.show');
