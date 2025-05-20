import { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandom = () => {
    const number = Math.floor(Math.random() * 101); // від 0 до 100
    setRandomNumber(number);
  };

  return (
    <>
      <div>
        <h1>Випадкове число:</h1>
        <h2>{randomNumber !== null ? randomNumber : 'Натисни кнопку'}</h2>

        <button onClick={generateRandom}>Згенерувати число</button>
      </div>
    </>
  );
}

export default App;

