import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: ''};
  }

  render () {
    return <input onChange={event => this.setState({ searchterm: event.target.value })} />;
  }
}

export default SearchBar;
