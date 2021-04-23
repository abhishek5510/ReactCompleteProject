import React,{Component} from 'react';
import { Jumbotron} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
class AddNew extends Component{
    constructor(props){
        super(props);
        this.clickedSubmit = this.clickedSubmit.bind(this);
        this.state={
            offence:[]
        }
    }
    componentDidMount(){
        document.body.style.backgroundColor=" #c73866"
        axios.get('http://localhost:3001/getOffence').then(response=>{
            this.setState({offence:response.data})
        })
    }
    clickedSubmit=(event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object)
        axios.post('http://localhost:3002/updateoffence',{data:object}).then(response=>{
            alert("Offence Updated")
            window.location.href='/updateoffence'
        }).catch(error=>{
            alert('Something went wrong!!!!')
        })
        
    }
    render(){
        const option = this.state.offence.map(e=>{
            return(
                <option>{e.offence_type}</option>
            )
        })
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
                                <div className="card-header"><h1>Update Penalty</h1></div>
                                <div className="card-body">
                                    <form onSubmit={this.clickedSubmit}>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Select Offence Name:</label>
                                            <div className="col-md-6">
                                            <select name="cars" id="cars" className='form-control'>
                                                {option}
                                            </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Updated Penalty:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name='penalty' required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 offset-md-4">
                                            
                                            <button  type='submit' className="btn btn-primary">
                                                Update Penatly
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