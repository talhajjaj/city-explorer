import React from 'react';
import axios from 'axios';
import {Button , Form} from "react-bootstrap";
// npm install dotenv


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData:{},
      searchQuery:'',
      showMap: false
    
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

  
  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <Button onClick={this.getLocation}>Explore</Button>
        <Form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city'/>
        </Form>

        <p>City Name: {this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>

        {this.state.showMap && 
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPOLRER_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=1-18`} />
        }      
        
      </div>
    )
  }
}

export default App;