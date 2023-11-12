<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CreateRouteController;
use App\Http\Controllers\ChooseGamesController;
use App\Http\Controllers\SummaryController;
use App\Http\Controllers\GuestLandingPageController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tutorial', function () {
    return view('tutorial');
})->name('tutorial');

Route::get('/createRoute', function(){
    return view('createRoute');
});
Route::post('/saveRoute', [CreateRouteController::class, 'storeRoute'])->name('saveRoute');

Route::get('/chooseGames', [ChooseGamesController::class, 'displayGames'])->name('chooseGames');
Route::post('/saveGames', [ChooseGamesController::class, 'storeGames'])->name('saveGames');


Route::get('/tourSummary', function(){
    return view('tourSummary');
})->name('tourSummary');
Route::post('/tourSummary', [SummaryController::class, 'storeTour']);

Route::get('/guestLandingPage', [GuestLandingPageController::class, 'displayStations'] )->name('guestLandingPage');


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
