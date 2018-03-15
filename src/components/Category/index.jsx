import React from 'react';
import Category from './Category';
import './index.css';

class DisplayCategory extends React.Component {
  render() {
    // console.log('Data: ', this.props.data);
    // console.log('Weights: ', this.props.weights);
    const CategoryCard = this.props.data.map((elem, index) => (
      <Category
        name={elem}
        key={index}
        weights={this.props.weights[index]}
        modifyWeights={this.props.modifyWeights}
      />
    ));
    return (<div>{CategoryCard}</div>);
  }
}

export default DisplayCategory;
