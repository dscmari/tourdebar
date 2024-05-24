import React from 'react'
import DisplayRoute from "../../../components/DisplayRoute"
import {sql} from '@vercel/postgres';
import NavMenuUser from '../../../components/NavMenuUser';

type paramsType = {
    params: {
      tourId: string
    }
  }

type Stop = {
    id: number
    name: string
    neighborhood: string
}

export default async function page({params} : paramsType) {

    const {tourId} = params
    let route: Stop [] = []
    let id = true;
    let available = true;



    try{
        //Get tour
        const tourIdResult = await sql`SELECT * FROM Tourdebars WHERE id=${tourId}`
        const rowTour = tourIdResult.rows[0]
        //Get route
        const routeId = rowTour["routes_id"]
        //check if route id exists in tourdebar row
        if(routeId){
            const sqlRoute = await sql`SELECT  * from routes WHERE id=${routeId}`
            const rowRoute = sqlRoute.rows[0]

            for (const [key, value] of Object.entries(rowRoute)) {
            
                if(key === 'available_until') {
                    const currentTimestamp = new Date();
                    const currentTimestampMs = currentTimestamp.getTime();
                    const availableUntilTimestampMs = value.getTime();
                    currentTimestampMs > availableUntilTimestampMs ? available = false : available = true
                }
                
                if(key !== 'id' && key !== 'created_at' && key !== 'available_until' && value) {
                    const stopId = parseInt(value); // Assuming the ID is an integer
                    const stopData = await sql`SELECT * FROM Stops WHERE id=${stopId}`;
                    const stopRow: Stop = stopData.rows[0] as Stop
                    route.push(stopRow)  
                }
            }
        }
    }
    catch {
        console.log("catch block")
        id = false
    }

    return (
        <div>
            <NavMenuUser tourId={tourId}/>
            {id ? (
                available ? (
                    <DisplayRoute route={route} />
                ) : (
                    <h1 className='p-4 m-4'>Route not available</h1>
                )
            ) : (
                <h1 className='p-4 m-4'>Specified tour ID was not found in the dataset. Please try with a correct ID.</h1>
            )}
        </div>
    )
}