
import { sql } from '@vercel/postgres';

export default async function DBTest(){
    
    const pets = await sql`SELECT * FROM Pets;`;
    //console.log(pets)
    
    return(
        <>
            DBTest called
        </>
    )
}