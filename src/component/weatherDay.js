import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component{
    render(){
        return(
            <>
               <h3> {this.props.date} </h3>
           

           <p> {this.props.description} </p>
            </>
        )
    }}            
            
export default Weather