import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './style.css'; 


import { useState } from "react";

import { Posts, RegisterUsers, Homepage, LoginUsers, SingleThing, AllThingsList, CreatePosts} from "./components";

const App = () => {
    
    const [ isloggedIn, setIsLoggedIn ] = useState(false); 
    const [ things, setThings ] = useState ("");
    
    
    

    return (
        <BrowserRouter>
            
            <div>
                <nav>
                    <Link to="/"> Homepage </Link> 
                    <Link to="/posts"> Posts </Link>
                    {
                        isloggedIn ? "" : (
                            <section> 
                                <Link to="/createPosts"> Create a post </Link>
                                <Link to="/register"> Create New Account </Link>
                                <Link to="/login"> Login </Link>
                            </section>
                        )
                    }
                </nav>

                

                <Routes>
                    <Route path="/createposts" element={<CreatePosts/>} />
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/register" element={<RegisterUsers />} />
                    <Route path="/login" element={<LoginUsers isLoggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/posts" element={<SingleThing thingsProps={things}/>} />
                    
                </Routes>
                
            </div>
        
        </BrowserRouter>

    )
}

createRoot(document.getElementById("app")).render(<App/>)