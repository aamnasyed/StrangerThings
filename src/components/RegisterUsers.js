// const COHORT_NAME = '2301-FTB-MT-WEB-FT'
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


import { useState } from "react";

const RegisterUsers = () => {

    const [ newUsername, setNewUsername ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");

    async function registerNewAccount(e) {
        e.preventDefault();

    try {
        console.log("New Username: " + newUsername)
        console.log("New Password is: " + newPassword)

        if (newPassword.length < 8) {
            alert ("Password does not meet requirements, please try again.");
            return;
        } else if (newUsername.length < 8 ) {
            alert ("Username does not meet requirements, please try again");
            return;
        }
    
        
        const response = await fetch("https://strangers-things.herokuapp.com/api/2301-FTB-MT-WEB-FT/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
            },
            body: JSON.stringify({
                user: {
                    username: newUsername,
                    password: newPassword,
                },
            })
        });

        const translatedData = await response.json();

        console.log(translatedData);

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
            <h3> Register For A New Account Below </h3>

            <form onSubmit={registerNewAccount}>
                <input 
                    type="text"
                    placeholder="New Username"
                    value ={newUsername}
                    onChange={(event) => setNewUsername(event.target.value)}
                    />
                <input
                    type="text"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    />
                <button type="submit"> Creat New Account </button>
            </form>
        </section>
    )
}



export default RegisterUsers;



