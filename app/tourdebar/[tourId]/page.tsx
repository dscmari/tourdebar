import React from 'react'
import DisplayRoute from "../../components/DisplayRoute"
import {sql} from '@vercel/postgres';
import NavMenuUser from '../../components/NavMenuUser';

type paramsType = {
    params: {
      tourId: string
    }
  }

type Stop = {
    id: number
    name: string
    neighborhood: string
}

export default async function page({params} : paramsType) {

    const {tourId} = params

    return (
        <div>
            <NavMenuUser tourId={tourId}/>
                <p>Welcome to your Tour de Bar</p>
                <p>Einleitungstext, Erklärung wie Menu funktioniert und was es alles gibt</p>
        </div>
    )
}
