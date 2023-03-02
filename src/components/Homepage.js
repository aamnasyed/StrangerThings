import {useState, useEffect } from "react";


const Homepage = (props) => {
    const [myData, setMyData] = useState({})

    useEffect (() => {
        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token")) {

            props.setIsLoggedin(false)
            console.log("token does not exist")
        }

            async function fetchMyData () {
                try {
                    const response = await fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/me", {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })

                    const translatedData = await response.json();

                    console.log("account data")
                    console.log(translatedData)
                    setMyData(translatedData.data)
                } catch (error) {
                    console.log(error);
                }
            }
    }, [])

    return (
        <div> 
            { 
            props.isLoggedIn ? <h3> Welcome, {myData.username} </h3>: <h3> Please login or create a new account</h3>
            }
        </div>
    )
}
 export default Homepage;