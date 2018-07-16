import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: ''};
  }

  render () {
    return (
      <div>
      <style>{`
        .value {
          font-weight: bold;
        }
        `}
        </style>
      <input onChange={event => this.setState({ searchterm: event.target.value })} />
      <p><span className="value">Value of the input:</span> {this.state.searchterm}</p>
      </div>
    );
  }
}

export default SearchBar;
