import React from 'react';

const IdiotsRow = ({song , index}) => {
    const {audioSong , songTitle , singer , actorMale , movieName} = song
    return (
        <tr>
        <th>{index + 1}</th>
        <td><audio controls src={audioSong}></audio></td>
        <td>{songTitle}</td>
        <td>{singer}</td>
        <td>{actorMale}</td>        
        <td>{movieName}</td>
        
    </tr>
    );
};

export default IdiotsRow;