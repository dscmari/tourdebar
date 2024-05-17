import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request:Request) {
    const {route} = await request.json()
    const teamlist_id = 69

    try {
        await sql`INSERT INTO tourdebars (routes_id, teamlist_id) VALUES (${route}, ${teamlist_id})`;
    }
    catch(error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ route }, { status: 200 });
}