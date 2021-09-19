import React from 'react'
import {trancate} from '../../helpers/index'
import  './videocard.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonIcon from '@mui/icons-material/Person';
const VideoCard = ({id,url, artist, title}) => {
    return (
        
            <a href="#" className="video" >
                  <div className="video__overly"><PlayCircleIcon sx={{ fontSize: 50, color:'#54e6af' }}/> </div>  
                  <img className="video__img" src={url}  key={id} alt={title} loading="lazy"/>
                  <div className="video__artist"> 
                  <PersonIcon sx={{ fontSize: 20, color:'#fff' }}/>
                     <h1>{ trancate(artist, 20)} </h1>
                 </div>
                  <div className="video__title" > 
                     <MusicNoteIcon sx={{ fontSize: 20, color:'#fff' }}/>   <p> { trancate(title, 20)}</p> 
                  </div>
            </a>
    
    )
}

export default VideoCard
