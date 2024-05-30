'use client'
import React, { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';

type propsType = {
    tourId: string
  }

export default function NavMenuUser({tourId} : propsType) {

  const [username, setUsername] = useState('')

  useEffect(() => {
    // Retrieve the username from local storage when the component mounts
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        setUsername(storedUsername);
    }
  }, []);

    return (
        <div>
           
            {username !== '' ?
                <div className='nav-menu flex justify-between'>
                    <div className='my-10 mx-4 flex flex-col'>
                        <h1 className='text-lg font-bold'>Tourdebar</h1>
                        <p className=''>{username}</p>
                    </div>
                  
                  <BurgerMenu tourId={tourId}/>
                </div>
            :
            <p className='p-12 text-2xl font-bold'><Link href={`/tourdebar/${tourId}`}>Tourdebar</Link></p>
            }
          
        </div>
      );
}
