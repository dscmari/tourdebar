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



export default function DisplayRanking({teams}: Props) {

    console.log(teams)
    for (const team of object) {
        
    }
    
    

    return (
        <div>
            <h1>Ranking loaded</h1>
            <div className='p-4'>
                <h1>Tabelle</h1>
                {teams.map((team,index) => {
                    return(
                        <div className='flex gap-2'>
                            <span>Team {index + 1}</span>
                            <span>{team.player_1}</span>
                            <span>{team.player_2}</span>
                            <span>{team.player_3}</span>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}
