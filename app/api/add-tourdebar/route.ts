import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request:Request) {

    const {tourdata} = await request.json()
    const {routeId, gamelistId} = tourdata
    const teamlistId = null
    console.log(routeId)
    console.log()

    try {
        await sql`INSERT INTO Tourdebars (routes_id, teamlist_id, gamelist_id) VALUES (${routeId}, ${teamlistId},${gamelistId})`;
    }
    catch(error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ status: 200 });
}