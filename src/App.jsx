import React from 'react';
import './App.css';

import SearchBox from './components/SearchBox';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">NAKSHA</h1>
      <SearchBox onPlaceChanged={console.log} />
    </header>
  </div>
);

export default App;
