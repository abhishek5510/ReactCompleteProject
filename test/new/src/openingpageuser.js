import React, { Component } from 'react';
import {Button,Jumbotron} from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Image from './assets/new.png';
import Modal from './Modal';
import Login from './loginFormuser';
import './openingpageuser.css';
class User extends Component{
    state={
        loginClicked:false
    }
    colorchange=()=>{
        document.body.style.backgroundColor=" #bdeaee "
    }
    loginClickedHandler=()=>{
        this.setState({loginClicked: true});
    }
    closeHandler=()=>{
        this.setState({loginClicked: false});
    }
    render(){
        return(
            <div>
                <Modal show={this.state.loginClicked}>
                    <Login modelClosed={this.closeHandler}/>
                </Modal>
                {this.colorchange()}
                <div className='new'>
                    <img src={Image}></img>
                </div>
                <hr></hr>
                <div >
                    <nav className='di'>
                        <ul className='ul'>
                            <li className='li'>
                                <Button onClick={this.loginClickedHandler}><FontAwesomeIcon icon={faSignInAlt}/> LOGIN</Button>
                            </li>
                            <li className='li'>
                                <Link to='/res' className='a'><Button><FontAwesomeIcon icon={faUserPlus}/>Register</Button></Link>
                            </li>
                        </ul>
                        <p>Already Have a owner Id ?<Link to='/already'><Button color='link'>Add Vehicle</Button></Link></p>
                    </nav>
                </div>
                <hr></hr>
                <div style={{backgroundColor:'#a8e6cf '}}>
                <h1 style={{textAlign:'center'}}>ONLINE TRAFFIC MANAGMENT SYSTEM</h1>
                </div>
                <hr></hr>
                <div className='container'>
                <Jumbotron>
                    <h1 className="display-3">Road safety is a state of mind,</h1>
                    <h1 className="display-3">Accident is an absence of mind.</h1>
                    <p className="lead" style={{paddingLeft:'36em'}}>Alert today – Alive tomorrow...</p>
                </Jumbotron>
                </div>
                
                
            </div>
        )
    }
}
export default User;