"use client"
import React, { useState } from 'react';

type Props = {
    tourId: number
}

export default function CreateUserlink({tourId}: Props) {

    const [url, setUrl] = useState<string>("")

    const createURL = () => {
  
        //const url = `https://tourdebar.vercel.app/route/${routeId}`;
        const url = `http://localhost:3000/tourdebar/${tourId}`;
        
        setUrl(url)
    }
  
    const handleclick = () => {
       createURL()
    }

    return (
        <div className='text-center'>
            <button 
                className="standard-btn"  
                onClick={handleclick}>Create Tourdebar Link
            </button>
            <div>
                <p>User URL</p>
                <p>{url}</p>
            </div>
        </div>
       
    )
}