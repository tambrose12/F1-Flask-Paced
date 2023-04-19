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
  // Code goes here!

  const [drivers, setDrivers] = useState([])
  const [races, setRaces] = useState([])
  const [stats, setStats] = useState([])
  const [driverToEdit, setDriverToEdit] = useState(null)


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

  const onUpdateDriver = (updatedDriver) => {
    setDrivers(drivers => drivers.map(originalDriver => {
      if (originalDriver.id === updatedDriver.id) {
        return updatedDriver
      } else {
        return originalDriver
      }
    }))
    setDriverToEdit(null)
  }

  const removeDriverfromState = (deleteDriverId) => {
    setDrivers(drivers => drivers.filter(driver => {
      return driver.id != deleteDriverId
    }))
  }

  const onEditDriver = (driverToEdit) => {
    setDriverToEdit(driverToEdit)
  }

  let driverCards = drivers.map(driver => <DriverCard key={driver.id} driver={driver} onEditDriver={onEditDriver} onUpdateDriver={onUpdateDriver} removeDriverfromState={removeDriverfromState} />)

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
          <Drivers driverCards={driverCards} addDriverToState={addDriverToState} onUpdateDriver={onUpdateDriver} onEditDriver={onEditDriver} driverToEdit={driverToEdit} />
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
