import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import Review from './Review'

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
`

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`
    
    axios.get(url)
    .then( resp => {
      setAirline(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp))


  },[])

  return(
    <div className="wrapper">
        <Column>
          {
          loaded && 
            <Header
              attributes={airline.data.attributes}
              reviews={airline.included}
            />
          }
          <div className="review">new review</div>
        </Column>
        <Column>
         [review form here]
        </Column>
    </div>
  )
}

export default Airline