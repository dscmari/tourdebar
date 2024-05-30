'use client'
import React, { useState } from 'react'


export default function SaveUsername() {

    const [username, setUsername] = useState('')

    const handleChange = () => {
        
    }

    return (
        <div>
            <div>
                <form action="">
                    <input 
                        type="text"
                        placeholder='username'
                         
                    />
                    <button className='standard-btn' onClick={handleChange}>Save Username</button>
                </form>
            </div>
        </div>
    )
}
