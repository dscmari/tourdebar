<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Road;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class CreateRouteController extends Controller
{
    /**
     * Handle the form submission and display the input values.
     */
    // public function displayRoute(Request $request): View
    // {
    //     $stations = $request->input('station', []); // Retrieve the value of 'stations' from the form

    //     return view('tourdebarGuestView', compact('stations'));
    // }

    public function storeRoute(Request $request): RedirectResponse
    {
        $stations = $request->input('station', []);
        $userId = Auth::id();

        Road::create([
            "user_id" => $userId,
            "bar_0" => $stations[0] ?? null,
            "bar_1" => $stations[1] ?? null,
            "bar_2" => $stations[2] ?? null,
            "bar_3" => $stations[3] ?? null,
            "bar_4" => $stations[4] ?? null,
            "bar_5" => $stations[5] ?? null,
            "bar_6" => $stations[6] ?? null,
            "bar_7" => $stations[7] ?? null
        ]);
        
        return redirect()->route('chooseGames');
        
    }

}