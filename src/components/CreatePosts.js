const COHORT_NAME = '2301-FTB-MT-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

import { useState, useEffect } from "react";

const CreatePosts = (props) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false); 
    const [ newPost, setNewPost ] = useState({});
    const [ newTitle, setNewTitle ] = useState("");
    const [ newPrice, setNewPrice ] = useState("");
    const [ newLocation, setNewLocation ] = useState("");
    const [ newDescription, setNewDescription ] = useState("");

    useEffect (() => { 
        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false) 
            console.log("No token exists")
        }
    }, [])

    async function fetchPostsData () {
        try {
            const response = await fetch (`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    post: { 
                        title: newTitle,
                        price: newPrice,
                        description: newDescription,
                        location: newLocation,
                    }
                })
            })
            const translatedData = await response.json();

            console.log("You created a new post")
            console.log(translatedData)
            setNewPost(translatedData.data.post)
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <section> 
            <div>
                {
                    isLoggedIn ? <h3> Welcome  </h3> : <h3> Please Login or create a new account </h3>
                }
            </div>

            <form onSubmit={fetchPostsData}>
                <input
                    type="text"
                    placeholder="title"
                    value = {newTitle}
                    onChange= {(event) => setNewTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder= "price"
                    value={newPrice}
                    onChange= {(event) => setNewPrice(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="location"
                    value = {newLocation}
                    onChange= {(event) => setNewLocation(event.target.value)}
                />
                <input
                    type="text"
                    placeholder= "description"
                    value={newDescription}
                    onChange= {(event) => setNewDescription(event.target.value)}
                />
                <button type="submit"> Create Post </button>
            </form>
        </section>
    )
}

export default CreatePosts;


