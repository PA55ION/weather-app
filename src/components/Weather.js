import React from "react";


class Weather extends React.Component {
    render() {
        let weatherClass = ("wi wi-owm-" + this.props.weather_code)
        const { temp, city, humidity, description, wind, country, temp_max, temp_min } = this.props;

    return (
        <div className="weather-container">
         
            {
                this.props.city && <p className="city country">{ city },{ country }</p>
            }

           {
               this.props.temp && <p className="temp"><i className="wi wi-fahrenheit"></i>{ temp } </p>
           }

           {
               this.props.description && <p className="weather-condition"><i className={weatherClass}> </i> <br />
               <span className="description">{ description }</span></p>
           }

           {
               this.props.wind && <p className="wind"><i className="wi wi-strong-wind"></i>
               <br /> { wind }  <br /> Wind
               </p>
           }

           {
               this.props.humidity && <p className="humidity"><i className="wi wi-humidity"></i> <br/>
               { humidity } <br/> Humidity 
               </p>
           }
           {
                this.props.temp_min && this.props.temp_max &&
               <p className="temp-min-max"><i className="wi wi-thermometer"></i> <br /> 
               { temp_min } | { temp_max }
               <br/>
               Min | Max
               </p>
           }

           {/* {
               this.props.sunrise && 
               <p className="sunrise"><i className="wi wi-sunrise"></i>
               {this.props.sunrise}</p>
           }

           {
               this.props.sunset && <p className="sunset"><i className="wi wi-sunset"></i><br/>{this.props.sunset}
               <br/> sunset
               </p>
           } */}
        </div> 
     )
   }
}


    

export default Weather;