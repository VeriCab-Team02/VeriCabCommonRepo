import React from 'react';
import { connect, } from 'react-redux';
import {addDriversBythunk ,eventHandlerCar, eventHandlerDriver} from '../DriverRegisterReducer';
import './DriverRegister.css';


class DriverRegister extends React.Component {   
       
    
    constructor(props) {
        super(props);
        this.state={ carFlag : false,}}


        CarInfo = (e) => {
            let inp = e.target.value;
            console.log(inp);
             this.setState( { carFlag : !this.state.carFlag } )
        }

    render() {
    
    return (
        <div className='DriverRegister' >
            
                <div className="form" >
             <form className="form-horizontal" >
                 <hr/>
                <div className="form-group row">
                    <label className="col-form-label col-sm-2">Name: </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" name="name" placeholder="Enter Username" id="name" onChange={e=>this.props.handleChange(e)} required/>
                    </div>
                </div>   
                    
                <div className="form-group row">
                <label className="col-form-label col-sm-2">Gender: </label>
                     <input type="radio" name="gender" value="Male" onChange={this.props.handleChange} /> Male &nbsp;
                     <input type="radio" name="gender" value="Female" onChange={this.props.handleChange}/> Female &nbsp;
                     <input type="radio" name="gender" value="Other" onChange={this.props.handleChange}/> Other
                </div>
                

                <div className="form-group row">
                    <label className="col-form-label col-sm-2" > DOB:</label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control" name="dob" id="dob" placeholder="Enter DOB" onChange={this.props.handleChange} required />
                    </div>
                 </div>
                
                 <div className="form-group row">
                    <label className="col-form-label col-sm-2">Email:</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.props.handleChange} required />
                    </div>
                 </div>

                 <div className="form-group row">
                    <label className="col-form-label col-sm-2">Username:</label>
                    <div className="col-sm-4">          
                        <input type="text" className="form-control" id="username" placeholder="Enter UserName" name="username" onChange={this.props.handleChange} required />
                    </div>
                 </div>


                 <div className="form-group row">
                    <label className="col-form-label col-sm-2">Password:</label>
                    <div className="col-sm-4">          
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" onChange={this.props.handleChange} required />
                    </div>
                 </div>


                 <div className="form-group row">
                    <label className="col-form-label col-sm-2">Phone Number:</label>
                    <div className="col-sm-4">  
                     <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Phone Number" name="phoneNumber" onChange={this.props.handleChange} required/>
                    </div>
                 </div>


                
                <div className="form-group row">
                     <label className="col-form-label col-sm-2">Do you have a car? </label>
                                <input type="radio" name="AskCar" value="true" onChange={this.CarInfo}/>Yes 
                                <input type="radio" name="AskCar" value="false" onChange={this.CarInfo}/> No
                 </div>
                       
                         {this.state.carFlag && 
                     <div>

                            <div className="form-group row" >
                                <label className="col-form-label col-sm-2">Car Type</label>
                                <select className="col-sm-2">
                                     <option value="Mini" name="type" onChange={this.props.handleChangeCar}>Mini</option>
                                    <option value="Micro" name="type" onChange={this.props.handleChangeCar}>Micro</option>
                                    <option value="Sedan" name="type" onChange={this.props.handleChangeCar}>Sedan</option>
                                    <option value="SUV" name="type" onChange={this.props.handleChangeCar}>SUV</option>
                                </select>
                             <br />
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-sm-2">Car Manufacturer</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="manufacturer" onChange={this.props.handleChangeCar} required/> 
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-sm-2">Car Variant</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="variant" onChange={this.props.handleChangeCar} required />
                                </div>
                            </div> 

                            <div className="form-group row">
                               <label className="col-form-label col-sm-2">Car Seats</label>
                               <div className="col-sm-4">
                                <input type="text" className="form-control"name="noOfSeats" onChange={this.props.handleChangeCar} required /> 
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-sm-2">Car Registration No</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="registrationNumber" onChange={this.props.handleChangeCar} required/> 
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-sm-2">Rate per Km</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" name="ratePerKm" onChange={this.props.handleChangeCar} required/> 
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-sm-2">Driver License No</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="licenseNumber" onChange={this.props.handleChangeCar} required/> 
                                </div>
                            </div>

                         </div>
                            }
                          {!this.state.carFlag && 
                         
                          <div className="form-group row">
                            <label className="col-form-label col-sm-2">Driver License No</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" name="licenseNumber" id="licenseNumber" onChange={this.props.handleChange}/> 
                            </div>
                          </div> }

                          <hr />
              
                <center> <button type="submit" className="btn btn-success" onClick={this.props.get}>Register</button> </center>
                    
            </form>
            </div>
            </div>
    );

}
}




const mapStateToProps = (state) => {

    
    return {
        response: state.statusCode
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(addDriversBythunk())
        },

        handleChange:(event) =>{
            eventHandlerDriver(event)
        },

    

        handleChangeCar:(event)=>{
            eventHandlerCar(event)
         
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DriverRegister);