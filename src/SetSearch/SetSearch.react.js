import React from 'react';
import Search from '../Search/Search.react';
import { setCarMode, setDriverMode } from '../store';
import {connect} from 'react-redux';


class SetSearch extends React.Component {
    

    render() {
        return (
            <div >
                <div className="btn-group align-Center" role="group" aria-label="Basic example"> 
                   <button type="button" className="btn btn-secondary" onClick={this.props.setDriverMode} label="driver">Book Driver</button>
                    <button type="button" className="btn btn-secondary" onClick={this.props.setCarMode} label="car">Book Car</button>
                </div>
                <Search></Search>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDriverMode: () => {
            dispatch(setDriverMode);
        },
        setCarMode: () => {
            dispatch(setCarMode);
        }
    }
}

export default connect(mapDispatchToProps)(SetSearch);