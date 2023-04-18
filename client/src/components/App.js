import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Drivers from "./Drivers"
import DriverCard from "./DriverCard"
import RaceCard from "./RaceCard"
import Races from './Races'
import Stats from './StatsList'


function App() {
  // Code goes here!

  const [drivers, setDrivers] = useState([])
  const [races, setRaces] = useState([])
  const [stats, setStats] = useState([])

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

  useEffect(() => {
    fetch('/driver_races')
      .then(r => r.json())
      .then(setStats)
  }, [])

  let driverCards = drivers.map(driver => <DriverCard key={driver.id} driver={driver} />)

  let raceCards = races.map(race => <RaceCard key={race.id} race={race} />)

  const addDriverToState = newDriver => {
    setDrivers([...drivers, newDriver])
  }

  const addRaceToState = newRace => {
    setRaces([...races, newRace])
  }
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/drivers">
          <Drivers driverCards={driverCards} addDriverToState = {addDriverToState}/>
        </Route>
        <Route exact path="/races">
          <Races raceCards={raceCards} addRaceToState={addRaceToState}/>
        </Route>
        <Route exact path="/stats">
          <Stats stats={stats} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
