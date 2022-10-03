import React from "react";
import Cookies from "universal-cookie";
import Axios from 'axios'

export default function Home(){
    const cookie = new Cookies()
    const testAPI = () =>{
        Axios.post('http://localhost:3005/test', {},{headers: {sessiontoken: cookie.get('sessionToken').session_token}})
        .then((resp)=>{
            alert(resp.data)
        }).catch((err)=>{
            alert('user not authenticated')
            console.log(err)
        })
    }
    return(

        <div>
            <h1>
                This is the Home component!
            </h1>
            <button onClick={testAPI}>Test API</button>
        </div>
    )
}