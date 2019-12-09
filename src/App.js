import React from 'react';
import Form from './components/Form';
import Weather from "./components/Weather";

import './App.css';

const API_KEY = "050fe05f4b6fa9f366de526cee98af35";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        temp: '',
        city: '',
        country: '',
        wind: '',
        description: '',
        humidity: '',
        weather_code: '',
        temp_min: '',
        temp_max: '',
        sunrise: '',
        sunset: '',
        error: ''
    }
}

getWeather = async (e) => {
  e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`);
            const data = await api_call.json();
            
            // console.log(data)
            this.setState({
                temp: Math.floor(data.main.temp),
                city: data.name,
                country: data.sys.country,
                wind: Math.round(data.wind.speed),
                description: data.weather[0].description,
                humidity: Math.round(data.main.humidity),
                weather_code: data.weather[0].id,
                temp_min: Math.round(data.main.temp_min),
                temp_max: Math.round(data.main.temp_max),
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                error: "Please enter the values."
            })
          } 

        
render() {
    return(
        <div className="container">
          <div className="Icon" data-hour={this.state.time}>
            <div className="Sky"></div>
              <Form getWeather={this.getWeather} error={this.state.error}/>
                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  wind={this.state.wind}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  weather_code={this.state.weather_code}
                  temp_max={this.state.temp_max}
                  temp_min={this.state.temp_min}
                  // sunrise={this.state.sunrise}
                  // sunset={this.state.sunset}
                />
          </div>
        </div>
    )
}
}

export default App;
