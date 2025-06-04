import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  const getDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });
  };

  return (
    <div className="forecast-wrapper">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-day">
            <p className="day">{getDay(item.dt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
              className="icon"
            />
            <p className="temp">{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;