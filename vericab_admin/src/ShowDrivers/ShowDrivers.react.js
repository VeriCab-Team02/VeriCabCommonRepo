import React from 'react';
import { connect } from 'react-redux';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
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
                            return <div className="card cardStyle shadow p-3 mb-5" key={index}>
                        {/* <div class="card-header"> </div> */}
                        <div className="card-body" >
                                <div className="row">
                                    <h6 className="DateInfoStyle col"> {eachDriver.id}  {eachDriver.name} </h6>
                                    {/* <h6 className="DateInfoStyle"> {eachDriver.name}</h6> */}
                                   
                                    <Button color="default" id="toggler1" style={{ marginBottom: '1rem' }}> ViewDetails </Button>
                                        
                                        
                                    <button onClick={()=>props.delete(eachDriver.id)}>Delete</button>
                                </div>

                                {/* <div id="display" className="collapse">
                                    helllooo
                                </div> */}
                        </div>
                        <UncontrolledCollapse toggler="#toggler1" key={index}>
                                <Card>
                                    <CardBody>
                                        <div className="row">
                                            <div className="col">Name : {eachDriver.gender}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col">Rating : {eachDriver.rating}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col">Email : {eachDriver.email}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col">Phone Number : {eachDriver.phoneNumber}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col">DOB : {eachDriver.dob}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col">Driver License No : {eachDriver.licenseNumber}</div>
                                        </div>
                                    </CardBody>
                                </Card>
                         </UncontrolledCollapse>
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