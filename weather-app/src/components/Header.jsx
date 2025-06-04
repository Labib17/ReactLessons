import { useState } from "react";

const topCities = [
  "Kyiv", "Toronto", "London", "New York", "Los Angeles",
  "Tokyo", "Berlin", "Paris", "Sydney", "Oslo", "Ottawa", "Odesa", "Warsaw"
];

const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const today = new Date().toLocaleDateString();

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      const matches = topCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setInput(city);
    setSuggestions([]);
    onSearch(city);
  };

  return (
    <header>
      <div className="header-title">Weather in Your City</div>
      <form className="search-container" onSubmit={handleSubmit} autoComplete="off">
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Enter city"
            value={input}
            onChange={handleInput}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((city, index) => (
                <li key={index} onClick={() => handleSuggestionClick(city)}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit">Search</button>
      </form>
      <div className="header-date">{today}</div>
    </header>
  );
};

export default Header;
