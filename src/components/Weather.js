import React from "react";


class Weather extends React.Component {
    render() {
        let weatherClass = ("wi wi-owm-" + this.props.weather_code)
        const { temp, city, humidity, description, wind, country, temp_max, temp_min } = this.props
    return (
        <div className="weather-container">
            {
                this.props.city && this.props.country && <p className="city country">{ city }, { country }</p>
            }

           {
               this.props.temp && <p className="temp"><i className="wi wi-fahrenheit"></i>{ temp } </p>
           }

           {
               this.props.description && <p className="weather-condition"><i className={weatherClass}> </i> { description }</p>
           }

           {
               this.props.wind && <p className="wind"><i className="wi wi-strong-wind"></i>
               <br /> { wind }  <br /> wind
               </p>
           }

           {
               this.props.humidity && <p className="humidity"><i className="wi wi-humidity"></i> <br/>
               { humidity } <br/> Humidity 
               </p>
           }
           {
            //    this.props.temp_min && this.props.temp_max &&
               <p className="temp-min-max"><i className="wi wi-thermometer"></i> { temp_min } 90/79 { temp_max }
               </p>
           }
        </div> 
     )
   }
}


    

export default Weather;