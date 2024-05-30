'use client'
import React, { useRef, useEffect, useState } from 'react'


export default function SaveUsername() {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const [username, setUsername] = useState('')

    useEffect(() => {
        // Retrieve the username from local storage when the component mounts
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleClick = (event: { preventDefault: () => void }) => {
        if(inputRef.current){
            localStorage.setItem('username',inputRef.current.value);
        }
    }

    return (
      <div>
        {username === '' ?
        <form action="">
            <label htmlFor="username">Username:</label>
            <input type="text"
                id='username'
                placeholder='username'
                className='border border-2 border-black rounded'
                ref={inputRef} />
            <button className='standard-btn' onClick={handleClick}>Saver Username</button>
        </form>
        :
        <p>username: {username}</p>
        }
    

      </div>
    )
}
