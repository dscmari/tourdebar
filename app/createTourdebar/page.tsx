import Link from "next/link"

export default function CreateTourdebar() {
    return(
        <div className="flex flex-col items-center">
            <h1>Load createTourdebar</h1>
            <div className="flex flex-col items-center my-4">
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
            </div>
        </div>
    )
}