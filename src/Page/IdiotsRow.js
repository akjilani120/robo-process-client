import React from 'react';
import {Howl, Howler , seek} from 'howler';
const IdiotsRow = ({song , index}) => {
    const {audioSong , songTitle , singer , actorMale , movieName , image } = song
    const soundHandle =(src ) =>{             
        const sound = new Howl({
            src ,
            html5: true         
           
          });
         
      sound.play();
        
       
         
    }
    const handlePause = (src) => {
        const sound = new Howl({
            src ,
            html5: true ,      
            mute: true
          });         
        sound.pause()
       
      }
    Howler.volume(0.5);
    return (
        <tr className='row-head' onClick={() =>soundHandle(audioSong ) }  >
        <th>{index + 1}</th>        
        <td ><img className='song-image' src={image} alt="song Image" /></td>        
        <td>{songTitle}</td>
        <td>{singer}</td>
        <td>{actorMale}</td>       
        <td>{movieName}</td>
        
    </tr>
    );
};

export default IdiotsRow;