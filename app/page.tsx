import { getServerSession } from "next-auth";
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession();
  const user = session?.user?.name

  if(user){
    return(
        <div  className="flex flex-col items-center mt-32">
                <p className="p-4 text-xl">Hi <span className="">{user}</span></p>
                <p>TODO Introtext, Verweis auf Regeln (Link in Footer)</p>
                <Link className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="/createTourdebar">Create TourDeBar</Link>

                {/* show current tourdebar? */}
                {/* 
                 <Link href="#"></Link>
                 */}
               
        </div>
    )
  }  

  return (
    <div className="flex flex-col items-center">
        <h1 className="mt-40 mb-4 text-3xl font-bold">TourDeBar</h1>
        <p className="m-4 text-xl">Sign in to create a new TourDeBar</p>
    </div>
  );
}