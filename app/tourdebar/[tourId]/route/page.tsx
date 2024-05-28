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
    //check availability (TODO: there needs to be a better dry way)
    const tourIdResult = await sql`SELECT * FROM Tourdebars WHERE id=${tourId}`
    const rowTour = tourIdResult.rows[0]
    const tourEnd = rowTour["available_until"]
    const currentTime = new Date();
    const currentTimeMs = currentTime.getTime();
    const tourEndMs = tourEnd.getTime();
    const available = currentTimeMs > tourEndMs ? false : true

    let route: Stop [] = []
    let id = true;

    try{
        //Get route
        const routeId = rowTour["routes_id"]
        //check if route id exists in tourdebar row
        if(routeId){
            const sqlRoute = await sql`SELECT  * from routes WHERE id=${routeId}`
            const rowRoute = sqlRoute.rows[0]

            for (const [key, value] of Object.entries(rowRoute)) {
    
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
            {id && available ?
                <DisplayRoute route={route} />
            :
                <h1 className='p-4 m-4'>Specified tour ID was not found in the dataset. It might be expired. Please try with a correct ID.</h1>
            }
        </div>
    )
}