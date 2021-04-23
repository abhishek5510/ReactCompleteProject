import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight, faEnvelopeOpenTextl } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import axios from 'axios';
import './Already.css';


class AlreadyExists extends Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            owner_Id:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/getOwnerId').then(response=>{
            this.setState({owner_Id:response.data})
            console.log(this.state.owner_Id)
            console.log(response)
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var num=Number(object.oid);
        var include = this.state.owner_Id.includes(num)
        if(include){
            var jsonData = JSON.stringify(object);

            axios.post('http://localhost:3001/already',{user_info:jsonData}).then(response=>{
                alert("Vehicle Added You Can Login And Check!!")
                window.location.href='/'
                // this.loginClickedHandler(response.data);
                
            }).catch(error=>{
                alert("Engine Number Already Exists or check with Vehicle Number")
                window.location.href='/already'
            })
        }
        else{
            alert("Owner Id Dont Exists\n Please Check")
        }

    }
    render(){
        return(
            <div className='container'>
            <h1>  <FontAwesomeIcon icon={faTrafficLight} style={{color: '#88d8b0'}} />  Traffic Management system</h1>
            <hr></hr>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
            <hr></hr>
            <Jumbotron style={{backgroundColor:'#2ab7ca'}}>
                <h1 style={{textAlign:'center'}}>Enter the Vehicle Details</h1>
                <hr></hr>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Owner Id:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name='oid' required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Number:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="vnumber" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Type:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="vtype" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Engine Number:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="eno" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Model Number:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="mno" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Name:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="vname" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Color:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="vcolor" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Manufacturer Name:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="mname" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Date Of Manufacture:</label>
                        <div className="col-md-6">
                            <input type="date" id="email_address" className="form-control" name="dom" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Number Of Cylinder:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="noc" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Cubic Capacity:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="cc" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Fuel Used:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name='fu' required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Date Of Purchase:</label>
                        <div className="col-md-6">
                            <input type="date" id="email_address" className="form-control" name="dop" required/>
                        </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Distributer Name:</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="dname" required/>
                        </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <Button>Submit</Button>
                </div>
                
            </form>
            </Jumbotron>

        </div>
        )
    }
}
export default AlreadyExists;