import React from 'react'
import NavMenuUser from '../../../components/NavMenuUser'
import DisplayGames from "../../../components/DisplayGames"
import { sql } from '@vercel/postgres'
import { cookies } from 'next/headers'

type paramsType = {
  params: {
    tourId: string
  }
}

type Game = {
  id: number
  name: string
  description: string
}

export default async function page({params}: paramsType) {

    const {tourId} = params

    //check availability (TODO: there needs to be a better dry way, vlt Ebene höher weil imprinzip nur für menu notwendig)
    const tourIdResult = await sql`SELECT * FROM Tourdebars WHERE id=${tourId}`
    const rowTour = tourIdResult.rows[0]
    console.log(rowTour)
    const tourEnd = rowTour["available_until"]
    const currentTime = new Date();
    const currentTimeMs = currentTime.getTime();
    const tourEndMs = tourEnd.getTime();
    const available = currentTimeMs > tourEndMs ? false : true

    const games: Game[] = [] 

    try {
        
        const gamelistId = rowTour["gamelist_id"]
        const sqlGamelist = await sql`SELECT  * from Gamelists WHERE id=${gamelistId}`
        const rowGamelist = sqlGamelist.rows[0]
    

        for (const [key, value] of Object.entries(rowGamelist)) {
       
            if(key !== 'id' && value) {
              const gameId = parseInt(value); // Assuming the ID is an integer
              const gameData = await sql`SELECT * FROM Games WHERE id=${gameId}`;
              const stopRow: Game = gameData.rows[0] as Game
         
              games.push(stopRow)  
            }
        }
 
    }
    catch {
        console.log("games/route.tsx catch block")
    }

    return (
        <div>
             <NavMenuUser tourId={tourId}/>
          {available ? 
              <DisplayGames games={games} />
              : 
              <h1 className='p-4 m-4'>Specified tour ID was not found in the dataset. It might be expired. Please try with a correct ID.</h1>

          }
         
          
        </div>
    )
}
