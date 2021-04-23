import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Container, Button } from 'reactstrap';
import './DetailsInParticular.css';
class Particular extends Component{
    clicked(a){
        console.log(a)
        this.props.history.push({ 
            pathname: '/dporto',
            state:a
        });

    }
    render(){
        return(
            <div>
                {console.log(this.props.location.state[0])}
                <div style={{textAlign:'center',backgroundColor:"red"}}>
                    <h1><FontAwesomeIcon icon={faTrafficLight}/>   TRAFFIC MANAGEMENT STYSTEM</h1>
                </div>
                <hr></hr>
                <div className="container" style={{textAlign:"center"}}>
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">Particular Information</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    <Button color='primary' onClick={this.deleted}>Do You Want To Delete This Record</Button>
                    </Container>
                    <hr></hr>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Type:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].veh_type} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Name:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].veh_name} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Color:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].veh_color} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Temporary Address:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].temp_add} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Pincode:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].pincode} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Permanent Address:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].perm_add} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">PanCard No.:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].pancard_no} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Owner Id:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].owner_id} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Occupation:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].occupation} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Number Of Cylinders:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].no_of_cyclinders} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Model Number:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].model_no} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Mobile Number:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].mobile_no} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Manufacturer Name:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].manufacturer_name} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Gender:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].gender} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">First Name:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].fname} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Last Name:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].lname} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Fuel Used:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].fuel_used} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Engine Number:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].engine_no} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Email:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].email} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Date Of Birth:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].dob} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Distributor Name:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].distributer_name} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Date Of Purchase:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].date_of_purchase} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Date Of manufacture:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].date_of_manufacture} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Cubic Capacity:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].cubic_capacity} readOnly/>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">Address Proof:</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.props.location.state[0].add_proof_name} readOnly/>
                            </div>
                    </div>
                    <hr/>
                    <Button color='primary' onClick={()=>this.clicked(this.props.location.state[1])}>See Offence Details</Button>
                </Jumbotron>
                </div>
            </div>
        )
    }
} 
export default Particular;