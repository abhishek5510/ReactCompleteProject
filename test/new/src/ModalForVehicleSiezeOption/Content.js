import React from 'react';
import { Button } from 'reactstrap';
const Content=(props)=>{
    return(
            <div style={{textAlign:'center'}}>
                <h4>Vehicle gets siezed this time click to confirm</h4>
                <Button color="danger" onClick={props.modal}>Confirm</Button>{' '}
                <Button color="primary" onClick={props.modalClosed}>Cancel</Button>{' '}
            </div>
    )
}
export default Content;
