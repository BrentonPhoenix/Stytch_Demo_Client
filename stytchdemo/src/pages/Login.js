import React, { useState } from "react";
import Axios from 'axios'
export default function Login(){
    const [email, setEmail] = useState('')
    const login = () => {

        Axios.post('http://localhost:3005/login' , {email})
        .then(()=>{
            console.log('ok')
           
        }) .catch(err => console.log(`there is an error`))}
    
    return(

        <div className="formContainer">
           <div>
            <h1>Sign Up</h1>
           </div>
           <div className="body">
                <p> Enter your email to sign up </p>
                <input type="email" placeholder="demo@email.com" onChange={(e)=> setEmail(e.target.value)}/>
                <button onClick={login}> Login </button>
           </div>
        </div>
    )
}