import React from 'react';
import weatherDay from './component/weatherDay'
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component{
    render(){
        return(
            <>
               {/* <h3> {this.props.date} </h3>
           

           <p> {this.props.description} </p> */}
           <weatherDay
            description={weatherData.description}
            date={weatherData.date}/>

            </>
        )
    }}            
            
export default Weather