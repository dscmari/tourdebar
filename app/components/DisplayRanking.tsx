'use client'
import React, { useState } from 'react'
import DisplayGames from './DisplayGames'

type Team = {
    player_1: string,
    player_2: string,
    player_3: string,
    score: number
}

type Props = {
    teamsProp: Team[]
}



export default function DisplayRanking({teamsProp}: Props) {

    const [teams, setTeams] = useState(teamsProp)
    const sortedTeams = teams.sort((a,b) => b.score - a.score)

    const increaseScore = (index:number) => {
        console.log("increaseScore called")
        setTeams(prevTeams =>
            prevTeams.map((team, i) =>
                i === index ? { ...team, score: team.score + 1 } : team
            )
        );
    }
  
    return (
        <div>
            <h1>Ranking loaded</h1>
            <div className='p-4'>
                <h1>Tabelle</h1>
                {sortedTeams.map((team,index) => {
                    return(
                        <div className='flex gap-2' key={index}>
                            <span>Team {index + 1}</span>
                            <span>{team.player_1}</span>
                            <span>{team.player_2}</span>
                            <span>{team.player_3}</span>
                            <span>{team.score}</span>
                            <button className='standard-btn' onClick={() => increaseScore(index)}>+1 score</button>
                        </div>
                    )
                } )}
            </div>
            <div>
                <h1>Abstimmung</h1>
                
            </div>
          
        </div>
    )
}
