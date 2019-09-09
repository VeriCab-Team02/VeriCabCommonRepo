import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './Navigation.css';
import Drivers from '../Drivers/Drivers.react';
import Users from '../Users/Users.react';
import ShowDrivers from '../ShowDrivers/ShowDrivers.react';


const Navigation = () => {

    return (
        <div className='navigation_wrapper'>
             <Switch>
                    <Route path="/drivers" component={Drivers}></Route>
                    <Route path="/users" component={Users}></Route>
                    <Route path="/viewDrivers" component={ShowDrivers}></Route>
                    {/* <Route path="/addDriver" component={AddDrivers}></Route> */}
             </Switch>
        </div>
    );

}

export default Navigation;