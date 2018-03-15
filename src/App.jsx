import React from 'react';
import './App.css';

import SearchBox from './components/SearchBox';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">NAKSHA</h1>
      <div className="App-category">Homes</div>
    </header>
    <SearchBox onPlaceChanged={console.log} />
  </div>
);

export default App;
