import React from "react"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Nav from "./Components/Nav"

import Single from "./Components/Single"
import Write from "./Components/Write"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Register from "./Components/Register"
import Login from "./Components/Login"


function App(){
    return(
        <>
        <Nav/>
        <Header/>
        <Router>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                        

                    <Route path="/register" element={<Register/>}/>
                        
                    <Route path="/single" element={<Single/>}/>

                    <Route path="/login" element={<Login/>}/>
                    

                    <Route path="/write" element={<Write/>}/>
                        

                   
                </Routes>
            </Router> 
        </>
    )
}

export default App