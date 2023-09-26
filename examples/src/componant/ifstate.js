import React from 'react';

function UserGreeting(props) {
  // Assuming you have a prop called 'isLoggedIn' that indicates whether the user is logged in
  const isLoggedIn = props.isLoggedIn;
  const userName = props.userName;

  if (isLoggedIn) {
    return <h1>Welcome back, {userName}!</h1>;
  } else {
    return <h1>Hello, guest!</h1>;
  }
}

export default UserGreeting;