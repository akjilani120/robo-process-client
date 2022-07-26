import React ,{ useEffect, useState } from 'react';
import IdiotsRow from './IdiotsRow';

const Idiots = () => {
    const [idiots, setIdiots] = useState([])
    useEffect(() => {
        fetch("https://stormy-tundra-05584.herokuapp.com/idiots")
            .then(res => res.json())
            .then(data => setIdiots(data))
    }, [])
    return (
        <div className='table-responsive'>
        <table class="table bg-white table-striped px-2 text-center table-hover ">
            <thead>
                <tr className=''>
                    <th scope="col">No</th>
                    <th scope="col">Song</th>
                    <th scope="col">Song Title</th>
                    <th scope="col">Singer </th>
                    <th scope="col"> Actor </th>                    
                    <th scope="col"> Movie Name</th>
                </tr>
            </thead>
            <tbody>                 
            {
            idiots.map((song, index) => <IdiotsRow song={song} index={index} key={song._id}></IdiotsRow>)
             }
            </tbody>
        </table>

       
    </div>
    );
};

export default Idiots;