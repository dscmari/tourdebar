import React from 'react'
import NavMenuUser from '../../../components/NavMenuUser'
import DisplayRanking from '../../../components/DisplayRanking'
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

export default async function page({params}: paramsType) {

    const {tourId} = params
    const teams: Team [] = []

    try {
        const sqlTeamlistId = await sql`SElECT teamlist_id from Tourdebars WHERE id=${tourId}`
        const teamlistId = sqlTeamlistId.rows[0]['teamlist_id']
    
        const sqlTeamlist = await sql`SELECT * from team_lists WHERE id=${teamlistId}`
        const teamlist = sqlTeamlist.rows[0]
        // for (const [key, value] of Object.entries(rowRoute))
        for (const [key, value] of Object.entries(teamlist)) {
            if(key !== 'id' && value) {
                const sqlTeam = await sql`SELECT * from Teams where id=${value}`
                const team = sqlTeam.rows[0] as Team
                teams.push(team)
            }
        }
    }
    catch(error) {
        console.log("catch in ranking/page.tsx")
        console.log(error)
    }
   
    return (
        <div>
            <NavMenuUser tourId={tourId}/>
            <DisplayRanking teams={teams}/>
        </div>
    )
}
