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
        if(originalDriver.id === updatedDriver.id) {
        return updatedDriver
        } else {
        return originalDriver
        }
    }))
    setDriverToEdit(null)
    }

  const onEditDriver = (driverToEdit) => {
    setDriverToEdit(driverToEdit)
  }

  let driverCards = drivers.map(driver => <DriverCard key={driver.id} driver={driver} onEditDriver={onEditDriver} onUpdateDriver={onUpdateDriver}/>)

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
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/drivers">
          <Drivers driverCards={driverCards} addDriverToState = {addDriverToState} onUpdateDriver = {onUpdateDriver} onEditDriver={onEditDriver} driverToEdit={driverToEdit}/>
        </Route>
        <Route exact path="/races">
          <Races raceCards={raceCards} addRaceToState={addRaceToState}/>
        </Route>
        <Route exact path="/stats">
          <Stats stats={stats} addDriverRaceToState={addDriverRaceToState}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
