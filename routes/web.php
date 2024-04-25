<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\NavigationController;
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

Route::get('/', [NavigationController::class, 'home'])->name('home');

Route::get('/about', [NavigationController::class, 'about'])->name('about');

Route::get('/supacon', [NavigationController::class, 'supaconService'])->name('supacon');

Route::controller(ArticleController::class)->group(function () {

    Route::get('/articles', 'index')->name('articles.index');
    Route::get('/articles/create', 'create')->name('articles.create')->middleware('auth');

    Route::get('/articles/{article}', 'show')->name('articles.show');
    Route::post('/articles', 'store')->name('articles.store')->middleware('auth');

    Route::delete('/articles/{article}', 'destroy')->middleware('auth');

    Route::get('/articles/{article}/edit', 'edit')->middleware('auth')->name('articles.edit');
    Route::patch('/articles/{article}/edit', 'update')->middleware('auth')->name('articles.update');

    Route::patch('/articles/{article}/editThumbnail', 'updateThumbnail')->middleware('auth');
});

Route::controller(AuthenticationController::class)->group(function () {
    Route::get('/login', 'loginView');
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->middleware('auth');
});

Route::get('/admin', [AdminController::class, 'adminView'])->name('admin')->middleware('auth');
