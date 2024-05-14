"use client"
import React, { useState } from 'react';

type Props = {
    routeId: number
}

export default function CreateUserlink({routeId}: Props) {

    const [url, setUrl] = useState<string>("")

    const createURL = () => {
  
        //const url = `https://tourdebar.vercel.app/route/${routeId}`;
        const url = `http://localhost:3000/route/${routeId}`;
        
        setUrl(url)
    }
  
    const handleclick = () => {
       createURL()
    }

    return (
        <div>
            <div>CreateUserlink</div>
            <button className='p-4 border-2 border-black' onClick={handleclick}>create url with token</button>
            <p>{url}</p>
        </div>
       
    )
}