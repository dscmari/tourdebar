"use client"
import React from 'react'


interface Stop {
    id: number;
    name: string;
    neighborhood: string;
}
interface Props {
    route: Stop []
}

export default function DisplayRoute( {route} : Props) {

    return (
        <div className='flex flex-col items-center'>
            <h1 className='p-4 text-xl underline'>Stops</h1>
            {route.map((stop, index) => {
                return(
                    <div key={index} className='w-1/2 flex flex-col bg-beer p-2 px-6 m-2 border-2 border-black rounded'>
                        <p className='text-xl p-0'>{stop.name}</p>
                        <p className='text-sm p-0'>{stop.neighborhood}</p>
                    </div>
                )
            })}
        </div>
        
    )
}
