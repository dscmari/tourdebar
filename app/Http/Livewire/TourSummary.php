<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Road;
use App\Models\Gamelist;
use App\Models\Game;
use Illuminate\Support\Facades\Auth;

class TourSummary extends Component
{
    public function render()
    {
        
        // Retrieve the latest road
        $userId = Auth::id();
        $latestRoad = Road::where('user_id', $userId)->latest()->first()->toArray();
        $latestRoadId = $latestRoad['id'];
        $stations = [];
        
        foreach ($latestRoad as $column => $value) {
            if (strpos($column, 'bar_') === 0 && $value !== null) {
                $stations[$column] = $value;
            }
        }


        //Retrieve lates gamelist
        $latestGamelist = Gamelist::where('user_id', $userId)->latest()->first()->toArray();
        $latestGamelistId = $latestGamelist['id'];
        $gameIds = [];

        foreach($latestGamelist as $column => $value){
            if(strpos($column, 'game_') === 0){
                $gameIds[$column] = $value;
            }
        }
        
        //Retrieve names of the refered gameIds
        $games = Game::whereIn('id', $gameIds)->pluck('name')->toArray();


        return view('livewire.tour-summary', compact('latestRoadId','stations','latestGamelistId','games'));
    }
}
