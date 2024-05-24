"use client"
import React from "react";
import { ChangeEvent, useState} from "react"
import { useRouter } from 'next/navigation'

export default function CreateTeams() {

    const router = useRouter()
    const [tourdebarId, setTourdebarId] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setTourdebarId(newValue)
    }


    return (
        <div className="flex flex-col items-center">
             <h1 className="text-2xl font-bold">Add Teams to Tourdebar</h1>
             <div className="text-center">
                <label>Choose Tourdebar</label>
                <input
                    name='tourId'
                    placeholder='Id'
                    className="m-2 p-2 border border-2 rounded-lg w-1/5"
                    value={tourdebarId}
                    onChange={handleInputChange}
                />
             </div>
             
              {tourdebarId}
        </div>
    )
}
