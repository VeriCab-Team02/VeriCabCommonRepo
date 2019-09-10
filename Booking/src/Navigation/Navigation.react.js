import React from 'react';
import  {Route,Switch}  from 'react-router-dom';
import  SetSearch  from '../SetSearch/SetSearch.react';

class Navigation extends React.Component {
    

    render() {
        return (
            <div >
            <main>
                <Switch>
                <Route exact path="/"  component={SetSearch}></Route>
                <Route exact path="/search"  component={SetSearch}></Route>
                </Switch>
            </main>
        </div>
        );
    }
}

export default Navigation;