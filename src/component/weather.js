import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <>
            {this.props.date}
            {this.props.description}
            </>
        )
    }}            
            
export default Weather