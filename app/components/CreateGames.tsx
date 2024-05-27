'use client'
import React from 'react'
import { ChangeEvent, useState} from "react"
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'


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


  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
      
     //vlt gibt es auch bessere, direktere methode

      const game = gameOptions[index]
      const exists = gameExists(game)

      if(!exists){
        setGames([...games, game])
      }
      //else löschen

      console.log(games)
  }


  const gameExists = (game: Game) => {
    return games.some(existingGame => checkEquality(existingGame, game));
  }

  const checkEquality= (obj1: Game, obj2: Game): boolean => {

      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) {
        return false; // different number of keys, not equal
      }

      for(let i=0; i<keys1.length; i++){
        if(keys1[i] !== keys2[i]){
          return false
        }
      }
      return true
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
                        onChange={event => handleChange(index, event)}
                    />
                </div>
                
                  <div className=''>
                    <p>{input.description}</p>
                  </div>
              </div>
            )
          })}
          
        </form>
    </div>
  )
}
