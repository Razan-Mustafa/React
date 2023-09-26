//class

import React from 'react';

class Age extends React.Component{
    state = {
        name:'yousef',
        age:20 
    };

render(){
    return(
    <>
    <h2>
        name: {this.state.name}
    </h2>
    <h2>
        age: {this.state.age}
    </h2>
    </>
    );

}
}

export default Age;





// // function
// import React, { useState } from 'react';

// function Age() {
//   const [age, setAge] = useState(25);

//   return (
//     <h2>
//       age:{age}
//     </h2>
//   );
// }

// export default Age;


// // function
// import React, { useState } from 'react';

// function Age() {


//   const [age, setAge] = useState({ id: 1, name: 'HTML', category: 'Front' },
// );

//   return (
//     <h2>
//       age:{age.id}
//     </h2>
//   );
// }

// export default Age;








// import React from 'react';

// class Age extends React.Component {
//   state = {
//     age: [25, 19],
//   };

//   render() {
//     // Map through the array of ages and render each one separately
//     const ageElements = this.state.age.map((age, index) => (
//       <p key={index}>Age {index + 1}: {age}</p>
//     ));

//     return (
//       <div>
//         {ageElements}
//       </div>
//     );
//   }
// }

// export default Age;
