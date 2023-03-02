// Is it setMyData(translatedData.data.users) in the async function? 
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthenticationForm, Homepage } from "./components";

const Mainpage = () => {
    const [strangerThings, setStrangerThings] = useState ([]);

    useEffect (() => {

        const fetchingDataFunction = async () => {
            try { 
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2301-FTB-T-WEB-FT/posts")

                const translatedData = await response.json();

                const actualStrangerThingsData = translatedData.data.posts
            } catch (error) {
        }
    }
    fetchingDataFunction ();
}, [])

    return (
        <div> 
            {
                strangerThings.length ? strangerThings.map((singleStrangerThingsElement, idx ) => {
                    return (
                        <div key={idx}>
                            <p> Product: {singlestrangerThingsElement.product} </p>
                        </div>
                    )
                }) : <div> No Data Available </div> 
            }
        </div>
    )
}

createRoot(document.getElementById("app")).render(<Mainpage/>) 