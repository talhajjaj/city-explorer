import React from 'react';
// import axios from 'axios';
// import  Form from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Weather from './component/weather';



class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cityData:'',
  //     searchQuery:'',
  //     showMap: false,
  //     ErrorMessage: false,
  //     showWeather:false,
  //     searchData:[], 
  //   }
  // }

//   getLocation = async (event) => {
//     event.preventDefault();

//     // await this.setState({
//     //   searchQuery: e.target.city.value
//     // })

//     console.log('',this.state.searchQuery)

//     let url = `https://eu1.locationiq.com/v1/search.php?key=pk.370701c55ed7503519f7418b1098f8d2&q=${this.state.searchQuery}&format=json`;
    
//     try {
//       let resData = await axios.get(url);
//       console.log(resData)
//       console.log(resData.data)
//       console.log(resData.data[0])
  
//       this.setState({
//         cityData: resData.data[0],
//         showMap:true
        
//       })
//  let weatherUrl =`https://localhost:3001/weatherInfo?searchData=${this.state.searchQuery}&lat=40.7484284&lon=-73.9856546198733`
//       let resWeather = await axios.get(weatherUrl);
//       console.log(resWeather)
//       console.log(resWeather.data)
//       console.log(resWeather.data[0])
  
//       this.setState({
//         cityData: resData.data[0],
//         showMap:true,
//         ErrorMessage:false,
//         searchData:resWeather.data
        
        
//       })
//       console.log (this.state.searchData)
      
//     } catch {
//       this.setState({
//         ErrorMessage: true,
//         showMap:false
//       })
//     }

//   }
  

//   updateSearch= (event)=>{
// this.setState({
//         searchQuery: event.target.value
//       })
//   }



  render() {
    return (
      <div>
        {/* <h1 style={{textAlign:"center"}}>City Explorer </h1>
        {/* <Button onClick={this.getLocation}>Explore</Button> */}
        {/* <Form onSubmit={this.getLocation}style={{ width: "60%", marginLeft: "10%", marginRight: "40%" , marginTop:"5%"}}>
          <input type='text' placeholder='city name' name='city'onChange={this.updateSearch}/> 
          <input type='submit' value='Explore' */}
  {/* /> */}
        {/* </Form> */}

        {/* // <p style={{ marginLeft: "10%", marginRight: "40%", marginTop:"2%",borderBlockStyle:'outset'}}>City Name: {this.state.cityData.display_name}
        // <br></br>
        // <br></br>


        // latitude :{this.state.cityData.lat}
        // <br></br>
        // <br></br> */}


        {/* longitude :{this.state.cityData.lon}</p>

         {this.state.showMap && 
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=pk.370701c55ed7503519f7418b1098f8d2&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=1-18`} />
        }      

        {this.state.showErrorMessage &&
        <p>something went wrong in getting data from locationiq</p>
        }
        

      <p> city name:{this.state.cityData.display_name}</p>
      {/* <Weather searchData={this.state.searchData}/> */}
      {/* {this.state.searchData.map(weatherData => { */}
          {/* // return <Weather description={weatherData.description} date={weatherData.date} />})} */} 

      </div>
      
      
    )
  }
}

export default App;