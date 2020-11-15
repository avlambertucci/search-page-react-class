import React from 'react';
import { VideoItemCard } from './style';


const VideoItem = ({video, onVideoSelect})=>{
   
  return(
    <>
    <VideoItemCard>
      <div className="videoItemContainer" onClick={()=>{onVideoSelect(video)}}>
        <div className="imgContainer">
          <img 
          src={video.snippet.thumbnails.high.url} 
          href={video.snippet.thumbnails.high.url} 
          alt={video.snippet.title}/>
        </div>
        <div>
          <p>{video.snippet.title}</p>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </VideoItemCard>
    </>
  )

}

export default VideoItem