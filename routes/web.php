<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthenticationController;
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

Route::controller(ArticleController::class)->group(function () {

    Route::get('/articles', 'index')->name('articles.index');
    Route::get('/articles/create', 'create')->name('articles.create')->middleware('auth');

    Route::get('/articles/{article}', 'show')->name('articles.show');
    Route::post('/articles', 'store')->name('articles.store')->middleware('auth');

    Route::delete('/articles/{article}', 'destroy')->middleware('auth');

    Route::get('/articles/{article}/edit', 'edit')->middleware('auth')->name('articles.edit');
    Route::patch('/articles/{articles}/edit', 'update')->middleware('auth')->name('articles.update');
});

Route::controller(AuthenticationController::class)->group(function () {
    Route::get('/login', 'loginView');
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->middleware('auth');
});

Route::get('/admin', [AdminController::class, 'adminView'])->middleware('auth');