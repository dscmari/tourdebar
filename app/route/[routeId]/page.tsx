import React from 'react'
import DisplayRoute from "../../components/DisplayRoute"
import {sql } from '@vercel/postgres';

type Stop = {
  id: number
  name: string
  neighborhood: string
}

type paramsType = {
  params: {
    routeId: string
  }
}

export default async function ({params} : paramsType) {

  const {routeId} = params
  let route: Stop [] = []
  let id = true;

  try {
    const sqlRoute = await sql`SELECT  * from Routes WHERE id=${routeId}`
    console.log(routeId)
   
    const row = sqlRoute.rows[0]
    for (const [key, value] of Object.entries(row)) {
        if(key != 'id' && value){
            const stopId = parseInt(value); // Assuming the ID is an integer
            const stopData = await sql`SELECT * FROM Stops WHERE id=${stopId}`;
            const stopRow: Stop = stopData.rows[0] as Stop
            route.push(stopRow)
        }
    }
}
catch {
    console.log("error (catch block)")
    id = false
}

  return (
    <div>
        {id ?
         <DisplayRoute route={route}  />
         :
         <h1 className='p-4 m-4 '>Angegebene Route ID wurde nicht in Datensatz gefunden. Versuche es mit einer korrekten ID</h1>
        }
  
        
    </div>
  )
}
