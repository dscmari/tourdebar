"use client"
import React, { useState } from 'react';

type Props = {
    routeId: number
}

export default function CreateUserlink({routeId}: Props) {

    const [url, setUrl] = useState<string>("")

    const createURL = () => {
        const token = Math.random().toString(36).substring(7);
        console.log(token)
        const url = `https://tourdebar.vercel.app/user?token=${token}` + routeId;
        console.log(url)
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