import React, { useState } from 'react';



export function SortingExample1() {
    const initialData = ['A', 'B', 'C', 'D', 'E', 'F'];
    const sortedData = [...initialData].sort();
  //   const [data, setData] = useState(initialData);

  //   const handleSortAscending = () => {
  //     const sortedData = [...data].sort();
  //     setData(sortedData);
  //   };

  //   const handleSortDescending = () => {
  //     const sortedData = [...data].sort().reverse();
  //     setData(sortedData);
  //   };

    return (
      <div>
        <h1>Sorted Items:</h1>
        {/* <button onClick={handleSortAscending}>Sort Ascending</button>
        <button onClick={handleSortDescending}>Sort Descending</button> */}
        <ul>
          {sortedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }




export function SortingExample2() {
  const initialData = [3, 1, 2, 4, 5, 6, 7, 8, 9, 10];


   const [data, setData] = useState(initialData);

  const handleSortAscending = () => {
    const sortedData = [...initialData].sort((a, b) => a - b);
     setData(sortedData);
  };

  const handleSortDescending = () => {
    const sortedData = [...initialData].sort((a, b) => b - a);
      setData(sortedData);
  };

  return (
    <div>
      <h1>Sorted Items:</h1>
      <button onClick={handleSortAscending}>Sort Ascending</button>
      <button onClick={handleSortDescending}>Sort Descending</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}