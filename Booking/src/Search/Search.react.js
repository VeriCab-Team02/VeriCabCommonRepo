import React from 'react';
import { setCarType  } from '../store';
import {connect} from 'react-redux';

import FetchData from '../FetchData/FetchData.react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLoaded: false
        }
      
       
        
    }
    
    onChange= (event) =>{
        this.props.setCarType(  event.target.value );
    
     }

    

    render() {
            if(this.props.searchMode === 'SearchDriver'){
                return(
                    <div>
                        <h1>driver</h1>
                        <FetchData></FetchData>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <div className="input-group">
                            <span className="input-group-text" id="">{this.props.searchMode}</span><br></br><br></br>
                            <input type="text" id="value" className="form-control" onChange={this.onChange}></input>
                        </div>
                        <FetchData></FetchData>
                    </div>
                    
                )
            }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCarType: (type) => {
            dispatch(setCarType(type));
        }

    }
}

const mapStateToProps = (state) =>{
    return{
        searchMode: state.searchMode,
        urlMode: state.urlMode,
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
