import React,{Component} from 'react';
import { Jumbotron} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
class AddNew extends Component{
    constructor(props){
        super(props);
        this.clickedSubmit = this.clickedSubmit.bind(this);
    }
    clickedSubmit=(event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object)
        axios.post('http://localhost:3002/addoffence',{data:object}).then(response=>{
            alert("New Offence Added")
        }).catch(error=>{
            alert('Something went wrong!!!!')
        })
        
    }
    render(){
        return(
            <div>
                <Jumbotron>
                <FontAwesomeIcon icon={faTrafficLight} className='App1-Font' />
                <h1 style={{textAlign:'center'}}>Traffic Managment System</h1>
                </Jumbotron>
                <main className="login-form">
                <div className="cotainer">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header"><h1>CREATE NEW OFFENCE</h1></div>
                                <div className="card-body">
                                    <form onSubmit={this.clickedSubmit}>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Offence Name:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="oname" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Type Of Vehicle:</label>
                                            <div className="col-md-6">
                                            <select name="cars" id="cars" className='form-control'>
                                                <option value="All Vehicles">All Vehicles</option>
                                                <option value="Two Wheeler">Two Wheeler</option>
                                                <option value="Four Wheeler">Four Wheeler</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Penalty:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name='penalty' required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 offset-md-4">
                                            
                                            <button  type='submit' className="btn btn-primary">
                                                Add Offence
                                            </button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </main>
            </div>
        )
    }
}
export default AddNew;