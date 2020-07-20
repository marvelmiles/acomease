
import React from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
//import SidePanel from '../settingsSidePanel/sidePanel';
import {AccountPanel, NotificationPanel} from './settingPanels/settingPanels';
 
/**
* @author marvel miles
* @function profileSettings
**/
 
const LoggedIn = localStorage.getItem('LoggedIn__accomease');

export const Notification = (props)=>{

//   if(LoggedIn === null || LoggedIn === 'null' || LoggedIn === 'false') return props.history.push('/login');

    return (
        <>
   
         <NotificationPanel history={props.history} />         
 
        </>
    )
}



const Account = (props)=>{

   // if(LoggedIn === null || LoggedIn === 'null' || LoggedIn === 'false') return props.history.push('/login');

    return (
        <>
                   <AccountPanel history={props.history} />     

        </>
    )
}

 
export default Account;

