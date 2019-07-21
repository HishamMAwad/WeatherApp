import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios'
import './App.css';

const API_KEY = '1c326e22e567bcded19e7c6952463888';


class App extends Component{


  state = {
    city: '',
    country: '',
    temp: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log(city,country);

    if(city && country){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1c326e22e567bcded19e7c6952463888`)
      .then(res => {
        const TEMP = ((res.data.main.temp) - 273.15);
        this.setState({
          city: res.data.name,
          country: res.data.sys.country,
          temp: TEMP.toFixed(1),
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description,
          error: ''
        })
      })
    }else{
      this.setState({
        city: '',
        country: '',
        temp: '',
        humidity: '',
        description: '',
        error: "Please Enter Correct Data"
      })
    }

   /* const api = await fetch("http://api.openweathermap.org/data/2.5/weather?q=cairo&appid=1c326e22e567bcded19e7c6952463888");
    const data = await api.json();
    console.log(data);*/
  }



  render(){
    return (
      <div className="wrapper">
        <div className='form-container'>
          <Form getWeather={this.getWeather} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;


