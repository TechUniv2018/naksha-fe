import React from 'react';
import './Category.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferenceValue: props.weights,
      selected: 0,
    };
  }

  render() {
    return (
      <div className="category-main">
        <button
          className="category-button"
          style={{ background: this.state.selected ? 'green' : 'white' }}
          onClick={() => {
            const newValue = !this.state.selected;
            this.setState({ selected: newValue, preferenceValue: 0 }, () => { console.log('selected: ', this.state.selected); });
        }}
        >
          {this.props.name}
        </button>
        <input
          type="number"
          className="category-input"
          min="1"
          max="10"
          value={this.state.preferenceValue}
          style={{ background: this.state.selected ? 'white' : 'lightgrey' }}
          onChange={(elem) => { this.setState({ preferenceValue: elem.target.value }, () => { console.log('value: ', this.state.preferenceValue); }); }}
          disabled={!this.state.selected}
        />
      </div>
    );
  }
}

export default Category;

