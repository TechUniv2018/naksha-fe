import React from 'react';

import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
// props: onPlaceChanged

import './SearchBox.css';

class SearchBox extends React.Component {
  onPlacesChanged = () => {
    const places = this.searchBox.getPlaces();

    if (places.length > 0) {
      this.props.onPlaceChanged(places[0]);
    }
  }

  render = () => (
    <div className="SearchBox">
      <StandaloneSearchBox
        ref={(searchBox) => { this.searchBox = searchBox; }}
        onPlacesChanged={this.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search for a place..."
          className="SearchBox-input"
        />
      </StandaloneSearchBox>
    </div>
  );
}

export default SearchBox;
