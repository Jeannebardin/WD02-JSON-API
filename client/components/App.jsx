import React, { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient'
import {getWellyWeather} from '../api/weatherApi'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [wellyWeather, setWellyWeather] = useState(null)

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  const handleWellyWeatherClick = () => {
    getWellyWeather()
    .then(obj => setWellyWeather(obj))
  }

  return (
  <div> 
    <h1>{welcomeStatement}</h1>
    <button onClick={handleWellyWeatherClick}>Get Wellington Weather!!</button>
    {wellyWeather && <p>Welly Temp: {wellyWeather.temperature} Celcius</p>}
    {wellyWeather && <p> Wind Speed: {wellyWeather.windspeed} km/h</p>}

  </div>
  
 
  )
}

export default App
