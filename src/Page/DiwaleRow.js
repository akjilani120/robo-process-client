import React, { useState } from 'react';
import {Howl, Howler , seek} from 'howler';
const DiwaleRow = ({song , index}) => {
    const [id , setId] = useState("")
    const [isPlaying, setIsPlaying] = useState(false);
    const {audioSong , songTitle , singer , actorMale , actorFemale , movieName , image, _id} = song
    
    const soundHandle =(src ) =>{             
        const sound = new Howl({
            src,
            html5: true         
           
          });
         
      sound.play(id);
        
       
         
    }
    const handlePause = (src) => {
        const sound = new Howl({
            src,
            html5: true ,      
            mute: true
          });         
        sound.pause()
       
      }
    Howler.volume(0.5);
    return (
        <tr className='row-head' >
        <th>{index + 1}</th>        
        <td onClick={() =>soundHandle(audioSong , setId(_id)) } ><img className='song-image' src={image} alt="song Image" /></td>
         <td onClick={() =>handlePause(audioSong) } >Stop sound</td>
        <td>{songTitle}</td>
        <td>{singer}</td>
        <td>{actorMale}</td>
        <td>{actorFemale}</td>
        <td>{movieName}</td>
        
    </tr>
    );
};

export default DiwaleRow;