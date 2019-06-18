import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';

class Days extends Component {
    constructor(props){
      super(props);
      this.state ={
        data: [],
        currently: [],
        weekly: [],
        forcast: null,
        dTemp: [],
        wTemp: []
      }
  
    }
    componentDidMount(){
      this.weatherReport();
    }
    weatherReport(lat,lon){
     if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition((position) => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b84024871aef976d646f09db58974da/' + position.coords.latitude + ',' + position.coords.longitude)
        .then((response) =>{
          console.log(response)
          this.setState({dTemp: response.data.currently.temperature, data:response.data, currently:response.data.currently,weekly:response.data.daily.data,forcast:response.data.daily.summary}, function(){
            console.log(this.state);
          });
        })
        .catch((err) =>{
          console.log(err);
        });
       })
  
     }
  
    }
  
    showTemp(ans){
      this.setState({dTemp: ans}, this.weatherReport);
    }
    render(){ 
          const trueTemp = Math.round(this.state.currently.temperature);
          let days = moment(this.state.weekly.time).fromNow();
          const outlook = this.state.weekly.map(day => (
              
                <div key={day.time} className="top">
                <div className="card card-weekly">
                <header className="card-header">
                <h1 className="day card-header-title">{moment.unix(day.time).format('ddd')}</h1>
                </header>
                <div className="card-content">
                  <div className="content">
                  <i className={`mini-top wi wi-forecast-io-${day.icon}`}></i>
                  </div>
                  <div className="content">
                  <p className="sum">{day.summary}</p> 
                  </div>
                </div>
                <footer className="card-footer">
                   <p className="desc card-footer-item">High: {Math.round(day.temperatureHigh)}&#xb0;</p>
                   <p className="desc card-footer-item">Low: {Math.round(day.temperatureLow)}&#xb0;</p>
                </footer>
                    {/* <h1 className="day">{moment.unix(day.time).format('ddd')}</h1>
                    <i className={`mini-top wi wi-forecast-io-${day.icon}`}></i>
                       <p className="sum">{day.summary}</p> 
                   
                        <p className="desc">High: {Math.round(day.temperatureHigh)}&#xb0;</p>
                        <p className="desc">Low: {Math.round(day.temperatureLow)}&#xb0;</p> */}
                        
                    </div>
                 </div>
                
          ));
          return(
              <div className="container">
              <h1 className="return"><Link className="return" to="/">Return to Daily View</Link></h1>
              <div className="parent">
                {outlook}
                
              </div>
              
              
              </div>
          );
      }
    }
  
  
  

export default Days;