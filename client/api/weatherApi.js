import request from 'superagent'

export function getWellyWeather() {
  return request
  .get('https://api.open-meteo.com/v1/forecast?latitude=-41.2865&longitude=174.7762&hourly=temperature_2m,relativehumidity_2m,rain&current_weather=true')
  .then (res => 
     (res.body.current_weather)
  )
}