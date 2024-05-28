"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    tourdata : {
        routeId : number,
        gamelistId: number
    }
}

export default function SaveTourdebar({tourdata}: Props) {

    const router = useRouter()

    console.log("tourdata")
    console.log(tourdata)
 
    const addTourdebar = async () => {
        console.log("add tourdebar called")
        await fetch("/api/add-tourdebar", {
            method: "POST",
            body: JSON.stringify({tourdata})
        })
        router.refresh()
    }

    return (
        <div className='text-center'>
            <button
                className="m-6 bg-white hover:bg-green-500 hover:text-white hover:border-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  
                onClick={addTourdebar}>
                Save Tourdebar Button
            </button>
        </div>
    )
}