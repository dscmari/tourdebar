import React from 'react'
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';

type propsType = {
    tourId: string
  }

export default async function NavMenuUser({tourId} : propsType) {

    


    return (
        <div className="nav-menu flex justify-between">
            <p className='p-12 text-2xl font-bold'><Link href={`/tourdebar/${tourId}`}>Tourdebar</Link></p>
            <BurgerMenu tourId={tourId}/>
            
        </div>
      );
}
