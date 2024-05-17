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

export default async function page({params} : paramsType) {

  const {routeId} = params
  let route: Stop [] = []
  let id = true;
  let available = true;

  const currentTimestamp = new Date();


  
  try {
    const sqlRoute = await sql`SELECT  * from routes WHERE id=${routeId}`
    const row = sqlRoute.rows[0]
    
    for (const [key, value] of Object.entries(row)) {
        if(key === 'available_until'){
            const currentTimestamp = new Date();
            const currentTimestampMs = currentTimestamp.getTime();
            const availableUntilTimestampMs = value.getTime();
            if(currentTimestampMs > availableUntilTimestampMs){
              available = false
            }
        }
        if(key !== 'id' && key !== 'created_at' && key !== 'available_until' && value){
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
    {id ? (
        available ? (
            <DisplayRoute route={route} />
        ) : (
            <h1 className='p-4 m-4'>Route not available</h1>
        )
    ) : (
        <h1 className='p-4 m-4'>Specified route ID was not found in the dataset. Please try with a correct ID.</h1>
    )}
</div>

  )
}
