'use client'
import React from 'react'
import { useState} from "react"
import { useRouter } from 'next/navigation'

type Game = {
  id : number
  name: string
  description: string
}

type Props = {
  gameOptions: Game[]
}

export default function CreateGames ({gameOptions} : Props) {

  const router = useRouter()

  const [games, setGames] = useState <Game[]>([])

  const handleChange = (index: number) => {
      
      const game = gameOptions[index]
      const gameExists = games.some(existingGame => existingGame.id === game.id);

      if(gameExists) {
        console.log("game exists")
        const newGames = games.filter(element => element.id !== game.id ) //returns all elements for which condition is true
        setGames(newGames)
      }
      else {
        console.log("game NOT exists")
        setGames([...games, game])
      }
  }

  const saveGames = async () => {

    await fetch("/api/add-games", {
      method: "POST",
      body: JSON.stringify({games})
    })
    //?? refresh to update route id in parent component ?? hier refresh notwendig?
    router.refresh()
  }

  return (
    <div>
        <h1 className="p-4 text-xl font-bold text-center">Games</h1>
        <form action="">
          {gameOptions.map((input, index) => {
            return(
              <div key={index} className="m-4 flex flex-col gap-2 bg-slate-200 p-4 rounded">
                  <div className='flex flex-row-reverse items-center justify-end'>
                      <label htmlFor="game" className='font-bold'>{input.name}</label>
                      <input
                          className='mr-2'
                          name="game"
                          type="checkbox"
                          onChange={() => handleChange(index)}
                      />
                  </div>
                  <div className=''>
                    <p>{input.description}</p>
                  </div>
              </div>
            )
          })}
        </form>
        <button
            className="m-6 bg-white hover:bg-green-500 hover:text-white hover:border-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
            onClick={() => {saveGames()}}>
            Save Games
        </button>
    </div>
  )
}
