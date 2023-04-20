import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Drivers from "./Drivers"
import DriverCard from "./DriverCard"
import RaceCard from "./RaceCard"
import Races from './Races'
import Stats from './StatsList'
import DriverDetail from "./DriverDetail";
import RaceDetail from "./RaceDetail";


function App() {

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


  const removeDriverfromState = (deleteDriverId) => {
    setDrivers(drivers => drivers.filter(driver => {
      return driver.id != deleteDriverId
    }))
  }


  let driverCards = drivers.map(driver => <DriverCard key={driver.id} driver={driver} removeDriverfromState={removeDriverfromState} />)

  let raceCards = races.map(race => <RaceCard key={race.id} race={race} />)

  const addDriverToState = newDriver => {
    setDrivers([...drivers, newDriver])
  }

  const addRaceToState = newRace => {
    setRaces([...races, newRace])
  }

  const addDriverRaceToState = newDriverRace => {
    setStats([...stats, newDriverRace])
  }



  return (
    <div className="app">
      <Route path='/drivers/:id' >
        <DriverDetail />
      </Route>
      <Route path='/races/:id' >
        <RaceDetail stats={stats} />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/drivers">
          <Drivers driverCards={driverCards} addDriverToState={addDriverToState} />
        </Route>
        <Route exact path="/races">
          <Races raceCards={raceCards} addRaceToState={addRaceToState} />
        </Route>
        <Route exact path="/stats">
          <Stats stats={stats} addDriverRaceToState={addDriverRaceToState} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
