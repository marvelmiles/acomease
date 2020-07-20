import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
Container,Row,Col
} from 'reactstrap';

import './Notifications.scss';
import ProfileImg, { debounce, ContextObj } from '../../components/functionalComponent';

/**
* @author
* @function Notifications
**/

const Notifications = (props) => {

const appContext = useContext(ContextObj)
//const { notifications } = appContext;

const notifications = [{title:'Anew e'}];

    const showNotifications = ()=>{

        return (
            <>
   
            </>
        )
    }

     const No_Notifications = ()=>{

        return (
            <>
            
      <div className="p-center no-notifications text-center">

    <img src={require('../../assests/images/archives.png')} alt="" style={{width:'130px',height:'120px'}} />

    <p className="text-muted">
        Temitope you dont have any notification.... Your badge will be notified when you recieve any new entry.
    </p>

      </div>

            </>
        )
     }
  return(
   <>
   
   {  notifications.length > 0 ? showNotifications() : No_Notifications()  }

<ProfileImg src={require('../../assests/images/t1.jpg')} />

   </>
   )

 }

export default Notifications;