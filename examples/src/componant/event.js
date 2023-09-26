import React, { useState } from 'react';

function Event() {
  const [initialData, setInitialData] = useState('Do you know what?');

  const Click = () => {
    if (initialData === 'Do you know what?') {
      setInitialData('You have to complete the masterpiece');
    } else {
      setInitialData('Do you know what?');
    }

    // setInitialData(initialData === 'Do you know what?' ? 'You have to complete the masterpiece' : 'Do you know what?');
  };

  return (
    <div>
      <h1>Event Example</h1>
      <h3>{initialData}</h3>
      <button onClick={Click}>Click me</button>
    </div>
  );
}

export default Event;
