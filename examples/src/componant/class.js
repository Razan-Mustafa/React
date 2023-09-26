// import React, { Component } from 'react';

// class ClassComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello from Class Component!</h1>
//       </div>
//     );
//   }
// }

// export default ClassComponent;




// import React, { useState } from "react";

// // Functional component
// function FunctionalComponent(props) {
//   const [inputValue, setInputValue] = useState(""); // State for input value

//   const handleChange = (e) => {
//     setInputValue(e.target.value); // Update the input value in state
//   };

//   return (
//     <div>
//       <h1>Hello, {inputValue  props.name}!</h1>
//       <p>This is a functional component.</p>
//       <input type="text" placeholder="Enter your name" value={inputValue} onChange={handleChange}
//       />
//     </div>
//   );
// }

// export default FunctionalComponent;





import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // State for input value
    };
  }

  handleChange = (name) => {
    this.setState({ inputValue: name.target.value }); // Update the input value in state
  };

  render() {
    return (
      <div>
        <h1>Hello, { this.state.inputValue || this.props.name}!</h1>
        <p>This is a class component.</p>
        <input type="text" placeholder="Enter your name" value={this.state.inputValue} onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ClassComponent;