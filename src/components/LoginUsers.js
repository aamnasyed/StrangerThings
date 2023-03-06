const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

import React from "react"

import { useEffect, useState } from "react";
import { useNavigate } from "react"

const LoginUsers = (props) => {
    const [ myData, setMyData ] = useState({});
    const [ username, setUsername ] = useState ("");
    const [ password, setPassword ] = useState ("");
    
    async function loginFunction(e) {
        console.log("this works")
        e.preventDefault();

        try {
            const response = await fetch (`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {

                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
                },
                body: JSON.stringify({
                    user:{
                        username: username,
                        password: password,
                    }
                })
            })

            const translatedData = await response.json();

            console.log(translatedData) 
            if (!translatedData.success) {
                alert("Resistragtion was not successful, please try again.");
            } else {
            const myJWT = translatedData.data.token;
            localStorage.setItem("token", myJWT);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <section>
            {
                props.isLoggedIn ? <h3> Welcome, {myData.username} </h3> : <h3> Please login or register for a new account </h3>
            }

            <form onSubmit={loginFunction}>
                <input 
                    type="text"
                    placeholder= "username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                <input 
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    /> 
                <button type="submit"> Login to Account </button> 
                {/* <button onClick={logout}> Logout </button> */}
            </form>


        </section>
    )
}

export default LoginUsers;

