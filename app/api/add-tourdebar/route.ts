import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request:Request) {
    const {routeId} = await request.json()
    const teamlist_id = 69
    console.log(routeId)
    try {
        await sql`INSERT INTO tourdebars (routes_id, teamlist_id) VALUES (${routeId}, ${teamlist_id})`;
    }
    catch(error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ routeId }, { status: 200 });
}