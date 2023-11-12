<div>
    <h1>Tour summary livewire section</h1>
    
    <h1>Chosen road:</h1>
    @foreach ($stations as $station)
        <li>{{$station}}</li>
    @endforeach

    <h1>Chosen Games:</h1>
    @foreach ($games as $game)
        <li>{{$game}}</li> 
    @endforeach


    {{-- insert in tours  --}}
    <div>
        <form action="{{ route('tourSummary') }}" method="POST">
            @csrf
            <input type="hidden" name="latestRoadId" value="{{ $latestRoadId}}">
            <input type="hidden" name="latestGamelistId" value="{{ $latestGamelistId}}">
            <button type="submit">Bestätige Eingaben und erstelle Tour</button>
        </form>
    </div>
</div>
