import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const {games} = await request.json()
    // Ensure the gamesPadded array has exactly 8 elements
    const gamesPadded = Array(8).fill(null).map((_,index) => (index < games.length ? games[index].id : null)); //_ is current element

    try {
        console.log("try")
        await sql`INSERT INTO gamelists
             (game1_id, game2_id, game3_id, game4_id, game5_id, game6_id, game7_id, game8_id)
             VALUES (${gamesPadded[0]}, ${gamesPadded[1]}, ${gamesPadded[2]}, ${gamesPadded[3]}, ${gamesPadded[4]}, ${gamesPadded[5]}, ${gamesPadded[6]}, ${gamesPadded[7]})`
    }
    catch (error) {
        console.log("catch block in add-gamedsPadded.ts")
    }

    return NextResponse.json({status: 200})
}