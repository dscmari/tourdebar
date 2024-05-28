import React from 'react'

type Game = {
    id: number
    name: string
    description: string
}

type Props = {
    games: Game[]
}

export default function DisplayGames({games}: Props) {


    return (
        <div className='flex flex-col items-center'>
            <h1 className='p-4 text-xl underline'>Games</h1>
            {games.map((game, index) => {
                return (
                    <div key={index} className='flex flex-col bg-mint p-4 m-4 mx-6 border-2 border-black rounded'>
                        <p className='text-xl font-bold'>{game.name}</p>
                        <p>{game.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
