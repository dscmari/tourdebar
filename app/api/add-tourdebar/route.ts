import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request:Request) {

    console.log("post from add tourdebar")
    const {routeId} = await request.json()
    const teamlist_id = 69

    try {
        await sql`INSERT INTO Tourdebars (routes_id, teamlist_id) VALUES (${routeId}, ${teamlist_id})`;
    }
    catch(error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ status: 200 });
}