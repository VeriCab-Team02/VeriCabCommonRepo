import React from 'react';

import './Drivers.css';
import {Link} from 'react-router-dom';

const Drivers = () => {

    return (
        <div className='drivers_wrapper'>
            <button class="btn btn-light"><Link to="/addDriver">Add driver</Link></button>
            <button class="btn btn-light"><Link to="/viewDrivers">View drivers</Link></button>
        </div>
    );

}

export default Drivers;