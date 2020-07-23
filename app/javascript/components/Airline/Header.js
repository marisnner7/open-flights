import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`
const Header = (props) => {
  const { name, image_url, avg_score} = props.attributes
  const total = props.reviews.length
  return (
    <div className="wrapper">
      <Head>
        <img src={image_url} alt={name} />
        <h1>{name}</h1>
      </Head>      <div>
      <div className="totalReviews">{total} User Reviews</div>
        <div className="starRating"></div>
      <div className="totalOutOf">{avg_score} of 5 Stars</div>
      </div>
    </div>

  )
}

export default Header