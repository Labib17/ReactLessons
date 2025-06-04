import Forecast from "./Forecast";
import MapView from "../components/MapView";

const Main = ({ weather, city, forecast }) => {
  if (!weather) return null;

  const {
    main: { temp, humidity },
    weather: weatherDetails,
    wind: { speed: windSpeed },
  } = weather;

  const description = weatherDetails[0].description;
  const iconCode = weatherDetails[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const weatherType = weatherDetails[0].main.toLowerCase(); // e.g., "clear", "clouds"

  return (
    <main className={`main-container ${weatherType}`}>
      <div className="top-section">
        <div className="weather-card-wrapper">
          <div className="weather-card">
            <h2>{city}</h2>
            <img src={iconUrl} alt={description} />
            <p className="temp">{temp}°C</p>
            <p style={{ textTransform: "capitalize" }}>{description}</p>
            <div className="details">
              <p>💧 Humidity: {humidity}%</p>
              <p>🌬️ Wind: {windSpeed} m/s</p>
            </div>
          </div>
        </div>

        <div className="map-wrapper">
          <MapView
            lat={weather?.coord?.lat}
            lon={weather?.coord?.lon}
            city={weather?.name}
          />
        </div>
      </div>

      {forecast && (
        <div className="forecast-below">
          <Forecast forecast={forecast} />
        </div>
      )}
    </main>
  );
};

export default Main;

