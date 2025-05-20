import { useState } from 'react';
// import './index.css';

function App() {
  const [color, setColor] = useState('rgb(0,0,0)');

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    setColor(newColor);
    console.log(newColor);

    const root = document.documentElement;
    root.style.setProperty('--dynamic-color', newColor);
  }

  return (
    <>
      <div>
        <p className='colored'>Ми вивчаємо Vite+React</p>
        <button onClick={generateRandomColor}>Змінити колір</button>
      </div>
    </>
  );
}

export default App;
