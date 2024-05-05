"use client"
import { useState, ChangeEvent } from "react"
import Link from "next/link"
import { Trocchi } from "next/font/google";


export default function CreateTourdebar() {

    const [stopsTotal, setStopsTotal] = useState (0)
    const [route, setRoute] = useState <Route | null> (null);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStopsTotal(parseInt(event.target.value));
    };
    class Stop{
        name: String
        neighborhood: String
        street: String

        constructor(name: String, neighborhood: String, street: String){
            this.name = name
            this.neighborhood = neighborhood
            this.street = street
        }

    }
    class Route{
        stops: Stop[]
        stopsTotal: number

        constructor(stopsTotal: number){
            this.stopsTotal = stopsTotal
            this.stops = []
        }

        addStop(stop: Stop){
            this.stops.push(stop)
        }
    }

    const handleClick = () =>{
        let newRoute = new Route(stopsTotal)
        setRoute(newRoute);

        const stopsContainer = document.getElementById("stops-container");
        if (stopsContainer) {
            stopsContainer.style.display = "block";
        }

        const stopsTotalInput = document.getElementById("stops-total") as HTMLInputElement;
        if (stopsTotalInput) {
            stopsTotalInput.disabled = true;
        }
    }

    const addStop = () => {
        const nameInput = document.getElementById("name") as HTMLInputElement;
        const neighborhoodInput = document.getElementById("neighborhood") as HTMLInputElement;
        const streetInput = document.getElementById("street") as HTMLInputElement;

        const stop = new Stop(nameInput.value, neighborhoodInput.value, streetInput.value);
        route?.addStop(stop)
        console.log(route)
    }


    

    return(
        <div className="flex  flex-col items-center">
            <h1>Load createTourdebar</h1>
            <h1 className="underline">Create Route</h1>
            <div className="p-4 flex gap-4">
                <label htmlFor="stops-total">Stops: </label>
                <input
                    type="range"
                    id="stops-total"
                    min="0"
                    max="10"
                    value={stopsTotal}
                    onChange={handleChange}
                />
            </div>
            <div className="flex gap-4 items-center">
                <p>{stopsTotal} stops, are you sure?</p>
                <button onClick={handleClick} className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Yes, save</button>
            </div>

              {/* Display stopsTotal number of divs */}
              <div className="hidden w-2/3" id="stops-container">
                <form action="">
                {Array.from({ length: stopsTotal }, (_, index) => (
                        <div key={index} className="my-4 border border-2 text-center">
                    
                        <div className="flex flex-col gap-4 items-center p-2 mt-2 relative">
                            <input type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stop name</label>
                        </div>
                        <div className="flex flex-col gap-4 items-center p-2 relative">
                            <input type="text" id="neighborhood" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="neighborhood" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Viertel</label>
                        </div>
                        <div className="flex flex-col gap-4 items-center p-2 relative">
                            <input type="text" id="street" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="street" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
                        </div>
                        <button onClick={addStop} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Stop</button>
                    </div>

                ))}
                </form>
              </div>

             

            {/* <div className="flex flex-col items-center my-4">
                <p className="text-center">
                    Which bars and pubs are part of your TourDeBar?
                </p>
                <Link className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="/createRoute">
                    Create Route
                </Link>
            </div>
            <div className="flex flex-col items-center my-4">
                <p className="text-center">
                    What challenges are waiting for your attendees?
                </p>
                <Link className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="/createGames">
                    Choose Games
                </Link>
            </div>
            <div className="flex flex-col items-center my-4">
                <p className="text-center">
                    Who was choosen to fight for glory together?
                </p>
                <Link className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="/createTeams">
                    Create Teams
                </Link>
            </div> */}
        </div>
    )
}