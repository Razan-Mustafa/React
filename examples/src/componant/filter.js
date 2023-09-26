import React, { useState } from 'react';

function FilteringExample() {
  const initialData = [
    { id: 1, name: 'HTML', category: 'Front' },
    { id: 2, name: 'CSS', category: 'Front' },
    { id: 3, name: 'JS', category: 'Front' },
    { id: 3, name: 'PHP', category: 'Back' },
    { id: 3, name: 'Python', category: 'Back' },
    { id: 3, name: 'C++', category: 'Back' },
    { id: 3, name: '.net', category: 'Back' },
   
  ];

  const [data, setData] = useState(initialData);
  const filterCategory = 'Front';

  const filteredData = data.filter(item => item.category === filterCategory);

  return (
    <div>
      <h1>Filtered language :</h1>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name} / {item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteringExample;