import React from 'react';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Без JSX версія'),
    React.createElement('p', null, 'Це параграф, створений без JSX.'),
    React.createElement('img', {
      src: 'https://commercetools.com/assets/blog/business-blog/2023-blogpost-frontend-solution.png',
      alt: 'Зображення',
    })
  );
}

export default App;