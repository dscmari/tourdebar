<x-guest-layout>
    <div class="flex flex-col bg-black p-6">
        
        <h1 class="mt-20 mx-auto content-center text-white text-6xl font bold">tourdebar</h1>
        <div class="w-2/3 mt-20 mx-auto text-center text-white text-2xl bold ">
            <div onclick="location.href='{{ url('/login') }}';" class="rounded-lg cursor-pointer py-6 border-2 border-white-500">
                <span>LOGIN</span>
            </div>      
            <div onclick="location.href='{{ url('/register') }}';" class="rounded-lg cursor-pointer mt-8 p-6 border-2 border-white-500">
                <span>REGISTER</span>
            </div>
        </div> 
    </div>
</x-guest-layout>