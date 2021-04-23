import React,{Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight ,faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Image from './assets/new.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './openingpagerto.css';
class Rto extends Component{
    state={
        firstClick:false
    }
    constructor(props){
        super(props)
        this.fromSubmitHandler = this.fromSubmitHandler.bind(this)
    }
    loginClickedHandler=()=>{
        this.setState({loginClicked: true});

    }
    closeHandler=()=>{
        this.setState({loginClicked: false});
    }
    colorchange=()=>{
        document.body.style.backgroundColor=" #c73866"
    }
    fromSubmitHandler=(event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object.search)
        axios.get('http://localhost:3001/data',{params:{
            entered_data : object.search
        }}).then(response=>{
            console.log(response.data[0])
            this.props.history.push({
                pathname : '/particular',
                state : [response.data[0],object.search]
            })
        })
        .catch(error=>{
            alert("No user Exits")
        })
    }
    render(){
        return(
            <div className='container'>
                {this.colorchange()}
                {console.log(this.props.location.state.name)}
                <div style={{textAlign:'center',padding:'2px',height:'100%',boxSizing:'border-box',borderRadius:'2px'}}>
                    <img src={Image}></img>
                </div>
                <div style={{textAlign:'center',backgroundColor:"red"}}>
                    <h1><FontAwesomeIcon icon={faTrafficLight}/>   TRAFFIC MANAGEMENT STYSTEM</h1>
                </div>
                <Jumbotron fluid style={{ paddingTop:'10px',textAlign:'center',backgroundColor:'#9DE0AD'}}>
                    <Container fluid>
                    <h1 className="display-3">WELCOME {this.props.location.state.name}</h1>
                    <h5 className="lead">THIS IS A RTO PROTAL ,BELOW YOU CAN SEE THE ACCESSES</h5>
                    <hr></hr>
                    <form className='example' onSubmit={this.fromSubmitHandler}>
                        <input type="text" placeholder="Search Vehicle Here.." name="search"/>
                        <button type="submit"><FontAwesomeIcon icon={faSearchPlus}/></button>
                    </form>
                    </Container>
                </Jumbotron>
                <hr></hr>
                <Row>
                    <Col sm="12">
                        <Card body>
                        <CardTitle tag="h5">MANAGE OFFENCE RULE AND PENALTY</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <div style={{textAlign:'center'}}>
                        <UncontrolledDropdown>
                        <DropdownToggle caret>
                            CLICK HERE
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link to='/add'><DropdownItem>ADD NEW OFFENCE</DropdownItem></Link>
                            <Link to='/updateoffence'><DropdownItem onClick={this.UpdatePenalty}>UPDATE PENALTY</DropdownItem></Link>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Rto;