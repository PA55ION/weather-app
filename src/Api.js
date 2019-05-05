import React from 'react';


class Api extends React.Component {
    constructor() {
        super();
        this.state = {
            temp: '',
            city: '',
            country: '',
            description: '',
            humidity: '',
            error: '',
        }
    }

    getWeather() {
        fetch("")
            .then(response => response.json())
            .then(response => {
                const {data} = response.data
                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    description: data.weather[0].description,
                    humidity: data.main.humidity
                })
            })
            .catch((error) => {
                console.log("Error", error);
            })
    }

    componentDidMount() {
        this.getWeather();
    }
    render() {
        return(
            <div>
                <h1>{this.getWeather}</h1>
            </div>
        )
    }
}

export default Api;