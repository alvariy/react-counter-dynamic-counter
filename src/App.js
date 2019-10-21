import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './CounterGroup/CounterGroup';
import InputNumbers from './components/InputNumbers';
import Counter_Total from './components/Counter_Total';

class App extends React.Component {
  
constructor(props) {
  super(props);
  this.state = {number: 0 };
}

  render(){

    
    return (
      <div className="App">
        <header className="App-header">
        <CounterGroup defaultCounts={3} />
        </header>
      </div>
    );
  }
 
}

export default App;
