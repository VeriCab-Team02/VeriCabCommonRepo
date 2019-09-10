import React from 'react';
import {Card, CardBody} from 'reactstrap';
import './trial1.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import cab1 from '../../src/cab1.jpeg';
const trial1 = () => {

    return (
        <div className='trial1_wrapper'>
                             <Card className="cardStyle">
                                    <CardBody className="cardBodyStyle">
                                        <div className="row">
                                            <div className="PlaceLeft col" ><i className="fa fa-user"></i><b>  ABC</b></div>
                                            <div className="PlaceRight col"><i className="fa fa-star"></i>  4</div>
                                        </div>

                                        
                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-calendar"></i>  27/11/1997</div>
                                        </div>

                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-envelope"></i>  abc@gmail.com</div>
                                        </div>

                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-phone"></i>  26485688</div>
                                        </div>

                                        
                                            <br/>
                                        <div className="row">
                                            <div className="LicenseInfoStyle col" >License No :  MHLD279735</div>
                                            <div className="PlaceRight col"><button className="fa fa-trash fa-lg trashStyle" onClick={console.log("Delete Clicked")}></button></div>
                                        </div>
                                    </CardBody>
                                </Card>

                                <br/>


                                <Card className="cardStyle">
                                    <CardBody className="cardBodyStyle">
                                        <div className="row">
                                            <div className="PlaceLeft col" ><i className="fa fa-user"></i><b>  ABC</b></div>
                                            <div className="PlaceRight col"><i className="fa fa-star"></i>  4</div>
                                        </div>

                                        
                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-calendar"></i>  27/11/1997</div>
                                        </div>

                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-envelope"></i>  abc@gmail.com</div>
                                        </div>

                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-phone"></i>  26485688</div>
                                        </div>

                                        
                                            <br/>
                                        <div className="row">
                                            <div className="LicenseInfoStyle col" >License No :  MHLD279735</div>
                                        </div>
                                    </CardBody>
                                </Card>

                                    <br/>

                                <Card className="cardStyle">
                                    <CardBody className="cardBodyStyle">
                                        <div className="row">
                                            <div className="PlaceLeft col" ><i className="fa fa-user"></i><b>  ABC</b></div>
                                            <div className="PlaceRight col"><i className="fa fa-star"></i>  4</div>
                                        </div>

                                        
                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-calendar"></i>  27/11/1997</div>
                                        </div>

                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-envelope"></i>  abc@gmail.com</div>
                                        </div>

                                        <div className="row">
                                            <div className="PlaceLeft col"><i className="fa fa-phone"></i>  26485688</div>
                                        </div>

                                        
                                            <br/>
                                        <div className="row">
                                            <div className="LicenseInfoStyle col" >License No :  MHLD279735</div>
                                        </div>
                                    </CardBody>
                                </Card>


        </div>
    );

}

export default trial1;