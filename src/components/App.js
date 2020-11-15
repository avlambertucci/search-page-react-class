
import React from 'react';
import SearchBar from './Searchbar/index'
import youtube from '../api/youtube'
import VideoList from './VideoList/index';
import VideoDetail from './VideoDetail/index'
import './styles.css'

class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  onTermSubmit = async (term)=>{
    console.log(term)
    const response = await youtube.get('/search',{
      params: {
        q: term
      }
    })
    // console.log(response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }
  onVideoSelect = video =>{
    console.log('from the app', video)
    this.setState({selectedVideo: video})
  }

  render() {
    return(
      <div>
        <SearchBar submit={this.onTermSubmit}/>
        <div className="video-container">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
      </div>
    )
  }
}
export default App