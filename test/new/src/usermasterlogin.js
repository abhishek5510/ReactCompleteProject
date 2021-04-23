import React,{Component} from 'react';
import {
  Jumbotron,
  Button
} from 'reactstrap';
import './usermaster.css';
import axios from 'axios'

class UsermasterLogin extends Component{
    constructor(props){
        super(props)
        this.formSubmittedHandler = this.formSubmittedHandler.bind(this);
    }
    componentWillMount(){
        document.body.style.backgroundImage='url("https://image.shutterstock.com/z/stock-photo-mumbai-india-october-policeman-on-duty-directing-traffic-in-the-south-of-the-city-541791226.jpg")';
        document.body.style.backgroundSize='cover';
        document.body.style.backgroundRepeat='no-repeat';
    }
    componentWillUnmount(){
        document.body.style.backgroundImage = null 
        document.body.style.backgroundSize='null';
        document.body.style.backgroundRepeat='null';
    }
    formSubmittedHandler(event){
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var jsonData = JSON.stringify(object);
        console.log(jsonData)
        axios.get('http://localhost:3002/authrto',{params:{
            entered_data:jsonData
        }}).then(response=>{
            var data = response.data[0]
            if(response.data[0].rolename === 'RTO OFFICER'){
                console.log('hiiii')
                this.props.history.push({
                    pathname:'/admin/rto',
                    state : data
                })
            }
            else if(response.data[0].rolename === 'CLERK'){
                this.props.history.push({ 
                    pathname: '/admin/clerk',
                    state: data
                });
            }
        })
        .catch(error=>{
            alert("NO SUCH USER EXISTS!!!!!!")
            window.location.href = '/usermasterlogin'
        })
    }
    render(){
        return(
            <div>
            <div className='container' style={{paddingTop:'100px'}}>
                <Jumbotron className='jumbotron1'>
                    <p className="display-3">LOGIN PROTAL FOR ADMINS</p>
                    <hr></hr>
                    <form className='new' onSubmit={this.formSubmittedHandler}>
                        <div className="form-group row">
                            <label for="email_address" className="col-md-4 col-form-label text-md-right"><h4>USERNAME:</h4></label>
                                <div className="col-md-6">
                                    <input type="text" id="email_address" className="form-control" name="username" required/>
                                </div>
                        </div>
                        <hr></hr>
                        <div className="form-group row">
                            <label for="email_address" className="col-md-4 col-form-label text-md-right"><h4>PASSWORD:</h4></label>
                                <div className="col-md-6">
                                    <input type="password" id="email_address" className="form-control" name="password" required/>
                                </div>
                        </div>
                        <hr></hr>
                        <Button color='secondary'>Submit</Button>
                    </form>
                </Jumbotron>
            </div>
            
    </div>
        )
    }
}
export default UsermasterLogin;