import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {Jumbotron} from 'reactstrap';
import {Table,Button} from 'reactstrap';
import axios from 'axios';
import './page2.css';
class Page2 extends Component{
    state={
        offence:[],
    }
    componentDidMount(){
           axios.get('http://localhost:3001/no').then(response=>{
               console.log(response)
                this.setState({offence:response.data})
            })
    }
    clickedHandler(o_id,o_type,penalty){
        var obj = this.props.location.state
        obj["sno"] = o_id
        obj["offence"]=o_type
        obj['penalty']=penalty
        var jsonData1 = JSON.stringify(obj);
        console.log(jsonData1)
        this.props.history.push({ 
            pathname: '/police/offenceSelected/reportGenereted',
            state:[jsonData1]
        });
    }
    render(){
        const tr=this.state.offence.map(a=>{
            return(
                <tr key={a.offence_id}>
                    <th scope="row">{a.offence_id}</th>
                    <td className='td' onClick={()=>this.clickedHandler(a.offence_id,a.offence_type,a.penalty)}>{a.offence_type}</td>
                    <td>{a.veh_type}</td>
                    <td>{a.penalty}</td>
                </tr>
            )
        })
        return(
            <div className='App1'>
            <Jumbotron>
                <FontAwesomeIcon icon={faTrafficLight} className='App1-Font' />
                <h1>OFFENCE DETAILS</h1>
            </Jumbotron>
            <div className='App1-Table'>
                <Table bordered dark> 
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Nature of Offence</th>
                    <th>Type of Vehicles</th>
                    <th>Coupounding fee(Rs)</th>
                    </tr>
                </thead>
                <tbody>
                    {tr}
                </tbody>
                </Table>
            </div>
            <h5><FontAwesomeIcon icon={faInfoCircle}/>Click on the Nature of Offence to select the "OFFFENCE"</h5>
        </div>
        )
    }
}
    
   


export default Page2;