import React, { useState, useEffect, Fragment } from 'react'
import axios  from 'axios'
import Airline from './Airline'

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(()=> {

        axios.get('/api/v1/airlines.json')
        .then( resp => {
            setAirlines(resp.data.data)
        })
        .catch( resp => console.log(resp))
    }, [airlines.length])

    const grid = airlines.map( item => {
        return(
            <Airline
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return(
        <div className="home">
            <div className="header">
                <h1>Open Flights</h1>
                <div className="subheader">Reviews made by custormes</div>
            </div>
            <div className="grid">
                {grid}
            </div>
        </div>
    )
}

export default Airlines