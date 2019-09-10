import React from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';
import { setCarId, setDriverId, setCarModeActive, setDriverModeActive } from '../store';
class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            error: null,
            result: {},
            isLoaded: false
        }
      
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(){
        if(this.props.searchMode === 'SearchDriver'){
        console.log('driver called');
        fetch(this.props.driverUrl).then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true});},(error) => {
            this.setState({
              isLoaded: true,
              error
            });
          });
          this.props.setDriverModeActive();
          console.log(this.state.result);
        }
        else{

            console.log('car called');
            fetch(this.props.carUrl).then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true});},(error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              });
              this.props.setCarModeActive();
              console.log(this.state.result);
        }
        
    }
    
    render() { 
        if(this.props.searchMode === 'SearchDriver'){
            if(this.state.error){
                return <div>Error: {this.state.error.message}</div>;
            }
            else if(this.state.isLoaded){
                return (
                    <div >
                         
                        <Table className='table table-striped' variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(this.state.result)}
                                {  
                                    this.state.result.map((eachItem,index)=>{
                                        return <tr key={index}>
                                            <td>{index}</td>
                                            <td>{eachItem.id}</td>
                                            <td><img className="img-thumbnail" alt="driver" src={eachItem.avatar_url} height="100" width="100"></img></td>
                                            <td>{eachItem.Name}</td>
                                            <td><button type="button" className="btn btn-secondary" onClick={() => this.props.setDriverId(eachItem.id)} label="driver">Book Driver</button></td>
                                            </tr>
                                    })
                                }
                            </tbody>
                        </Table>   
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Driver Search</button>   
                    </div>
                );
            }
        }
        else if (this.props.searchMode === 'SearchCar'){
            if(this.state.error){
                return <div>Error: {this.state.error.message}</div>;
            }
            else if(this.state.isLoaded){
                return (
                    <div >
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search Car</button> 
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Car Id</th>
                                    <th>Car Owner</th>
                                    <th>Details1</th>
                                    <th>Details2</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.result.map((eachItem,index)=>{
                                        return <tr key={index}>
                                            <td>{index}</td>
                                            <td>{eachItem.id}</td>
                                            <td>{eachItem.name}</td>
                                            <td>{eachItem.detail1}</td>
                                            <td>{eachItem.detail2}</td>
                                            <td><button type="button" className="btn btn-secondary" onClick={() => this.props.setCarId(eachItem.id)} label="car">Book Car</button></td>
                                            </tr>
                                    })
                                }
                            </tbody>
                        </Table>  
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search Car</button>   
                    </div>
                );
            }
        }
    } 
}
   
const mapDispatchToProps = (dispatch) => {
    return {
        setDriverId: (id) => {
            dispatch(setDriverId(id));
        },
        setCarId: (id) =>{
            dispatch(setCarId(id));
        },
        setCarModeActive: () => {
            dispatch(setCarModeActive);
        },
        setDriverModeActive: () => {
            dispatch(setDriverModeActive);
        }
        
    }
}


const mapStateToProps = (state) =>{
    return{
        searchMode: state.searchMode,
        driverUrl: state.driverUrl,
        carUrl: state.carUrl,
        carType: state.carType
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);

