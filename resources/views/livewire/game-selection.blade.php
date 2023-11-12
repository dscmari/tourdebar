
<div>
    <h1>3. Games</h1>
    <p>content</p>

    @foreach ($games as $game)
        <div class="p-6 border-2">
            <input type="checkbox" wire:click="toggleGame({{ $game->id }}, '{{$game->name}}')">
            <p>Game Name: {{ $game->name }}</p>
            <p>Game Description: {{ $game->description }}</p> 
        </div>
    @endforeach

    <div>
        <h2>Selected Games:</h2>
            @foreach ($selectedGamesNames as $element)
            <p>{{$element}}</p>
            @endforeach
    </div>

    {{-- form to send gameIds to  --}}
    <div>
        <form action="{{ route('saveGames') }}" method="POST">
            @csrf
            @foreach ($selectedGamesIDs as $gameID)
                <input type="hidden" name="gameIDs[]" value="{{ $gameID }}">
            @endforeach
        
            <button type="submit">Save Selected Games</button>
        </form>
    </div>
</div>
