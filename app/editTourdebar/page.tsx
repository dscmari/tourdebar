import React from 'react'
import NavMenu from '../components/NavMenu'
import CreateTeams from '../components/CreateTeams'
import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";

export default async function editTourdebar() {

  const session = await getServerSession();
    const user = session?.user?.name
    // if(!user){
    //     redirect('/');
    // }


  return (
      <div>
          <NavMenu/>
          <CreateTeams/>   
      </div>
  )
}
