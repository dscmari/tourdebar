<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\Gamelist;


class ChooseGamesController extends Controller
{
  function displayGames(){
    return view('chooseGames');
    
  }

  public function storeGames(Request $request)
    {
        $gameIDs = $request->input('gameIDs',[]);
        $userId = Auth::id();

        Gamelist::create([
          "user_id" => $userId,
          "game_id_0" => $gameIDs[0] ?? null,
          "game_id_1" => $gameIDs[1] ?? null,
          "game_id_2" => $gameIDs[2] ?? null,
          "game_id_3" => $gameIDs[3] ?? null,
          "game_id_4" => $gameIDs[4] ?? null,
          "game_id_5" => $gameIDs[5] ?? null,
          "game_id_6" => $gameIDs[6] ?? null,
          "game_id_7" => $gameIDs[7] ?? null,
          "game_id_8" => $gameIDs[8] ?? null,
          "game_id_9" => $gameIDs[9] ?? null
        ]);

        return redirect()->route('tourSummary');
    }
    
}
