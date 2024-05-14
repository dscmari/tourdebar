"use client"
import React from "react";
import { ChangeEvent, useState} from "react"
import { useRouter } from 'next/navigation'


export default function CreateRoute() {

    const router = useRouter()

    const [inputFields, setInputFields] = useState([
        {
            name: "",
            neighborhood: ""
        }
    ])
  
    const handleFormChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...inputFields];
        data[index][event.target.name as keyof typeof inputFields[0]] = event.target.value; // Type assertion
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { name: '', neighborhood: '' }
        setInputFields([...inputFields, newfield])
    }

    const addRoute = async () => {
   
        await fetch("/api/add-route", {
            method: "POST",
            body: JSON.stringify({inputFields})
        })
        //refresh to update route id in parent component 
        router.refresh()
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="p-4 text-xl font-bold">Route stops</h1>
            <form>
                {inputFields.map((input, index) => {
                    return(
                        <div key={index} className="m-4 flex flex-col items-center gap-2 border-solid border-2 ">
                            <p className="pl-2 pt-2">Stop {index + 1}</p>
                            <input
                                name='name'
                                placeholder='Name'
                                value={input.name}
                                onChange={event => handleFormChange(index, event)}
                                className="m-2 p-2 border border-2 rounded-lg"
                            />
                            <input
                                name='neighborhood'
                                placeholder='Neighborhood'
                                value={input.neighborhood}
                                onChange={event => handleFormChange(index, event)}
                                className="mx-2 mb-4 p-2 border border-2 rounded-lg"
                            />
                        </div>
                    )
                })}
            </form>
            {/* TODO: Limit to 10 stops via input fields length */}
            {inputFields.length === 10 ? 
                <p className="p-4 m-4 text-red-500">Maximum number of Stops is 10</p>
            : 
                <button
                className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                onClick={addFields}>
                    Add stop
                </button>
            }
            <h1 className="underline text-xl">Current Stops</h1>
            {inputFields.map((input, index) => {
            return(
                <div key={index} className="w-2/3 flex flex-col gap-2 bg-beer p-4 m-2 border-2 border-black rounded">
                    <p>Stop {index + 1}: {input.neighborhood}</p>
                    <p className="text-2xl text-center">{input.name}</p>
                    <p></p>
                </div>
            )
            })}

            <button
                className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                onClick={() => {addRoute()}}>
                Save Stops
            </button>

        </div>
    )
}