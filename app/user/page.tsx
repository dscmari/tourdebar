import React from 'react'
import DisplayRoute from "../components/DisplayRoute"
import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';


export default async function User() {

    type Stop = {
        id: number
        name: string
        neighborhood: string
    }

    const temp: string [] = []

    let route: Stop [] = []

    try {
        const sqlRoute = await sql`SELECT  * from Routes WHERE id=4`
       
        const row = sqlRoute.rows[0]
        console.log("helloooooooooooooooooooooooooooo")
        for (const [key, value] of Object.entries(row)) {
            if(key != 'id' && value){
                const stopId = parseInt(value); // Assuming the ID is an integer
                const stopData = await sql`SELECT * FROM Stops WHERE id=${stopId}`;
                const stopRow: Stop = stopData.rows[0] as Stop
                route.push(stopRow)
            }
        }
        console.log(route)
    }
    catch {
        console.log("error (catch block)")
    }

    return (
        <div>
            <div className='text-xl p-4 m-4 font-bold text-center'>TourDeBar</div>
            <DisplayRoute route={route}  />
        </div>
    
    )
}
