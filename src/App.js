import React from 'react';
import axios from 'axios';
import {Button , Form} from "react-bootstrap";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData:'',
      searchQuery:'',
      showMap: false,
      ErrorMessage: false
    }
  }

  getLocation = async (event) => {
    event.preventDefault();

    // await this.setState({
    //   searchQuery: e.target.city.value
    // })

    console.log('',this.state.searchQuery)

    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.370701c55ed7503519f7418b1098f8d2&q=${this.state.searchQuery}&format=json`;
    
    try {
      let resData = await axios.get(url);
      console.log(resData)
      console.log(resData.data)
      console.log(resData.data[0])
  
      this.setState({
        cityData: resData.data[0],
        showMap:true
      })
    } catch {
      this.setState({
        ErrorMessage: true,
        showMap:false
      })
    }

  }
  

  updateSearch= (event)=>{
this.setState({
        searchQuery: event.target.value
      })
  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        {/* <Button onClick={this.getLocation}>Explore</Button> */}
        <Form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city'onChange={this.updateSearch}/> 
          <input type='submit' value='get City data'/>
        </Form>

        <p>City Name: {this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>

        {this.state.showMap && 
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=pk.370701c55ed7503519f7418b1098f8d2&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=1-18`} />
        }      

        {this.state.showErrorMessage &&
        <p>something went wrong in getting data from locationiq</p>
        }
        
      </div>
    )
  }
}

export default App;