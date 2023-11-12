<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use App\Models\Tour;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\GuestLandingPageController;

class SummaryController extends Controller
{
    public function storeTour(Request $request) : RedirectResponse
    {
        $userId = Auth::id();
        $roadId = $request->input('latestRoadId');
        $gamelistId = $request->input('latestGamelistId');
        
        $tour=Tour::create([
                'user_id' => $userId,
                'road_id' => $roadId,
                'gamelist_id'=> $gamelistId
            ]);
      
            return redirect()->action([GuestLandingPageController::class, 'displayStations'])->with('tourId', $tour->id);
    }
}
