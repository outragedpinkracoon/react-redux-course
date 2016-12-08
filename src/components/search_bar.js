import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) { 
    super(props)
  }

  onInputChanged(event) {
    this.props.onSearchTermChange(event.target.value)
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          onChange={event => this.onInputChanged(event)}
           />
      </div>
    )
  }
}

export default SearchBar