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
      <input
      value = {this.state.searchterm}
      onChange={event => this.setState({ searchterm: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
