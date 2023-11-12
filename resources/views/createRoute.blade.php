
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Create Tourdebar') }}
        </h2>
    </x-slot>

    <div x-data="{numberOfStations: 0 }">
        <h1>2. Create a route</h1>
        <p>Choose the amount of stations</p>
       
        {{-- dropdown menu to pick number of stations --}}
        <form>
            <select name="number" x-model="numberOfStations">
                <template x-for="i in 8">
                    <option x-text="i"></option>
                </template>
            </select>
        </form>
    
        {{-- show picked number --}}
        <template x-if="numberOfStations > 0">
            <p>You want to play with <span x-text="numberOfStations"></span> stations</p>
        </template>
    
        <form action="{{ route('saveRoute') }}" method="POST">
            @csrf
            <template x-for="j in parseInt(numberOfStations)">
                <input type="text" :name="'station[' + (j-1) + ']'" placeholder="Type your station">
            </template>
            <button type="submit">submit to database</button>
        </form>
    
    </div>
</x-app-layout>
