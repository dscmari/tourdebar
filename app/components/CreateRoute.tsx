"use client"
import React from "react";
import { ChangeEvent, useState} from "react"
import DBTest from "../database/DBTest";


export default function CreateRoute() {

    class Stop{
        name: string
        neighborhood: string
        constructor(name: string, neighborhood: string){
            this.name = name
            this.neighborhood = neighborhood
        }
    }

    const [inputFields, setInputFields] = useState([
        {
            name: "",
            neighborhood: ""
        }
    ])

    const [renderRoute, setRenderRoute] = useState(false)
  
    const handleFormChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...inputFields];
        data[index][event.target.name as keyof typeof inputFields[0]] = event.target.value; // Type assertion
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { name: '', neighborhood: '' }
        setInputFields([...inputFields, newfield])
    }

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(inputFields)

        inputFields.map((input) =>{
            console.log(input.name)
        })
    }



    // Increment the render count every time the component renders
    const [renderCount, setRenderCount] = useState(0);
    React.useEffect(() => {
        setRenderCount(prevCount => prevCount + 1);
    }, []);

    return(
        <div className="flex flex-col items-center">
            <h1 className="bg-red-500">Rendercount: {renderCount}</h1>
            <h1 className="p-4 text-xl font-bold">Route stops</h1>
            <form onSubmit={submit}>
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
                                className="mx-2 p-2 border border-2 rounded-lg"
                            />
                            <button onClick={submit} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:focus:ring-yellow-900">Save stop</button>
                        </div>
                    )
                })}
            </form>
            <button
                className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                onClick={addFields}>
                    Add stop
            </button>
             <br />
             <h1>Deine Route</h1>
             {inputFields.map((input, index) => {
               return(
                <div key={index}>
                    <p>Station: {index}</p>
                    <p>{input.name}</p>
                    <p>{input.neighborhood}</p>
                </div>
               )
             })}
            <button
                className="m-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                onClick={() => setRenderRoute(!renderRoute)}>
                    Save Route
            </button>
            <div>
                {renderRoute && <DBTest />}
            </div>
        </div>
    )
}