import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron} from 'reactstrap';
import { Button } from 'reactstrap';
import {Container} from 'reactstrap';
import './page1.css';
import axios from 'axios';
class Page1 extends Component{
    constructor(props){
        super(props)
        this.nextPageHandler=this.nextPageHandler.bind(this)
        this.state={
            recorded_details:[]
        }
    }
    nextPageHandler(event){
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        this.setState({recorded_details:data})
        var abc = 'yes'
        axios.get('http://localhost:3001/checker',{params:{
            info:object
        }})
        .then(response=>{
            console.log(response.status)
            if(response.status){
                this.props.history.push({ 
                    pathname: '/police/selectOffence',
                    state: object
                });
            }
        })
        .catch(error => {
            console.log(error.response.data)
            if(error.response.data === 'Forbidden'){
                alert("Vehicle Is already Siezed cant add more offence")
                window.location.href='/police'
            }
            else if(error.response.data === "Not Found"){
                alert('The Vehicle Does not exists')
                window.location.href='/police'
            }
        })
    }
    
    render(){
        return(
            <div className='App1'>
            <Jumbotron>
                <FontAwesomeIcon icon={faTrafficLight} className='App1-Font' />
                <h1>Traffic Managment System</h1>
            </Jumbotron>
            <Container className="themed-container" className='App1-Container'>
                <fieldset className='App1-fieldset'>
                <legend className='App1-legend'>Enter Details:</legend>
                <form className='App1-form' onSubmit={this.nextPageHandler}>
                    <label for="fname">Vehicle Number:</label>
                    <input type="text" id="vnumber" name="vnumber" required/>
                    <label for="country">Date/Time:</label>  
                    <input type="datetime-local" id="datetime" name="datetime" required/>
                    <label for="country">Place</label>  
                    <input type="text" id="place" name="place" required/>
                    <label for="country">Reported By:</label>  
                    <input type="text" id="rb" name="rb" required/>
                    <hr></hr>
                    <Button color='primary' type='submit'>SUBMIT</Button>
                </form>
                </fieldset>
            </Container>
        </div>
        )
    }
}

export default Page1;
