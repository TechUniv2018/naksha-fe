import React from 'react';
import Category from './Category';
import './index.css';

class DisplayCategory extends React.Component {
  render() {
    // console.log('Data: ', this.props.data);
    // console.log('Weights: ', this.props.weights);
    const CategoryCard = this.props.data.map((elem, index) => {
    //   console.log('elem, index: ', elem, this.props.weights[index]);
      const someVar = 0;
      return (<Category
        name={elem}
        index={index}
        key={index}
        weights={this.props.weights[index]}
        modifyWeights={this.props.modifyWeights}
      />
      );
    });
    console.log('************');
    return (<div>{CategoryCard}</div>);
  }
}

export default DisplayCategory;
