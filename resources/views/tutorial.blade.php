<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Create Tourdebar') }}
        </h2>
    </x-slot>

    <div>
        <h1>1. Regeln</h1>
        <p>content</p>
    </div>

    <div onclick="location.href='{{ url('/createRoute') }}';" class="rounded-lg cursor-pointer py-6 border-2 border-white-500">
        <span>Create a Route</span>
    </div>


</x-app-layout>


