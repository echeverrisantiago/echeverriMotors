<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\AdvisersController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UsersController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/* ****** ****** ****** USERS ****** ****** ****** */

Route::post('/users', [UsersController::class,'login']);
Route::get('/users/test', function(){
    return Hash::make('bloodinyoureyes3');
});
/* ****** ****** ****** PRODUCTS ****** ****** ****** */

Route::post('/product', [ProductsController::class,'store']);
Route::get('/products', [ProductsController::class,'index']);
Route::get('/product/{id}', [ProductsController::class,'getProduct']);
Route::get('/productInfo/{id}', [ProductsController::class,'getProductInfo']);
Route::post('/productsUpdate', [ProductsController::class,'update']);
Route::delete('/product/{id}', [ProductsController::class,'delete']);

/* ****** ****** ****** CAROUSEL ****** ****** ****** */

Route::post('/carouselItem', [CarouselController::class,'store']);
Route::get('/carousel', [CarouselController::class,'index']);
Route::get('/carouselItem/{id}', [CarouselController::class,'getItem']);
Route::post('/carouselItemUpdate', [CarouselController::class,'update']);
Route::delete('/carouselItem/{id}', [CarouselController::class,'delete']);

/* ****** ****** ****** ADVISERS ****** ****** ****** */

Route::post('/adviser', [AdvisersController::class,'store']);
Route::get('/advisers', [AdvisersController::class,'index']);
Route::get('/adviser/{id}', [AdvisersController::class,'getItem']);
Route::post('/advisersUpdate', [AdvisersController::class,'update']);
Route::delete('/adviser/{id}',  [AdvisersController::class,'delete']);