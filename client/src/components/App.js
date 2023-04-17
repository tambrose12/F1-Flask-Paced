import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Drivers from "./Drivers"
import DriverCard from "./DriverCard"


function App() {
  // Code goes here!

  const [drivers, setDrivers] = useState([])
  const [races, setRaces] = useState([])

  useEffect(() => {
    fetch('/drivers')
      .then(r => r.json())
      .then(setDrivers)
  }, [])

  let driverCards = drivers.map(driver => <DriverCard key={driver.id} driver={driver} />)

  return (
    <div>
      <main>
        <Home />
        <Drivers driverCards={driverCards} />
      </main>
    </div>
  )
}

export default App;
