import React, { useState, useEffect } from 'react'
import axios  from 'axios'
const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(()=> {

        axios.get('/api/v1/airlines.json')
        .then( resp => console.log(resp))
        .catch( resp => console.log(resp))
    })

    return (
        <div>This is the index page</div>
    )
}

export default Airlines