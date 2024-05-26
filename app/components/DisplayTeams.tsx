'use client'
import React from 'react'

type Team = {
    player_1: string,
    player_2: string,
    player_3: string
  }

type Props = {
    teams: Team[]
}

export default function DisplayTeams({teams}: Props) {

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1>Teams</h1>
                {teams.map((team, index) => {
                    return(
                        <ol key={index} className='w-1/2 flex flex-col bg-mint p-2 px-6 m-2 border-2 border-black rounded' >
                            <li className=''>{team.player_1}</li>
                            <li className=''>{team.player_2}</li>
                            <li className=''>{team.player_3}</li>
                        </ol>
                    )
                    })
                }
            </div>
        </div>
    )
    

}
