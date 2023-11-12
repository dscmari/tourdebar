<?php

namespace App\Http\Livewire;

use Livewire\Component;

class GameSelection extends Component
{
    public $selectedGamesIDs = [];
    public $selectedGamesNames = [];

    public function toggleGame($gameId, $gameName)
    {
        if(in_array($gameId, $this->selectedGamesIDs)) {
            $this->selectedGamesIDs = array_diff($this->selectedGamesIDs, [$gameId]);
        } else{
            $this->selectedGamesIDs[] = $gameId;
        }

        if(in_array($gameName, $this->selectedGamesNames)){
            $this->selectedGamesNames = array_diff($this->selectedGamesNames, [$gameName]);
        } else{
            $this->selectedGamesNames[] = $gameName;
        }
        
    }

    public function render()
    {
        $games = \App\Models\Game::all();

        return view('livewire.game-selection', [
            'games' => $games,
        ]);
    }
}
