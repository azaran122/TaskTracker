import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';

function App() {
  const name='Brad';
  const x=false;
  return (
    <div className="container">
      <Header />
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class </h1>
//   }
// }

export default App;
