import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Open from './openingpageuser';
import Register from './newResgister';
import Particular from './RTOFIRSTBUTTON/DetailsInParticular';
import ParticularO from './RTOFIRSTBUTTON/DetailsInParticularOffence';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import LoginForRto from './usermasterlogin';
import Clerk from './openigpageadmin';
import Rto from './openingpagerto';
import Already from './IfAlreadyExistsOwner';
import DPO from './RTOFIRSTBUTTON/DetailsInParticularOffence';
import AfterLoginUser from './AfterLoginUser';
import Addnew from './AddNewOffence';
import Offence1 from './RTOFIRSTBUTTON/DetailsInParticularOffencerto';
import Update from './UpdateOffence';
const main=()=>{
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/police' component={Page1}></Route>
          <Route exact path='/police/selectOffence' component={Page2}></Route>
          <Route exact path='/police/offenceSelected/reportGenereted' component={Page3}></Route>
          <Route exact path='/' component={Open}></Route>
          <Route exact path='/res' component={Register}></Route>
          <Route exact path='/particular' component={Particular}></Route>
          <Route exact path='/particular/offence' component={ParticularO}></Route>
          <Route exact path='/usermasterlogin' component={LoginForRto}></Route>
          <Route exact path='/admin/clerk' component={Clerk}></Route>
          <Route exact path='/admin/rto' component={Rto}></Route>
          <Route exact path='/already' component={Already}></Route>
          <Route exact path='/dpo' component={DPO}></Route>
          <Route exact path='/loggedin' component={AfterLoginUser}></Route>
          <Route exact path='/add' component={Addnew}></Route>
          <Route exact path='/dporto' component={Offence1}></Route>
          <Route exact path='/updateoffence' component={Update}></Route>
        </Switch>
    );
}
export default main;