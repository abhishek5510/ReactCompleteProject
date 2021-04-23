import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Button,Table} from 'reactstrap';
import Axios from 'axios';
class OffenceInParticular1 extends Component{
    state={
        offence:[],
        penalty:0,
        numberOfOffence:0

    }
    componentDidMount(){
        Axios.get('http://localhost:3002/info',{params:{
            veh_no:this.props.location.state
        }}).then(response=>{
            console.log(response.data.data)
            console.log(response.data.data1)
            this.setState({offence:response.data.data})
            var obj = JSON.stringify(response.data.data1[0])
            var newObj={}
            response.data.data1.forEach(function(value, key){
                newObj[key] = value;
            });
            this.setState({penalty:newObj[0].penalty})
            this.setState({numberOfOffence:newObj[0].totalPayment})

        })
    }
    clickedHandler=()=>{
        var obj={}
        if(this.state.totalPayment>3){
            obj['veh_no']=this.props.location.state
            obj['payment'] = 'Paid'
            obj['custody'] = 'Vehicle Released'
            Axios.post('http://localhost:3002/payment',{report:obj}).then(response=>{
                alert("Done")
                window.location.href='/dpo'
            })
        }
        else{
            obj['veh_no']=this.props.location.state
            obj['payment'] = 'Paid'
            obj['custody'] = 'Payment Done From Office'
            Axios.post('http://localhost:3002/payment',{report:obj}).then(response=>{
                alert("Done")
                window.location.href='/dpo'
            })
        }
    }
    render(){
        const tr=this.state.offence.map(a=>{
            return(
                <tr key={a.offence_id}>
                    <th scope="row">{a.otime}</th>
                    <td>{a.place}</td>
                    <td>{a.offence_type}</td>
                    <td>{a.vehicle_status}</td>
                    <td>{a.payment}</td>
                    <td>{a.reported_by}</td>
                </tr>
            )
        })
        return(
            <div>
                <div style={{textAlign:'center',backgroundColor:"red"}}>
                    <h1><FontAwesomeIcon icon={faTrafficLight}/>   TRAFFIC MANAGEMENT STYSTEM</h1>
                </div>
                <hr></hr>
                <div className='container'>
                <Jumbotron style={{textAlign:'center'}}>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                </Jumbotron>
                <hr></hr>
                <Table dark>
                    <thead>
                        <tr>
                        <th>Date/Time</th>
                        <th>Place</th>
                        <th>Offence Name</th>
                        <th>Vehicle Status</th>
                        <th>Payment Status</th>
                        <th>Reported By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tr}
                    </tbody>
                </Table>
                <hr></hr>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">Total Fine to Paid(in Rupees):</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="email-address"  value={this.state.penalty} readOnly/>
                        </div>
                </div>
                <div style={{textAlign:'center'}}>
                <Button color="primary" onClick={this.clickedHandler}>Click To Pay</Button>{' '}
                </div>
                </div>

            </div>
        )
    }
}
export default OffenceInParticular1;