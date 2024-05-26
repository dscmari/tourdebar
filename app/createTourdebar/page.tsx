import { sql } from "@vercel/postgres";
import CreateRoute from "../components/CreateRoute"
import CreateUserlink from "../components/CreateUserlink"
import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import NavMenu from "../components/NavMenu";
import SaveTourdebarButton from "../components/buttons/SaveTourdebar";
import CreateTeams from "../components/CreateTeams";




export default async function CreateTourdebar() {

    const session = await getServerSession();
    const user = session?.user?.name
    if(!user){
        redirect('/');
    }
    
    const tourIdResult = await sql`SELECT * FROM Tourdebars ORDER BY id DESC LIMIT 1`
    const tourId : number = tourIdResult.rows[0]["id"]

    const routeIdResult = await sql`SELECT * FROM Routes ORDER BY id DESC LIMIT 1`; // Select last entry
    const routeId: number = routeIdResult.rows[0]["id"]

    console.log(tourId)
  

    return(
        <>
            <NavMenu/>
            <h1 className="py-4 my-4 text-xl text-center font-bold">Compose your own TourDeBar</h1>
            <div className="py-4 border-y border-black">
                <CreateRoute/>
            </div>
            <SaveTourdebarButton routeId={routeId}/>

            <CreateUserlink tourId={tourId} />
         
        </>
    )
}