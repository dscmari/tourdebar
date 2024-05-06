"use client"
import { ChangeEvent, useState} from "react"

export default function CreateTourdebar() {

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

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(inputFields)
    }

    return(
        <div className="flex flex-col items-center">
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
        </div>
    )
}