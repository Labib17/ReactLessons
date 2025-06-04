import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');

  const api_key = '9fdc65830af2f8785c385f8508bdb26a'; // ← твій ключ

  const handleCitySearch = (cityName) => {
    getWeatherByCity(cityName);
  };

  const getWeatherByCity = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setCity(data.name);

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${api_key}`
        );
        const forecastData = await forecastRes.json();
        if (forecastData && Array.isArray(forecastData.list)) {
          const dailyForecast = forecastData.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 5);
          setForecast(dailyForecast);
        }
      }
    } catch (err) {
      console.error("Помилка при отриманні погоди:", err);
    }
  };

  const getWeatherByCoords = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setCity(data.name);
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
        );
        const forecastData = await forecastRes.json();
        if (forecastData && Array.isArray(forecastData.list)) {
          const dailyForecast = forecastData.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 5);
          setForecast(dailyForecast);
        }
      }
    } catch (err) {
      console.error("Помилка при отриманні погоди за координатами:", err);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherByCoords(latitude, longitude);
        },
        () => {
          getWeatherByCity("Toronto");
        }
      );
    } else {
      getWeatherByCity("Toronto");
    }
  }, []);

  return (
    <div className="app">
      <Header onSearch={handleCitySearch} />
      <Main city={city} weather={weather} forecast={forecast} />
      <Footer />
    </div>
  );
};

export default App;
