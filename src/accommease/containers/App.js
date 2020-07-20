import React, { useState,useEffect,useRef } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import {
 Container,Row,Col
} from 'reactstrap';
//import styled from 'styled-components';
import Header from '../components/Headers/Header';
import HomePage from '../components/HomePage/HomePage';
import DivingIn, {  Preview2, Preview3, Preview4, UserBase, Regulated, EasyUse, Transaction, PostLodge} from '../components/Get_started/getStarted';
import SignUp, { Login, ForgotPwd,PwdRecoveryVerification,SetPwd } from '../components/Form/form';
import Preview1 from './Loader';
import Loader from '../components/Loader/Loader'; 
import LandingPage from './LoggedIn/LandingPage';
import Benefits from './Benefits/benefits';
import Account, { Notification } from '../components/userSetting/userSettings';
import { ScreenNameForm,PhoneForm,EmailForm,UpdatePwdForm,SecurityForm,SMSNotification, EmailNotification } from '../components/Form/form';

import '../styles/App.scss';
import SidePanel from '../components/settingsSidePanel/sidePanel';
import Apartment from '../components/Apartments/apartment';
import { ContextObj,BrandLogo } from '../components/functionalComponent'; 

import _404 from './404/404';
import Notifications from './Notifications/Notifications';
import North from './North/North';
import West from './West/west';
import South from './south/south';

/**
* @author marvel miles
* @function App
**/

const App = (props) => {

 const [loading,setLoading] = useState(true); 
 
// const appRef = useRef();
//const [areaLodges, storeAreaLodges] = useState([]);

useEffect(()=>{
  setLoading(false);
  // appRef.current.focus();
},[]);

const searchRef = useRef();
  
 if(loading) return null;

  return(
    <>
    
  <ContextObj.Provider value={ 
   {searchRef} 
  } > 
  
  <Router>
    
    
<Route path="/" component={BrandLogo} />
<Route path="/" component={Header} />  
<Route exact path="/" component={LandingPage}/>
<Route exact path="/benefits" component={Benefits} />
<Route exact path="/me/notification" component={Notifications} />
<Route exact path="/north" component={North} />
<Route exact path="/west" component={West} />
<Route exact path="/south" component={South} />
<Route exact path="/me/actions" component={_404} />
<Route exact path = "/agents" component={_404} />

<Route exact path="/password_recovery" component={ForgotPwd} />
<Route exact path="/password_verification" component={PwdRecoveryVerification} />
<Route exact path="/set_password" component={SetPwd} />

<Route exact path="/home" component={HomePage} />
<Route exact path="/img" component={Loader} />
<Route exact path="/get-started" component={DivingIn} />
<Route exact path="/preview2" component={Preview2} />
<Route exact path="/preview3" component={Preview3} />
<Route exact path="/preview4" component={Preview4} />
 
<Route exact path="/post-lodge" component={PostLodge} />
<Route exact path="/signed/preview1" component={UserBase} />
<Route exact path="/signed/preview2" component={EasyUse} />
<Route exact path="/signed/preview3" component={Transaction} />
<Route exact path="/signed/preview4" component={Regulated} />

 
 <Route exact path="/lodge/:location/:id" component={Apartment} />
 <Route exact path="/sign-up" component={SignUp} />
<Route exact path="/login" component={Login} />


<Container fluid={true} > 

<Row className="no-gutters"> 

<Col xs="12" sm="5" className="settings-panel-left"> 
<Route path="/settings"  component={SidePanel}  />
</Col>


<Col xs="12" sm="7" className="settings-panel-right"> 
<Route exact path="/settings/account" component={Account} />
<Route exact path="/settings/notifications" component={Notification} />
<Route exact path ="/settings/privacy_safety" component={_404} />
<Route exact path ="/settings/preference" component={_404} />
<Route exact path ="/settings/display" component={_404} />
<Route exact path ="/settings/accessibility" component={_404} />
<Route exact path ="/settings/about" component={_404} />




 

<Route exact path="/settings/display_name" component={ScreenNameForm} />
<Route exact path="/settings/phone"  component = {PhoneForm} />
<Route exact path="/settings/Email"  component={EmailForm} />
<Route exact path="/settings/password" component={UpdatePwdForm} />
<Route exact path="/settings/security" component={SecurityForm} />
<Route exact path="/settings/sms_notifications" component={SMSNotification} />
<Route exact path="/settings/Email_notifications" component={EmailNotification} />
 

</Col>

</Row>
</Container>

<Route exact path="/not-found" component={_404} />
 
    </Router>
 

    </ContextObj.Provider>
    </>
   )

 }

export default App;