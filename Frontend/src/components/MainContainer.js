import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  
  const movies = useSelector((store)=>store.MovieReducer.nowPlaying);  
  
  if(movies.length===0){return;}

  const mainMov = movies[0];
  console.log('mainMov',mainMov);
  return (
    <div>
        <VideoContainer 
          id={mainMov?.id} 
          original_title={mainMov?.original_title} 
          overview={mainMov?.overview}
        />
    </div>
  )
}

export default MainContainer