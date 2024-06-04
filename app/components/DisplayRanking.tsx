'use client'
import React, { useState } from 'react'
import DisplayGames from './DisplayGames'

type Team = {
    player_1: string,
    player_2: string,
    player_3: string,
    score: number
}

type Game = {
    id: number
    name: string
    description: string
}

type Props = {
    teamsProp: Team []
    gamesProp: Game []
}



export default function DisplayRanking({teamsProp, gamesProp}: Props) {

    const [games, setGames] = useState(gamesProp)


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
                {games.map((game, index) => {
                    return (
                        <div key={index} className='border border-2 bg-mint m-4 p-4'>
                            <p>Stimmabgabe</p>
                            <h1 className='text-center text-lg font-bold p-4'>{game.name}</h1>
                            <div className='flex flex-col items-center gap-4'>
                                {teams.map((team, index) => {
                                    return(
                                        <div key={index} className='flex gap-2'>
                                            <button className='standard-btn' onClick={() => increaseScore(index)}>
                                                <span className='p-4'>{team.player_1}</span>
                                                <span className='p-4'>{team.player_2}</span>
                                            </button>
                                        </div>
                                    )
                                })} 
                            </div>
             
                        </div>
                    )
                })}
                 
                
            </div>
          
        </div>
    )
}
