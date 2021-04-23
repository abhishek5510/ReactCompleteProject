import React,{Component} from 'react';
import { Jumbotron} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Modal from './ModalForVehicleSiezeOption/Modal';
import Content from './ModalForVehicleSiezeOption/Content';

class Page3 extends Component{
    constructor(props){
        super(props)
        this.henceCompleted = this.henceCompleted.bind(this);
        this.state={
            previous_offence:[],
            previous_penalty:0,
            totalOffence:0,
            submitted:false
        }
    }
    componentDidMount(){
        var obj=JSON.parse(this.props.location.state[0])
        var sum = obj.penalty
        axios.get('http://localhost:3001/history',{params:{
            info:obj
        }}).then(response=>{
            this.setState({previous_offence:Object.keys(response.data.offence)})
            Object.values(response.data.offence).forEach(elem => {
                sum += elem;
            })
            this.setState({previous_penalty:sum})
            this.setState({totalOffence:response.data.length})
        })
    }
    clickedPaidHandler=()=>{
        var obj=JSON.parse(this.props.location.state[0])
        if(this.state.totalOffence >= 1){
            obj['payment']='Paid'
            obj['custody']='Payment Completed'
            axios.post('http://localhost:3001/submit',{report:obj}).then(response=>{
                this.henceCompleted()
            }).catch(error=>{
                alert('Something Wnet wrong')
            })
        }
        else{
            obj["payment"]='Paid'
            obj["custody"]='released on spot'
            axios.post('http://localhost:3001/report',{report:obj}).then(response=>{
                this.henceCompleted()
            })
        }
    }
    clickedUnpaidHandler=()=>{
        if(this.state.totalOffence>=3){
            this.clickedHandler()
        }
        else{
            var obj=JSON.parse(this.props.location.state[0])
            obj["payment"]='Unpaid'
            obj["custody"]='Vehicle Released For Time Being'
            axios.post('http://localhost:3001/report',{report:obj}).then(response=>{
                this.henceCompleted()
            })
        }
    }
    henceCompleted(){
        alert("done");
        window.location.href = '/police'
    }
    clickedHandler=()=>{
        this.setState({submitted: true});
    }
    cancelcloseHandler=()=>{
        this.setState({submitted: false});
    }
   confirmcloseHandler=()=>{
        this.setState({submitted: false});
        var obj=JSON.parse(this.props.location.state[0])
        obj["payment"]='Unpaid'
        obj["custody"]='Vehicle Seized'
        axios.post('http://localhost:3001/report',{report:obj}).then(response=>{
            window.location.href='/police'
        })
   }
    render(){
        return(
            <div>
                <Modal show={this.state.submitted}>
                    <Content modal={this.confirmcloseHandler}  modalClosed={this.cancelcloseHandler}/>
                </Modal>
                <Jumbotron>
                <FontAwesomeIcon icon={faTrafficLight} className='App1-Font' />
                <h1 style={{textAlign:'center'}}>Traffic Managment System</h1>
                </Jumbotron>
                <main className="login-form">
                <div className="cotainer">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header"><h1>REPORT</h1></div>
                                <div className="card-body">
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Vehicle Number:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" value={JSON.parse(this.props.location.state[0]).vnumber} readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Current Offence:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address"  value={JSON.parse(this.props.location.state[0]).offence} readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Date/Time:</label>
                                            <div className="col-md-6">
                                                <input type="datetime-local" id="email_address" className="form-control" name="email-address" value={JSON.parse(this.props.location.state[0]).datetime} readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Place:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" value={JSON.parse(this.props.location.state[0]).place} readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Reported By:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" value={JSON.parse(this.props.location.state[0]).rb} readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Previous Offences:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" value={this.state.previous_offence}  readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Total Fine to Paid:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address"  value={this.state.previous_penalty} readOnly/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 offset-md-4">
                                            <button onClick={this.clickedPaidHandler}  className="btn btn-primary">
                                                Confirm/Paid
                                            </button>
                                            <hr></hr>
                                            <button  onClick={this.clickedUnpaidHandler} className="btn btn-primary">
                                                Unpaid
                                            </button>
                                        </div>
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
export default Page3;