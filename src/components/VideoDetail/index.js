import React from 'react'
import Spinner from '../Spinner'
import { VideoDetailContainer } from './style'



const VideoDetail = ({video}) => {

  if(!video){
    return (
     <Spinner/>
    )

  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <VideoDetailContainer>
      <div className="video-main">
        <iframe src={videoSrc} title="videoPlayer" ></iframe>
        <div className="video-aside">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
      
    </VideoDetailContainer>
  )
}

export default VideoDetail
