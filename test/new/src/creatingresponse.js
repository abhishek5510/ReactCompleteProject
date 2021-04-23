import React from 'react';
import { Link } from "react-router-dom";
const create=()=>(
    <div className='container'>
            <h5>THANK YOU!!!You are registered with us.</h5>
            <div style={{textAlign:'center'}}>
            <Link to='/'><button color='primary'>OK</button></Link>
            </div>
    </div>
)

export default create;