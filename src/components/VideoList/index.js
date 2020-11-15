import React from 'react'
import { VideoListSection } from './style'
import VideoItem from '../VideoItem'

const VideoList = ({videos, onVideoSelect}) =>{
  console.log(videos)
  const renderedList = videos.map((video)=>{
    return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>
  })

  

 return(

  <VideoListSection>
    {renderedList}
  </VideoListSection>
 )

}
export default VideoList