import { QueryResult, QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    
    const {data} = await request.json()
    const {teams, id} = data
    console.log(data)
    console.log(id)
    console.log(teams)
    const teamIds: number[] = []

    try {
        for (const team of teams) {
            const {player_1, player_2, player_3} = team
            const insertedTeam: QueryResult<QueryResultRow> = await sql`INSERT INTO Teams (player_1, player_2, player_3) VALUES (${player_1}, ${player_2}, ${player_3}) RETURNING id;`;
            const teamId = insertedTeam.rows[0].id;
            teamIds.push(teamId)
        }
        
        const insertedTeamList: QueryResult<QueryResultRow> = await sql`INSERT INTO Team_lists
             (team1_id, team2_id, team3_id, team4_id, team5_id, team6_id, team7_id, team8_id, team9_id, team10_id)
             VALUES (${teamIds[0]}, ${teamIds[1]}, ${teamIds[2]}, ${teamIds[3]}, ${teamIds[4]}, ${teamIds[5]}, ${teamIds[6]}, ${teamIds[7]}, ${teamIds[8]}, ${teamIds[9]})
             RETURNING id`;
        const teamListId = insertedTeamList.rows[0].id
    
        await sql`UPDATE Tourdebars SET teamlist_id = (${teamListId}) WHERE id = ${id}`
    }
    catch(error) {
        console.log("add teams catch block")
        console.log(error)
    }

    return NextResponse.json({ teams }, { status: 200 });
}