import React from 'react';


const CurrentWeather = (props) => {
    return(
        <div>
        <div className="card-img-top top"><i className={`wi wi-forecast-io-${ props.currently.icon}`}></i></div>
    <div className="card-body">
            <h3 className="card-title">{props.currently.summary}</h3>
            <p className="card-text">{}</p>
            <h6><a className="link" href="#">Website for the Social Card</a></h6>
        </div>
        </div>
    );
}


export default CurrentWeather;
