import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Drivers from "./Drivers"
import DriverCard from "./DriverCard"
import RaceCard from "./RaceCard"
import Races from './Races'


function App() {
  // Code goes here!

  const [drivers, setDrivers] = useState([])
  const [races, setRaces] = useState([])

  useEffect(() => {
    fetch('/drivers')
      .then(r => r.json())
      .then(setDrivers)
  }, [])

  useEffect(() => {
    fetch('/races')
      .then(r => r.json()) 
      .then(setRaces)
  }, [])

  let driverCards = drivers.map(driver => <DriverCard key={driver.id} driver={driver} />)

  let raceCards = races.map(race => <RaceCard key={race.id} race={race}/>)

  return (
    <div>
      <main>
        <Home />
        <Drivers driverCards={driverCards} />
        <Races raceCards={raceCards} />
      </main>
    </div>
  )
}

export default App;
