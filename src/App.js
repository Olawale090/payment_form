import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <div className="App">
      <Nav/>
      <PaymentForm/>
      {/* New project loading */}
    </div>
  );
}

export default App;
