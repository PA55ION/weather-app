import React from 'react';
import Form from './components/Form';
import Weather from "./components/Weather";

import './App.css';

const API_KEY = "050fe05f4b6fa9f366de526cee98af35";

class App extends React.Component {
  constructor(props) {
    super(props);
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
        icon: '',
        error: ''
    }
}

getWeather = async (e) => {
  e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
   
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`);
            const data = await api_call.json();
            
            // console.log(data)
            this.setState({
                temp: Math.round(data.main.temp),
                city: data.name,
                country: data.sys.country,
                wind: Math.round(data.wind.speed),
                description: data.weather[0].description,
                humidity: Math.round(data.main.humidity),
                weather_code: data.weather[0].id,
                temp_min: Math.round(data.main.temp_min),
                temp_max: Math.round(data.main.temp_max),
                error: "Please enter the values."
            })
}
render() {

  let date = new Date()
  let time = date.getHours()
  let timeOfDay;
  if (time < 12) {
    timeOfDay = "Morning"
    document.body.className = "sun"
  } else if (time >= 12 && time < 17) {
    timeOfDay = "Afternoon"
    document.body.className = "moon"
  } else {
    timeOfDay = "Evening"
    document.body.className = "blood"
  }
  
    return(
        <div className="container">
          <div className="Icon" data-hour={this.state.time}>
            <div className="Sky"></div>
              <Form getWeather={this.getWeather}/>
                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  wind={this.state.wind}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  weather_code={this.state.weather_code}
                  temp_max-={this.state.temp_max}
                  temp_min={this.state.temp_min}
                />
          </div>
        </div>
    )
}
}

export default App;
