import { sql } from "@vercel/postgres";
import CreateRoute from "../components/CreateRoute"
import CreateUserlink from "../components/CreateUserlink"
import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import NavMenu from "../components/NavMenu";




export default async function CreateTourdebar() {

    const session = await getServerSession();
    const user = session?.user?.name
    if(!user){
        redirect('/');
    }
    
    const routeIdResult = await sql`SELECT * FROM Routes ORDER BY id DESC LIMIT 1`; // Select last entry
    const routeId: number = routeIdResult.rows[0]["id"]

    return(
        <>
            <NavMenu/>
            <h1 className="py-4 my-4 text-xl text-center font-bold">Compose your own TourDeBar</h1>
            <CreateRoute/>
            <br />
            <CreateUserlink routeId={routeId} />
        </>
    )
}