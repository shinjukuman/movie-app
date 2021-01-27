import React from 'react';

// function Food(props) {
//   return (<h1>I Like {props.fav}</h1>);
// }

function Food({ fav }) {
  return (<h1>I Like {fav}</h1>);
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
