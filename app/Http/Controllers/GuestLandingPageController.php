<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tour;
use App\Models\Road;
use App\Models\Gamelist;
use App\Models\Game;


class GuestLandingPageController extends Controller
{
    function displayStations(Request $request){

        //get passed tour id
        $tourId = $request->session()->get('tourId');
        $tour = Tour::findOrFail($tourId);

        //get road via tourId
        $roadId = $tour->road_id;
        $road = Road::where('id', $roadId)->first()->toArray();
        $stations = [];
        foreach ($road as $column => $value) {
            if (strpos($column, 'bar_') === 0 && $value !== null) {
                $stations[$column] = $value;
            }
        }

        //get gamelist via tourId
        $gamelistId = $tour->gamelist_id;
        $gamelist = Gamelist::where('id', $gamelistId)->first()->toArray();
        $gameIds = [];
        foreach($gamelist as $column => $value){
            if(strpos($column, 'game_') === 0){
                $gameIds[$column] = $value;
            }
        }
        //Retrieve names of the refered gameIds
        $games = Game::whereIn('id', $gameIds)->pluck('name')->toArray();


        return view('guestLandingPage', [
            'tourId' => $tourId,
            'gamelistId' => $gamelistId,
            'roadId' => $roadId,
            'stations' => $stations,
            'games' => $games
        ]);
    }
}
