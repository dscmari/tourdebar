import React from 'react'
import NavMenuUser from '../../../components/NavMenuUser'
import DisplayTeams from '../../../components/DisplayTeams'
import { sql } from '@vercel/postgres'

type paramsType = {
    params: {
      tourId: string
    }
}

type Team = {
  player_1: string,
  player_2: string,
  player_3: string
}

export default async function page({params} : paramsType) {

    const {tourId} = params
    const teams: Team[] = []

    try {
      console.log("try")
      const tourIdResult = await sql`SELECT * FROM Tourdebars WHERE id=${tourId}`
      const rowTour = tourIdResult.rows[0]

      const teamlistId = rowTour["teamlist_id"]
  

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

    console.log(teams)

    return (
        <div>
          <NavMenuUser tourId={tourId}/>
          <DisplayTeams teams={teams}/>
        </div>
    )
}
