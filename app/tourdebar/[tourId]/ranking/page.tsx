import React from 'react'
import NavMenuUser from '../../../components/NavMenuUser'
import DisplayRanking from '../../../components/DisplayRanking'
import { sql } from '@vercel/postgres'
import { revalidateTag } from 'next/cache'

type paramsType = {
    params: {
      tourId: string
    }
}

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


export default async function page({params}: paramsType) {

    const {tourId} = params
    const teams: Team [] = []
    const games: Game [] = []
    

    try {
        revalidateTag('tourdebars'); //empty cache for tourdebars
        //teams
        const sqlTeamlistId = await sql`SElECT teamlist_id FROM tourdebars WHERE id=${tourId}`
        const teamlistId = sqlTeamlistId.rows[0]['teamlist_id']
    
        const sqlTeamlist = await sql`SELECT * FROM team_lists WHERE id=${teamlistId}`
        const teamlist = sqlTeamlist.rows[0]
       
        //games
        const sqlGamelistId = await sql`SELECT gamelist_id FROM tourdebars WHERE id=${tourId}`
        const gamelistId = sqlGamelistId.rows[0]["gamelist_id"]

        const sqlGamelist = await sql`SELECT * FROM gamelists WHERE id=${gamelistId}`
        const gamelist = sqlGamelist.rows[0]
      
        for (const [key, value] of Object.entries(teamlist)) {
            if(key !== 'id' && value) {
                const sqlTeam = await sql`SELECT * FROM Teams WHERE id=${value}`
                const teamNoScore = sqlTeam.rows[0] as Team
                const team = {...teamNoScore, "score": 0 }
                teams.push(team)
            }
        }

        for (const [key, value] of Object.entries(gamelist)) {
            if(key !== 'id' && value) {
                const sqlGame = await sql`SELECT * FROM games WHERE id=${value}`
                const game = sqlGame.rows[0] as Game
                games.push(game)
            }
        }

        console.log("try in ranking/page.tsx")
    
    }
    catch(error) {
        console.log("catch in ranking/page.tsx")
        console.log(error)
    }
   
    return (
        <div>
            <NavMenuUser tourId={tourId}/>
            <DisplayRanking teamsProp={teams} gamesProp={games}/>
        </div>
    )
}
