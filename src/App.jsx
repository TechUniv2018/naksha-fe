import React from 'react';
import DisplayCategory from './components/Category';
import SearchButton from './components/SearchButton';
import './App.css';

const preferenceCombiner = (categories, weights) => {
  const returnObject = [];
  for (let i = 0; i < categories.length; i += 1) {
    const categoryElem = {
      name: categories[i],
      weight: weights[i],
    };
    returnObject.push(categoryElem);
  }
  return returnObject;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
    };
  }

  render() {
    const categoryObject = ['airport', 'atm', 'convenience_store', 'school', 'shopping_mall', 'gym', 'bank',
      'bar', 'movie_theater', 'park', 'pharmacy', 'restaurant', 'police', 'train_station', 'place_of_worship'];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NAKSHA</h1>
        </header>
        <DisplayCategory
          data={categoryObject}
          weights={this.state.weights}
          modifyWeights={(index, newWeight) => {
            const oldWeight = this.state.weights;
            oldWeight[index] = newWeight;
            this.setState({ weights: oldWeight }, () => { console.log('modify weight called: ', this.state.weights); });
        }}
        />
        <SearchButton
          onClick={() => {
          const combinedUserPreference = preferenceCombiner(categoryObject, this.state.weights);
          console.log(combinedUserPreference);
          // send combinedUserPreference to backend
        }}
        />
      </div>
    );
  }
}

export default App;
