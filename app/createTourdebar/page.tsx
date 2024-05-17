import { sql } from "@vercel/postgres";
import CreateRoute from "../components/CreateRoute"
import CreateUserlink from "../components/CreateUserlink"
import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import NavMenu from "../components/NavMenu";
import SaveTourdebarButton from "../components/buttons/SaveTourdebar";




export default async function CreateTourdebar() {

    const session = await getServerSession();
    const user = session?.user?.name
    if(!user){
        redirect('/');
    }
    
    const routeIdResult = await sql`SELECT * FROM Routes ORDER BY id DESC LIMIT 1`; // Select last entry
    const routeId: number = routeIdResult.rows[0]["id"]

    const tourIdResult = await sql`SELECT * FROM Tourdebars ORDER BY id DESC LIMIT 1`
    const tourId : number = tourIdResult.rows[0]["id"] 

    
  

    return(
        <>
            <NavMenu/>
            <h1 className="py-4 my-4 text-xl text-center font-bold">Compose your own TourDeBar</h1>
            <div className="py-4 border-y border-black">
                <CreateRoute/>
            </div>
            
            <br />
            
            <SaveTourdebarButton routeId={routeId}/>

            <CreateUserlink tourId={tourId} />
         
        </>
    )
}