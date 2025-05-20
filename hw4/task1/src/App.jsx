import { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([0, 2, 5, 6, 256]);

  const addRandomValue = () => {
    const random = Math.floor(Math.random() * 1001); // від 0 до 1000
    setNumbers([...numbers, random]);
  };

  const removeItem = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <button onClick={addRandomValue}>Add random number</button>

        <ul>
          {numbers.map((num, i) => (
            <li key={i}>
              {num} <i onClick={() => removeItem(i)}>X</i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

