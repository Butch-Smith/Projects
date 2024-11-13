import { useEffect, useState } from 'react'

function App() {
  const apiKey = "7b300c97ca168e237ae153140fdd1331";
  const [city, setCity] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const [weather, setWeather] = useState();

  const getWeatherHandler = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
        console.log(data)
      })
      .catch((error) => {
        console.log("Error: " + error)
      })
  };

  const submitForm = (e) => {
    e.preventDefault()
    getWeatherHandler()
  }

  return (
    <section className='w-screen flex justify-center items-center h-screen bg-gray-300'>
      <section className="w-[600px] rounded-xl shadow-xl bg-gray-100 p-4 flex flex-col">
        <form className='flex gap-4 items-center' onSubmit={submitForm}>
          <input className='p-2 shadow-xl text-lg w-4/5 rounded-full' type="text" placeholder="Search for a city" onChange={(e) => setCity(e.target.value)} />
          <button className='p-2 px-6 w-1/5 shadow-xl text-white rounded-full bg-indigo-500' type="submit">Search</button>
        </form>
        <h1 className='text-xl p-3 my-4 rounded-full bg-gray-200 shadow-xl'>City: {city}</h1>
        <div className='bg-gray-200 rounded-3xl p-3 *:py-1 *:text-lg '>
          <p>Temperatuur: {weather && Math.floor(weather.main.temp)} °C</p>
          <p>Gevoelstemperatuur: {weather && weather.main.feels_like} °C</p>
          <p>Luchtvochtigheid: {weather && weather.main.humidity}%</p>
          <p>Wind snelheid: {weather && weather.wind.speed} m/s</p>
        </div>
      </section>
    </section>
  )
}

export default App