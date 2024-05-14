import { sql } from "@vercel/postgres";
import CreateRoute from "../components/CreateRoute"
import CreateUserlink from "../components/CreateUserlink"



export default async function CreateTourdebar() {

    const routeIdResult = await sql`SELECT * FROM Routes ORDER BY id DESC LIMIT 1`; // Select last entry
    const routeId: number = routeIdResult.rows[0]["id"]

    return(
        <>
            <h1 className="py-4 my-4 text-xl text-center font-bold">Compose your own TourDeBar</h1>
            <CreateRoute/>
            <br />
            <CreateUserlink routeId={routeId} />
        </>
       
    )
}