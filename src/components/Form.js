import React, { Component } from 'react';



const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input id='first-input' type='text' name='city' placeholder='City...'/>
            <br/>
            <input type='text' name='country' placeholder='Country...'/>
            <br />
            <button>Get Weather</button>
        </form>
    )
}

export default Form;