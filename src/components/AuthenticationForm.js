import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationForm = () => {
    const [enterUsername, setEnterUsername] = useState("");
    const [enterPassword, setEnterPassword] = useState("");

    async function newAccountRegistration(e) {
        e.preventDefault();
        try {
            if (enterPassword.length < 10) {
                alert("Password does not meet requirements, please try again. ")
                return;
            } else if (enterUsername.length < 10) {
                alert("Username does not meet requirements, please try again")
                return;
            }
        const response = await fetch ("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: enterUsername,
                    password: enterPassword
                }
            })
        })

        const translatedData = await response.json ();

        console.log(translatedData)

        if (!translatedData.success) {
            alert("Resistragtion was not successful, please try again.")
        } else {
            const iDontKnowWhatThisIs = translatedData.data.token;

            localStorage.setItem("token", iDontKnowWhatThisIs )

            navigate("/")
        }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div> 
            <h1> Register A New Account </h1>
            <form>
                <input
                    type = "text"
                    placeholder="Enter Username"
                    value={enterUsername}
                    onChange={(event) => setEnterUsername(event.target.value)}
                />

                <input
                    type="text"
                    placeholder = "Enter Password"    
                    value={enterPassword}
                    onChange={(event) => setEnterPassword(event.target.value)}
                />
                <button type="submit"> Create New Account </button>
            </form>
        </div>
    )
}

export default AuthenticationForm; 
