import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Airline from './Airline'


const Home = styled.div`
  text-align:center;
`
const Header = styled.div`
  padding:100px 100px 10px 100px;

  h1 {
    font-size:42px;
  }
`
const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding:20px;
`
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
      return(
        <Airline key={index} attributes={airline.attributes} />
      )
    })
  }

 return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, unbiased airline reviews. Share your experience.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

// export default Airlines


// const Airlines = () => {
//   const [airlines, setAirlines] = useState([])

//   useEffect(()=> {
//     axios.get('/api/v1/airlines.json')
//     .then( resp => {
//       setAirlines(resp.data.data)
//     })
//     .catch( resp => console.log(resp))
//   }, [])

//   const list = airlines.map( item => {
//   return ( <li key={item.attributes.name}>{item.attributes.name}</li>)
//   })

//   return(
//     <Fragment>
//       <div> This is the index page</div>
//       <ul>{list}</ul>

//     </Fragment>
//   )
// }

export default Airlines