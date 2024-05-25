import React from 'react'
import NavMenuUser from '../../components/NavMenuUser';
import { sql } from '@vercel/postgres';

type paramsType = {
    params: {
      tourId: string
    }
  }

export default async function page({params} : paramsType) {

    const {tourId} = params
    const tourIdResult = await sql`SELECT * FROM Tourdebars WHERE id=${tourId}`
    const rowTour = tourIdResult.rows[0]
    const tourEnd = rowTour["available_until"]
    const currentTime = new Date();
    const currentTimeMs = currentTime.getTime();
    const tourEndMs = tourEnd.getTime();
    const available = currentTimeMs > tourEndMs ? false : true

    if(available) {
        return (
          <div>
              <NavMenuUser tourId={tourId}/>
                  <p>Welcome to your Tour de Bar</p>
                  <p>Einleitungstext, Erklärung wie Menu funktioniert und was es alles gibt</p>
          </div>
        )
    }
    else {
        return (
            <div>
                <p>Tourdebar Events are only online for 48 hours after the event.</p>
            </div>
        )
    }

    
}
