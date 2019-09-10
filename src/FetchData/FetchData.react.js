import React from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';

class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            result: {},
            isLoaded: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        
        fetch(this.props.urlMode).then(data=>data.json()).then(data=> {this.setState({result: data, isLoaded: true})});
    }

    

    


    
    render() { 
        if(this.props.searchMode === 'SearchDriver'){
            if(this.state.isLoaded){
                return (
                    <div >
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>
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
                                {  
                                    this.state.result.items.map((eachItem,index)=>{
                                        return <tr key={index}>
                                            <td>{index}</td>
                                            <td>{eachItem.Id}</td>
                                            <td><img className="img-thumbnail" alt="driver" src={eachItem.avatar_url} height="100" width="100"></img></td>
                                            <td>{eachItem.Name}</td>
                                            <td><button type="button" className="btn btn-secondary" onClick={this.props.setDriver(eachItem.id)} label="user">Book Driver</button></td>
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
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>   
                    </div>
                );
            }
        }
        else{
            if(this.state.isLoaded){
                return (
                    <div >
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
                                    this.state.result.items.map((eachItem,index)=>{
                                        
                                        return <tr key={index}>
                                            <td>{index}</td>
                                            <td>{eachItem.id}</td>
                                            <td>{eachItem.name}</td>
                                            <td>{eachItem.detail1}</td>
                                            <td>{eachItem.detail1}</td>
                                            <td><button type="button" className="btn btn-secondary" onClick={this.props.setCar(eachItem.id)} label="car">Book Driver</button></td>
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
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>   
                    </div>
                );
            }
        }
    }
}
   
const mapDispatchToProps = (dispatch) => {
    return {
        setDriver: (id) => {
            dispatch(setDriver(id));
        },
        setCar: () =>{
            dispatch(setCar(id));
        }
    }
}


const mapStateToProps = (state) =>{
    return{
        searchMode: state.searchMode,
        urlMode: state.urlMode

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);

