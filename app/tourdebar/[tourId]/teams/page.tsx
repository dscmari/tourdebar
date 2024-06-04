import React from 'react'
import NavMenuUser from '../../../components/NavMenuUser'
import DisplayTeams from '../../../components/DisplayTeams'
import { sql } from '@vercel/postgres'
import { revalidateTag } from 'next/cache';

type paramsType = {
    params: {
      tourId: string
    }
}

type Team = {
  player_1: string
  player_2: string
  player_3: string
}

export default async function page({params} : paramsType) {

    const {tourId} = params
    //check availability (TODO: there needs to be a better dry way)
    console.log("revalidateTag called")
    revalidateTag('tourdebars'); //empty cache for tourdebars
    const tourIdResult = await sql`SELECT * FROM tourdebars WHERE id=${tourId}`
    const rowTour = tourIdResult.rows[0]
    const tourEnd = rowTour["available_until"]
    const currentTime = new Date();
    const currentTimeMs = currentTime.getTime();
    const tourEndMs = tourEnd.getTime();
    const available = currentTimeMs > tourEndMs ? false : true
    
    let teams: Team[] = []
    let id = true

    let teamlistId

    try {
      console.log("try in teams/page")
      
      const tourIdResult = await sql`SELECT * FROM Tourdebars WHERE id=${tourId}` //seems to use a cache as the original null value that was inserted while creating tourdebal table is fetched
      const rowTour = tourIdResult.rows[0]
      console.log(rowTour)
      teamlistId = rowTour["teamlist_id"]
      console.log("teamlistId:")
      console.log(teamlistId)
      console.log("try 2")
      const sqlTeamlist = await sql`SELECT  * from team_lists WHERE id=${teamlistId}`
      const rowTeamList = sqlTeamlist.rows[0]

      for (const [key, value] of Object.entries(rowTeamList)) {
        if(key !== 'id' && value){
          const teamId = parseInt(value)
          const sqlTeams = await sql`SELECT * FROM Teams WHERE id=${teamId}`;
          const teamsRow: Team = sqlTeams.rows[0] as Team
          teams.push(teamsRow)
        }
      }
    }
    catch(error){
        console.log("catch block ")
    }

    console.log("teams array: ")
    console.log(teams)

    return (
        <div>
          <NavMenuUser tourId={tourId}/>
          {teamlistId}
          {id && available ?
              <DisplayTeams teams={teams}/>
              :
              <h1 className='p-4 m-4'>Specified tour ID was not found in the dataset. It might be expired. Please try with a correct ID.</h1>
          }
          
        </div>
    )
}
