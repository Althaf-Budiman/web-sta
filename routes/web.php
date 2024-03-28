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

    Route::get('/article', 'index')->name('articles.index');
    Route::get('/article/create', 'create')->name('articles.create')->middleware('auth');

    Route::get('/article/{article}', 'show')->name('articles.show');
    Route::post('/article', 'store')->name('articles.store')->middleware('auth');

    Route::delete('/article/{article}', 'destroy')->middleware('auth');
});

Route::controller(AuthenticationController::class)->group(function () {
    Route::get('/login', 'loginView');
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->middleware('auth');
});

Route::get('/admin', [AdminController::class, 'adminView'])->middleware('auth');