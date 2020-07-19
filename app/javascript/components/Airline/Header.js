import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;
    img {
        height:  60px;
        width: 60px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-botton: -8px;
    }
`
const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`

const TotalOutOf= styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`


const Header = (props) => {
    const { image_url, name, reviews, average } = props
    const reviewCount = reviews ? reviews.length : 0


    return( 
        <Wrapper>
            <h1> <img src={image_url} alt={name}/> (name)</h1>
            <div>
                <TotalReviews>(total) User Reviews</TotalReviews>
               
                <TotalOutOf>{average} out of 5 stars</TotalOutOf> 
            </div>

        </Wrapper>
    )
}

export default Header