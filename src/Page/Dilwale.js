import React, { useEffect, useState } from 'react';
import DiwaleRow from './DiwaleRow';

const Dilwale = () => {
    const [dilwale, setDiwale] = useState([])
    useEffect(() => {
        fetch("https://stormy-tundra-05584.herokuapp.com/dilwale")
            .then(res => res.json())
            .then(data => setDiwale(data))
    }, [])
    return (
        <div className='table-responsive'>
            <table class="table table-success table-striped px-2 text-center table-hover ">
                <thead>
                    <tr className=''>
                        <th scope="col">No</th>
                        <th scope="col">Song</th>
                        <th scope="col">Song Title</th>
                        <th scope="col">Singer </th>
                        <th scope="col"> Male Actor </th>
                        <th scope="col"> Female Actor</th>
                        <th scope="col"> Movie Name</th>
                    </tr>
                </thead>
                <tbody>                 
                {
                dilwale.map((song, index) => <DiwaleRow song={song} index={index} key={song._id}></DiwaleRow>)
                 }
                </tbody>
            </table>

           
        </div>
    );
};

export default Dilwale;