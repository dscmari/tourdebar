'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

type PropsType = {
    tourId: string
}

export default function BurgerMenu({tourId} : PropsType) {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <div className="block" onClick={toggleMenu}>
                <div className="js-navbar-toggle flex items-center border-black hover:text-grey hover:border-grey">
                    <div className="js-burgermenu w-9 h-7 relative m-12 transform rotate-0 transition ease-in-out duration-500 cursor-pointer">
                        <span className="upper block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-0"></span>
                        <span className="middle block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 ease-in-out duration-250 top-3"></span>
                        <span className="lower block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-6"></span>
                    </div>
                </div>
            </div>
            <div className={showMenu ? 'block' : 'hidden'}>
                <ul className='flex flex-col items-end gap-4 mr-12 text-2xl py-4'>
                    <li><Link href={`/tourdebar/${tourId}/route`}>Route</Link></li>
                    <li><Link href={`/tourdebar/${tourId}/teams`}>Teams</Link></li>
                    <li>Spiele</li>
                    <li>Tabelle</li>
                    <li>Regeln</li>
                </ul>
            </div>
        </div>
    )
}
