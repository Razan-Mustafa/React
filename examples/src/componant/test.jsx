import React from 'react';
import logo from '../logo.svg';

function MyComponent() {
  const imgUrl = logo; // Assuming logo.svg is in the same directory as this component

  return (
    <>
      <h1>Hello, JSX in React!</h1>
      <div>
        <img src={imgUrl} alt="An example image" style={{ width: '100px', height: '100px' }} />
      </div>
    </>
  );
}

export default MyComponent;
