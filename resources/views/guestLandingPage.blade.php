
   

<x-guest-layout>
   
    <h1 class="text-center">Tourdebar</h1>
    <p>tourid: {{$tourId}}</p>
    {{-- road --}}
    <p>roadid: {{$roadId}}</p>
    <div>
        @foreach ($stations as $station)
        <li>{{$station}}</li>
        @endforeach
    </div>
       

    {{-- games --}}
    <p>gamelistid: {{$gamelistId}}</p>
    <div>
        @foreach ($games as $game)
        <li>{{$game}}</li> 
        @endforeach
    </div>

    {{-- tabelle --}}

</x-guest-layout>