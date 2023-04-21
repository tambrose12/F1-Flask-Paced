import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header"


function Home() {
    return (
        <div>
            <Header />
            <div id='homeDiv'>
                <h1 id='homeH1'>WELCOME TO FLASK-PACED F1 RACING</h1>
                {/* <img src="https://wallpapercave.com/wp/VR4eThm.jpg " alt="f1 image" /> */}
            </div>
        </div>
    )
}

export default Home;