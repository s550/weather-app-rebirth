import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// to make props work you must set the name of the state to the current state
// check below in current weather for an example.

const Key = "3b84024871aef976d646f09db58974da";
class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currently: [],
      weekly: [],
      forcast: null,
      dTemp: [],
      wTemp: []
    }

  }
  componentDidMount() {
    this.weatherReport();
  }
  weatherReport(lat, lon) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.darksky.net/forecast/3b84024871aef976d646f09db58974da/' + position.coords.latitude + ',' + position.coords.longitude)
          .then((response) => {
            console.log(response)
            this.setState({ dTemp: response.data.currently.temperature, data: response.data, currently: response.data.currently, weekly: response.data.daily.data, forcast: response.data.daily.summary }, function () {
              console.log(this.state);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })

    }

  }

  showTemp(ans) {
    this.setState({ dTemp: ans }, this.weatherReport);
  }
  render() {
    const trueTemp = Math.round(this.state.currently.temperature);
    const date = new Date().toLocaleDateString();
    return (
      <div className="columns">
        {/* <div className="parent"> */}

        <div className="column main-top">
          <div className="card card-logic">
            <header className="card-header">
              <h1 className="card-header-title">Right Now: </h1>
            </header>
            <div className="card-content">
              <div className="content">
                <i className={`center-main wi wi-forecast-io-${this.state.currently.icon}`}></i>
                <h1 className="daily">{trueTemp}&#xb0;</h1>
              </div>
              <div className="content">
                <h3 className="">{this.state.data.timezone}</h3>
                <h4><span className="">Current Conditions: </span>{this.state.currently.summary}</h4>
                <h4><span>Humidity: </span>{Math.round(this.state.currently.humidity * 100)}%</h4>
                <h4><span>Dew Point: </span>{Math.round(this.state.currently.dewPoint)}&#xb0;</h4>

              </div>
            </div>
            {/* <h1>Right Now: </h1>
            <div className="daily-top"><i className={`center-main wi wi-forecast-io-${ this.state.currently.icon}`}></i>
            <h1 className="daily">{trueTemp}&#xb0;</h1>
            </div>

                <h3 className="card-title">{this.state.data.timezone}</h3>
                <h4><span className="desc">Current Conditions: </span>{this.state.currently.summary}</h4>
                <h4><span>Humidity: </span>{this.state.currently.humidity * 100}%</h4>
                <h4><span>Dew Point: </span>{Math.round(this.state.currently.dewPoint)}&#xb0;</h4>
                <h4 className="adj"><Link className="bttn" to="/days">Weekly Forcast</Link></h4> */}
            <footer className="card-footer">
              <h4 className="adj card-footer-item"><Link className="bttn" to="/days">Weekly Forcast</Link></h4>
            </footer>

          </div>
        </div>

        {/* </div> */}
      </div>
    );
  }
}


export default Forecast;
