"use client"
import React from "react";
import { useState} from "react"
import { useRouter } from 'next/navigation'


type Team = {
    player_1: string;
    player_2: string;
    player_3: string;
}

type Data = {
    teams: Team[];
    id: string;
}

export default function CreateTeams() {

    const router = useRouter()
    const [tourdebarId, setTourdebarId] = useState<string>('')
    const [teams, setTeams] = useState<Team[]>([
        {
            player_1: "",
            player_2: "",
            player_3: ""
        }
    ])
    const [data, setData] = useState<Data>({
        teams: [],
        id: ""
    })

    const handleTourdebarId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setTourdebarId(newValue)
    }

    const handleTeamsInput = (index: number,event: React.ChangeEvent<HTMLInputElement>) => {
        let data = [...teams]
        data[index][event.target.name as keyof typeof teams[0]] = event.target.value; // Type assertion
        setTeams(data)
        setData({
            teams: teams,
            id: tourdebarId
        })
    }

    const addTeam = () => {
        let newTeam = { player_1: '', player_2: '', player_3: '' }
        setTeams([...teams, newTeam])
    }

    const addTeams = async () => {
  
        await fetch("/api/add-teams", {
            method: "POST",
            body: JSON.stringify({data})
        })
        //refresh to update route id in parent component 
        router.refresh()
    }


    return (
        <div className="flex flex-col items-center">

            <h1 className="text-2xl font-bold">Add Teams to Tourdebar</h1>
            <div className="text-center">
                <label>Choose Tourdebar</label>
                <input
                    name='tourId'
                    placeholder='Id'
                    className="m-2 p-2 border border-2 rounded-lg w-1/5"
                    value={tourdebarId}
                    required
                    onChange={handleTourdebarId}
                />
            </div>
            <h1>Tourdebar ID: {tourdebarId}</h1>


            <form>
            {teams.map((input, index) => {
                return(
                    <div key={index} className="m-4 flex flex-col items-center gap-2 border-solid border-2 ">
                        <p className="pl-2 pt-2">Team {index + 1}</p>
                        <input
                            name='player_1'
                            placeholder='player_1'
                            value={input.player_1}
                            onChange={event => handleTeamsInput(index, event)}
                            className="m-2 p-2 border border-2 rounded-lg"
                        />
                        <input
                            name='player_2'
                            placeholder='player_2'
                            value={input.player_2}
                            onChange={event => handleTeamsInput(index, event)}
                            className="m-2 p-2 border border-2 rounded-lg"
                        />
                        <input
                            name='player_3'
                            placeholder='Optional Player 3'
                            value={input.player_3}
                            onChange={event => handleTeamsInput(index, event)}
                            className="m-2 p-2 border border-2 rounded-lg"
                        />
                    </div>
                )
            })}
            </form>
            <button
                className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                onClick={addTeam}>
                    Add Team
            </button>

            <h1 className="underline text-xl">Current Teams</h1>
            {teams.map((input, index) => {
            return(
                <div key={index} className="w-2/3 flex flex-col gap-2 bg-mint p-4 m-2 border-2 border-black rounded">
                    <p>Team {index + 1}:</p>
                    <p className="text-2xl text-center">{input.player_1}</p>
                    <p className="text-2xl text-center">{input.player_2}</p>
                    <p className="text-2xl text-center">{input.player_3}</p>
                </div>
            )
            })}

            {tourdebarId === '' ?
                <button className="hover:cursor-not-allowed m-6 bg-white text-red-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Choose TourdId 
                </button>
                : 
                <button
                    className="m-6 bg-white hover:bg-green-500 hover:text-white hover:border-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                    onClick={() => {addTeams()}}>
                    Save Teams
                </button>
            }
        </div>
    )
}
