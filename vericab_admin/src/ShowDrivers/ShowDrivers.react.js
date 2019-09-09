import React from 'react';
import { connect } from 'react-redux';

import './ShowDrivers.css';
import { getListByThunk, deleteById } from '../Reducer';





const ShowDrivers = (props) => {
    console.log(props.isLoaded+"show drivers")

    if(!props.isLoaded){
        return(
            <div>  
                <h2>Loading..</h2>
                <button onClick={props.get}>Get data</button>
               
            </div>
        )
    } else{

        return(
    <div>
        {  
                        props.list.map( (eachDriver, index) => {
                            return <div className="card cardStyle shadow p-3 mb-5">
                        {/* <div class="card-header"> </div> */}
                        <div className="card-body" key="index">
                                <div className="row">
                                    <h6 className="DateInfoStyle col"> {eachDriver.id}  {eachDriver.name} </h6>
                                    {/* <h6 className="DateInfoStyle"> {eachDriver.name}</h6> */}
                                    <a href="#display" data-toggle="collapse">View Details</a>
                                    <button onClick={()=>props.delete(eachDriver.id)}>Delete</button>
                                </div>
                        </div>
                        </div>
                        })}
                        </div>
        
        )}

}
                            

const mapStateToProps = (state) => {
    console.log(state.isLoaded+"==============================================")
    return {
        list: state.payload,
        isLoaded: state.isLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(getListByThunk())
        },

        delete: (id) => {
            console.log("delelte  props "+id)
            deleteById(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDrivers);