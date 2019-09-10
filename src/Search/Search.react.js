import React from 'react';

import FetchData from '../FetchData/FetchData.react';

class Search extends React.Component {
    
    onChange= (event) =>{
        this.props.setCarType(  event.target.value );
    
     }

    render() {
            if(searchMode === 'searchDriver'){
                return(
                    <div>
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
        setCarType: () => {
            dispatch(setCarType);
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
