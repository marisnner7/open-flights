import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
//import Review from './Review'
import ReviewForm from './ReviewForm'
import Review from './Review'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff; 
  height: 100vh;
  overflow: scroll;
  
  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 50px;
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

  
  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    //post to api
    const airline_id = airline.data.id
    axios.post('/api/v1/reviews', {review, airline_id})
    .then(resp => {
      
    })
    .catch( resp => {})
  }

  const setRating = (score, e) => {
    e.preventDefault()  
    setReview({ ...review, score })
  }

  let total, average = 0
  let airlineReviews

  if (airline.reviews && airline.reviews.length > 0) {
    total = airline.reviews.reduce((total, review) => total + review.score, 0)
    average = total > 0 ? (parseFloat(total) / parseFloat(airline.reviews.length)) : 0

    let reviews
    if (airlines.included.length > 0) {
      reviews = airlines.included.map( (review, index) => {
        return (
          <Review 
            key={index} 
            title={review.attributes.title} 
            description={review.attributes.description} 
            score={review.attributes.score} 
          />
        )
      })
    }


  airlineReviews = airline.reviews.map( (review, index) => {
    
    return (
      <Review 
        key={index}
        id={review.id}
        attributes={review}
        handleDestroy={handleDestroy}
      />
    )
  })
}


  return(
    <Wrapper>
      {
        loaded && 
      <Fragment>
        <Column>
          <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              <Review>
                
                
              </Review>
       
          </Main>
        </Column>
        <Column>
          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            attributes = {airline.data.attributes}
            review = {review}

          />
        </Column>
      </Fragment>
     }
    </Wrapper>
  )
}

export default Airline
