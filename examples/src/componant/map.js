import React from 'react';

function MappingExample() {
  const data = ['HTML ', 'CSS', 'JS'];

  return (
    <div>
      <h1>List of Items:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MappingExample;