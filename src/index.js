import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import VideoList from './components/video_list'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDGeVlHalFocX--YAAxFZNFqRaUCiGds8w'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { videos: [], term: 'kevin owens' }
  }

  search(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({videos, term})
    })
  }

  onTermChanged(term) {
    this.search(term)
  }

  render() {
    return ( 
      <div>
        <SearchBar onTermChanged={(term) => this.onTermChanged(term)} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))