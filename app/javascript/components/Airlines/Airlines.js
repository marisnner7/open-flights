import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
   
    axios.get('/api/v1/airlines.json')
    .then(resp => {
      setAirlines(resp.data.data) 
    })
    .catch(resp => console.log(resp))
  }, [airlines.length])

  const list = airlines.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return(
    <Fragment>
      <div className="home">
        <div className="header">
          <h1>OpenFlights</h1>
          <p className="subheader">Honest, unbiased airline reviews. Share your experience.</p>
        </div>
        <div className="grid">
          AIRLINES GRID GOES HERE
          <ul>{list}</ul>
        </div>
    </div>
    </Fragment>
  )
}

export default Airlines