import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  
  const {inputFields} = await request.json()
  const stopIds: number[] = []
  
    try {
        for (const stop of inputFields) {
    
          const { name, neighborhood } = stop;
          const insertedStop: QueryResult<QueryResultRow> = await sql`INSERT INTO Stops (Name, Neighborhood) VALUES (${name}, ${neighborhood})  RETURNING id;`;
          const stopId = insertedStop.rows[0].id;
          stopIds.push(stopId)

        }
         const filledStopIds = Array.from({ length: 10 }, (_, i) => stopIds[i] ?? null);
         await sql`INSERT INTO Routes
             (stop1_id, stop2_id, stop3_id, stop4_id, stop5_id, stop6_id, stop7_id, stop8_id, stop9_id, stop10_id)
             VALUES (${filledStopIds[0]}, ${filledStopIds[1]}, ${filledStopIds[2]}, ${filledStopIds[3]}, ${filledStopIds[4]}, ${filledStopIds[5]}, ${filledStopIds[6]}, ${filledStopIds[7]}, ${filledStopIds[8]}, ${filledStopIds[9]})`

      } catch(error) {
        return NextResponse.json({ error }, { status: 500 });
      }
    
    const stops = await sql`SELECT * FROM Stops;`;
    
    return NextResponse.json({ stops }, { status: 200 });
}