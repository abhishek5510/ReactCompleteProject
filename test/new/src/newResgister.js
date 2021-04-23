import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight, faEnvelopeOpenTextl } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import './newRegister.css';
import axios from 'axios';
import Modal1 from './Modal1';
import CreatingResponse from './creatingresponse';
class Opening extends Component{
    state={
        submitted:false
    }
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var jsonData = JSON.stringify(object);
        axios.post('http://localhost:3001/post',{user_info:jsonData}).then(response=>{
            console.log(response)
            this.loginClickedHandler(response.data);
            
        })

    }
    loginClickedHandler=(data)=>{
        if(data==='Transaction Completed'){
            this.setState({submitted: true});
        }
        else{
            alert("Vehicle Number Already Exists!!!");
        }

    }
    closeHandler=()=>{
        this.setState({submitted: false});
    }
    render(){
        return(
            <div className='container'>
            <Modal1 show={this.state.submitted} modelClosed={this.closeHandler}>
                <CreatingResponse/>
            </Modal1>
            <h1>  <FontAwesomeIcon icon={faTrafficLight} style={{color: '#88d8b0'}} />  Traffic Management system</h1>
            <hr></hr>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
            <fieldset className='App1-fieldset'>
            <legend className='App1-legend'>Regi. Form:</legend>
            <form className='App1-form' onSubmit={this.handleSubmit}>
                    <h1>Vehicle deatils</h1>
                    <hr></hr>
                    <label htmlfor="vehicleType">Vehicle Number:</label>
                    <input type="text" id="vehicleNumber" name="vehicleNumber"/>
                    <label htmlfor="vehicleType">Vehicle Type:</label>
                    <input type="text" id="vehicleType" name="vehicleType"/>
                    <label htmlfor="eno">Engine Number:</label>
                    <input type="text" id="eno" name="eno"/>
                    <label htmlfor="mno">Model Number:</label>
                    <input type="text" id="mno" name="mno"/>
                    <label htmlfor="vname">Vehicle Name:</label>
                    <input type="text" id="vname" name="vname"/>
                    <label htmlfor="vcolor">Vehicle Color:</label>
                    <input type="text" id="vcolor" name="vcolor"/>
                    <label htmlfor="mn">Manufacturer Name:</label>
                    <input type="text" id="mn" name="mn"/>
                    <label htmlfor="date">Date Of Manufacturer:</label>
                    <input type="date" id="date" name="dom"/>
                    <label htmlfor="noc">Number of Cyclinders:</label>
                    <input type="text" id="noc" name="noc"/>
                    <label htmlfor="cc">Cubic Capacity:</label>
                    <input type="text" id="cc" name="cc"/>
                    <label htmlfor="fused">Fule Used:</label>
                    <input type="text" id="fused" name="fused"/>
                    <label htmlfor="vehicleType">Date Of Purchase:</label>
                    <input type="date" id="dop" name="dop"/>
                    <label htmlfor="vehicleType">Distributor Name:</label>
                    <input type="text" id="disname" name="disname"/>
                    <hr></hr>
                    <h1>Ownwer Details</h1>
                    <hr></hr>
                    <label htmlfor="fname">First Name:</label>
                    <input type="text" id="fname" name="fname"/>
                    <label htmlfor="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname"/>
                    <label htmlfor="dob">Date Of Birth:</label>
                    <input type="date" id="dob" name="dob"/>
                    <label htmlfor="mobileno">Mobile Number:</label>
                    <input type="text" id="mobileno" name="mobileno"/>
                    <label htmlfor="gender">Gender:</label>
                    <input type="text" id="gender" name="gender"/>
                    <label htmlfor="tadd">E-mail Address:</label>
                    <input type="email" id="email" name="email"/>
                    <label htmlfor="tadd">Temprorary Address:</label>
                    <input type="text" id="tadd" name="tadd"/>
                    <label htmlfor="padd">Permanent Address:</label>
                    <input type="text" id="padd" name="padd"/>
                    <label htmlfor="pcode">PinCode:</label>
                    <input type="text" id="pcode" name="pcode"/>
                    <label htmlfor="occu">Occupation:</label>
                    <input type="text" id="occu" name="occu"/>
                    <label htmlfor="pcard">PanCard Number:</label>
                    <input type="text" id="pcard" name="pcard"/>
                    <label htmlfor="addp">Address Proof:</label>
                    <input type="text" id="addp" name="addp"/>
                    <hr></hr>
                    <Button color="secondary">SUBMIT</Button>{' '}
            </form>
            </fieldset>

        </div>
        )
    }
}


export default Opening;