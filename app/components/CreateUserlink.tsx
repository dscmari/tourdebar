"use client"
import React, { useState } from 'react';

type Props = {
    routeId: number
}

export default function CreateUserlink({routeId}: Props) {

    const [url, setUrl] = useState<string>("")
    //const [devurl, setUrl] = useState<string>("")

    const createURL = () => {
  
        const url = `https://tourdebar.vercel.app/user?` + routeId;
        //const devurl = `http://localhost:3000/route/${routeId}`;

        //setUrl(devurl)
        setUrl(url)
    }
  
    const handleclick = () => {
       createURL()
    }

    return (
        <div>
            <div>CreateUserlink</div>
            <button className='p-4 border-2 border-black' onClick={handleclick}>create url with token</button>
            {/* <p>{devurl}</p> */}
            <p>{url}</p>
        </div>
       
    )
}