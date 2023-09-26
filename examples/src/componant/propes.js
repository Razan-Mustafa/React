// import React from 'react';

// function Name(props){

//     return(
//         <div>
//         <h1>Hello,{props.name}! age: {props.age}</h1>
//         </div>
//     );
// }

// export default Name;

import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}! Age: {this.props.age}</h1>
      </div>
    );
  }
}

export default Name;

