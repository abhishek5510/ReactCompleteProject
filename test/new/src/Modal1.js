import React,{Component} from 'react';
import './Modal1.css';
import BackDrop1 from './BackDrop1';

class Modal extends Component{
    render(){
        return(
            <div>
                <BackDrop1 show={this.props.show} clicked={this.props.modelClosed}/>
                <div className='Modal'
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity:this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Modal;