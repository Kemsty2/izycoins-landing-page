<?php

use App\Http\Controllers\NewsLetterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/newsletters', [NewsLetterController::class, 'list'])->name('index');
Route::get('/newsletters/{id}', [NewsLetterController::class, 'fetch'])->name('fetch');
Route::post('/newsletters/{id}', [NewsLetterController::class, 'update'])->name('update');
