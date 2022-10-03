import React, { useEffect, useState } from "react";
import Axios from 'axios'
import { Navigate, useSearchParams} from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function Auth(){
    const [searchParams] = useSearchParams()
    const cookie = new Cookies()

    useEffect(()=>{
        Axios.post('http://localhost:3005/auth', {
            token: searchParams.get('token'),
        }).then((response)=> {
            cookie.set("sessionToken", response.data)
            console.log(response.data)
        })
    })
    return <Navigate to="/" replace / >;
}