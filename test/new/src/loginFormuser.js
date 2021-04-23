import React,{Component} from 'react';
import './page3.css';
import { withRouter } from "react-router-dom";
import {Button} from 'reactstrap';
import Axios from 'axios';
class loginFormuser extends Component{
    constructor(props){
        super(props)
        this.handel=this.handel.bind(this)
        this.state={
            recorded_details:[]
        }
    }
    handel=(event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object)
        Axios.get('http://localhost:3002/userlogin',{params:{
            info:object
        }}).then(response=>{
            console.log(response.data[0].owner_id)
            this.props.history.push({ 
                pathname: '/loggedin',
                state: response.data[0].owner_id
            });
            // window.location.href='/loggedin'
        }).catch(error=>{
            console.log(error)
            alert("No user available")
            window.location.href='/'
        })
    }
    render(){
        return(
            <div>
            <fieldset className='App1-fieldset'>
                <legend className='App1-legend'>Login Form:</legend>
                <form className='App1-form' onSubmit={this.handel} >
                    <label for="fname">Owner Id:</label>
                    <input type="text" id="fname" name="ownerid"/>
                    <label for="country">Date Of Birth:</label>  
                    <input type="date" id="country" name="dob"/>
                    <hr></hr>
                    <Button>SUBMIT</Button>
                </form>
            </fieldset>
        </div>
        )
    }
}

export default withRouter(loginFormuser);