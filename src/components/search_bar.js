import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) { 
    super(props)
  }

  render() {
    return (
      <div>
        <input onChange={event => console.log(event.target.value)}
           />
      </div>
    )
  }
}

export default SearchBar