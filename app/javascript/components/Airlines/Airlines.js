import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Airline from './Airline'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect( () => {
    axios.get('/api/v1/airlines.json')
    .then( resp => setAirlines(resp.data.data) )
    .catch( resp => console.log(resp) )
  }, [])

  let grid
  if (airlines && airlines.length > 0) {
    grid = airlines.map( (airline, index) => {
      console.log(airlines)
      return(
        <Airline key={index} attributes={airline.attributes} />
      )
    })
  }

  console.log(airlines)
 return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">Honest, unbiased airline reviews. Share your experience.</p>
      </div>
      <div className="grid">
        {grid}
      </div>
    </div>
  )
}

export default Airlines
