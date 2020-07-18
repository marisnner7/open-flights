import React, { userState, userEffect } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = userState([])

  userEffect(() => {
      //Get the api
      //update Airlines
  })
    return (
        <div> This is the index page  </div>
    )
}

export default Airlines