import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) { 
    super(props)
  }

  render() {
    return (
      <div>
        <input onChange={event => this.props.onTermChanged(event.target.value)}
           />
      </div>
    )
  }
}

export default SearchBar