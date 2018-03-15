import React from 'react';
import Category from './components/Category';
import SearchButton from './components/SearchButton';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">NAKSHA</h1>
    </header>
    {/* <Category name="ATM" /> */}
    <SearchButton />
  </div>
);

export default App;
