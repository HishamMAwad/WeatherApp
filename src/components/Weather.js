import React, { Component } from 'react';



const Weather = (props) => {

    
    return (
        <div className='result'>
        <hr/>
            {
                props.city && <p>City: {props.city}</p>
            }
            {
                props.country && <p>Country: {props.country}</p>
            }
            {
                props.temp && <p>Temprature: {props.temp}</p>
            }
            {
                props.humidity && <p>Humidity: {props.humidity}</p>
            }
            {
                props.description && <p>Description: {props.description}</p>
            }
            {
                props.error && <p>Error: {props.error}</p>
            }
        </div>
    )
}

export default Weather;