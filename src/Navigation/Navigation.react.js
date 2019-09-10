import React from 'react';
import  {Route,Switch}  from 'react-router-dom';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
            <main>
                <Switch>
                <Route exact path="/"  component={Search}></Route>
                <Route exact path="/search"  component={Search}></Route>
                </Switch>
            </main>
        </div>
        );
    }
}

export default Navigation;