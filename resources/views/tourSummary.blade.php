<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Create Tourdebar') }}
        </h2>
    </x-slot>

    <h1>Overview</h1>
    {{-- display stations, games and rules --}}
    
    <div>
        <livewire:tour-summary />
    </div>
    
</x-app-layout>    