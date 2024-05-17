"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    routeId: number
}

export default function SaveTourdebar({routeId}: Props) {

    const router = useRouter()
 
    const addTourdebar = async () => {
        await fetch("/api/add-tourdebar", {
            method: "POST",
            body: JSON.stringify({routeId})
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