import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron} from 'reactstrap';
import { Button } from 'reactstrap';
import {Container} from 'reactstrap';
import { Table } from 'reactstrap';
import './page1.css';
import Axios from 'axios';

class AfterLogin extends Component{
    state={
        owner_details:{},
        vehicle_numbers : '',
        offences : []
    }
    componentDidMount(){
        Axios.get('http://localhost:3002/userinfo',{params:{
            info: this.props.location.state
        }}).then(response=>{
            var str = ''
            this.setState({owner_details : response.data.data[0]})
            var add=response.data.data1.map(e=>{
                return e.veh_no
            }).join('/')
            this.setState({vehicle_numbers : add})
            this.setState({offences : response.data.offence})
        })
    }
    render(){
        const tr=this.state.offences.map(a=>{
            return(
                <tr key={a.offence_id}>
                    <th scope="row">{a.veh_no}</th>
                    <td >{a.otime}</td>
                    <td>{a.place}</td>
                    <td>{a.offence_type}</td>
                    <td>{a.reported_by}</td>
                    <td>{a.vehicle_status}</td>
                    <td>{a.payment}</td>
                </tr>
            )
        })
        return(
            <div className='App1'>
                {console.log(this.props.location.state)}
                <Jumbotron>
                    <FontAwesomeIcon icon={faTrafficLight} className='App1-Font' />
                    <h1>Traffic Managment System</h1>
                    <hr></hr>
                    <div class="row" style={{position:'relative',right:'14em'}}>
                    <div class="col-md-6">
                        <h1 class="text-uppercase">Owner Id: {this.props.location.state}</h1>
                        <div class="billed"><span class="font-weight-bold text-uppercase">Owner Name:</span><span class="ml-1">{this.state.owner_details.FullName}</span></div>
                        <div class="billed"><span class="font-weight-bold text-uppercase">Registered Vehicle's:</span><span class="ml-1">{this.state.vehicle_numbers}</span></div>
                        <div class="billed"><span class="font-weight-bold text-uppercase">Pancard Number:</span><span class="ml-1">{this.state.owner_details.pancard_no}</span></div>
                    </div>
                </div>
                </Jumbotron>
                <hr></hr>
                <div style={{textAlign:'center'}}>
                    <h1 class="font-weight-bold text-uppercase">Below Your can see your Offence History</h1>
                </div>
                <hr></hr>
                <Table dark>
                    <thead>
                        <tr>
                        <th>Vehicle Number</th>
                        <th>Date/Time</th>
                        <th>Place</th>
                        <th>Offence Id</th>
                        <th>Reported By</th>
                        <th>Vehicle Status</th>
                        <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tr}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default AfterLogin;