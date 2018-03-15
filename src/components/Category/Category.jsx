import React from 'react';
import './Category.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferenceValue: props.weights,
      selected: false,
    };
  }

  render() {
    // console.log('RERENDER', this.state);
    return (
      <div className="category-main">
        <button
          className="category-button"
          style={{ background: this.state.selected ? 'green' : 'white' }}
          onClick={() => {
            const newValue = !this.state.selected;
            this.setState({ selected: newValue });
            console.log('newValue: ', newValue);
            console.log(this.state, 'here on click');
            if (!newValue) {
              this.props.modifyWeights(this.props.index, undefined);
            } else {
              this.props.modifyWeights(this.props.index, this.state.preferenceValue);
            }
        }}
        >
          {this.props.name}
        </button>
        <input
          type="number"
          className="category-input"
          min="1"
          max="10"
          // value={this.state.preferenceValue}
          style={{ background: this.state.selected ? 'white' : 'lightgrey' }}
          onChange={(elem) => {
            const index = this.props.index;
            const newValue = elem.target.value;
            this.props.modifyWeights(index, newValue);
            this.setState({
              preferenceValue: newValue,
            }, () => {
              console.log('here: ', this.state);
              console.log('changed preferencValue: ', this.state.preferenceValue);
            });

            // console.log('weigts: ', this.props.weights);
          }}
          disabled={!this.state.selected}
        />
      </div>
    );
  }
}

export default Category;

