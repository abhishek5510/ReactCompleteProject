import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight, faEnvelopeOpenText,faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron} from 'reactstrap';
import axios from 'axios'
import './openingpageadmin.css';
class Clerk extends Component{
    constructor(props){
        super(props)
        this.submitHandler=this.submitHandler.bind(this)
    }
    submitHandler=(event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var jsonData = JSON.stringify(object);
        console.log(jsonData)
        axios.get('http://localhost:3002/check',{params:{
            entered_data:jsonData
        }}).then(response=>{
            this.props.history.push({ 
                pathname: '/dpo',
                state: object
            });
        }).catch(error=>{
            alert(error.response.data)
        })
    }
    render(){
        return(
            <div className='container'>
            {console.log(this.props.location.state.name)}
            <h1 className='design1'>  <FontAwesomeIcon icon={faTrafficLight} style={{color: '#88d8b0'}} />  Traffic Management system</h1>
            <hr className='design'></hr>
            <Jumbotron className='jumbotron1'>
                <h1 className="display-3">Hello, {this.props.location.state.name}!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <h3>
                You Can Click Below To See {Date().toLocaleString()} Penalty Details
                </h3>
                
                </p>
                <hr></hr>
                <div >
                <form className='example' onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Search Vehicle Here.." name="search"/>
                    <button type="submit"><FontAwesomeIcon icon={faSearchPlus}/></button>
                </form>
                </div>
            </Jumbotron>
        </div>
        )
    }
}
export default Clerk;
