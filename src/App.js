import React, { Component } from 'react';
import axios from 'axios'; 
import CurrentWeather from './components/current';


const Key = "3b84024871aef976d646f09db58974da"; 
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: [],
      currently: [],
      weekly: [],
      forcast: null
    }

  }
  componentWillMount(){
    this.weatherReport();
  }
  weatherReport(lat,lon){
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition((position) => {
      axios.get('https://api.darksky.net/forecast/3b84024871aef976d646f09db58974da/' + position.coords.latitude + ',' + position.coords.longitude)
      .then((response) =>{
        console.log(response)
        this.setState({data:response.data, currently:response.data.currently,weekly:response.data.daily.data,forcast:response.data.daily.summary}, function(){
          console.log(this.state);
        });
      })
      .catch((err) =>{
        console.log(err);
      });
     })
     
   } 
   
  }
  render(){
    return(
      <div>
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
