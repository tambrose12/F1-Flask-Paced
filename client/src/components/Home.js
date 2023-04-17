import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header"

function Home() {
    return (
        <div>
            <Header />
            <h1>Welcome, Race Fans!</h1>
        </div>
    )
}

export default Home;