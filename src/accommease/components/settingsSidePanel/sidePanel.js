import React from 'react';
import { Link, useHistory,Redirect } from 'react-router-dom';

import './sidePanel.scss';
import { GoBack } from '../functionalComponent';

/**
* @author  marvel miles
* @function SidePanel
**/

const SidePanel = (props) => {

  // React.useEffect(()=>{
  // const elem = document.querySelectorAll('.side-panel');
  // let pathname = props.history.location.pathname;
  // const arr = Array.from(elem);

  // const node = arr.find((item,i)=>{
  //    item.classList.remove('active');
  //  return item.firstElementChild.getAttribute('path') === pathname || item.getAttribute('path') === pathname || item.parentElement.getAttribute('path') === pathname;
  // });
 
  //  if(node !== undefined || typeof node !== undefined || typeof node !== null){
  //   if(!node.classList.contains('active')){
  //     node.classList.add('active');
  //   }

  //  }
 
  // },[]);
  

//  const handleActive = (e)=>{
//  //e.stopPropagation();
//    const elem = document.querySelectorAll(".side-panel");
//  const arr = Array.from(elem);
//      arr.map((item)=>{
//         if( e.target.classList.contains('side-panel') ||  item.classList.contains('side-panel')  ){
//           item.classList.remove("active-settings");  
//         } 
//      });

//       if( e.target.classList.contains('side-panel') ){
//         e.target.classList.add("active-settings"); 
        
//       } else if(e.target.parentElement.classList.contains('side-panel')){
//         e.target.parentElement.classList.add('active-settings');
      
//       }
//       if(e.target !== null && e.target !== undefined && e.target.parentElement.classList.contains('side-panel')){
//         props.history.push(e.target.getAttribute('path'));
//       }
// }

const history = useHistory();

const pathname = props.location.pathname;
 const handleActive = (e)=>{
      props.history.push(e.currentTarget.getAttribute('path'));
 }

 const checkCurrent = (path,panel) => {
     if(panel === 'account'){
         if(
             path === '/settings/account' || path === '/settings/display_name' || path === '/settings/phone' || path === '/settings/email' ||
             path === '/settings/password' || path === '/settings/security'
         ) return true;
         return false;
     }
     else if( panel === 'notification' ){
   if(
       path === '/settings/notifications' || path === '/settings/sms_notifications' || path === '/settings/email_notifications' 
   ) return true;
   else return false;
     }
 }

 if(localStorage.getItem('LoggedIn__accomease') === 'false' || localStorage.getItem('LoggedIn__accomease') === 'null' || localStorage.getItem('LoggedIn__accomease') === null ){
     return <Redirect to="/login" />;
 }

  return(

    <div className="w-100 bg-light">

  <GoBack history={history} style={{cursor:'pointer',marginLeft:'10px'}} />

                        <div className="w-100 header">
                    <h4 className="mx-2 text-capitalize">Settings</h4>
                    <hr />
          
                </div>

                <div className="w-100 header">
                    <div> 
                    <Link to="#" style={{textDecoration:'none'}}> <h4 className="username mx-2 text-capitalize text-pri">@{ localStorage.getItem('firstname__accomease') ? localStorage.getItem('firstname__accomease') : 'user' }</h4> </Link>
                    </div>
                    <hr />
                </div>
                    
                    <div className={ checkCurrent(pathname,'account')  ? "w-100 side-panel active-settings" : "w-100 side-panel" }  path="/settings/account" onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex justify-content-between align-items-center " >
                         <span className="font-18 mx-2 align-self-center text-capitalize">Account</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                    
                     </div>
                     <hr />

                     </div>

                     <div className={ props.location.pathname === '/settings/privacy_safety' ? "w-100 side-panel active-settings" : "w-100 side-panel" }  path="/settings/privacy_safety" onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex  justify-content-between align-items-center">
                         <span className="font-18 mx-2 text-capitalize">privacy and safety</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                      </div>
                     <hr />
                         </div>

                         <div className={ checkCurrent(pathname,'notification') ? "w-100 side-panel active-settings" : "w-100 side-panel" } path="/settings/notifications" onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex  justify-content-between align-items-center" >
                         <span className="font-18 mx-2 text-capitalize">Notifications</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                      </div>
                     <hr />
                         </div>

                         <div className={ props.location.pathname === '/settings/preference' ? "w-100 side-panel active-settings" : "w-100 side-panel" } path="/settings/preference" onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex  justify-content-between align-items-center"  >
                         <span className="font-18 mx-2 text-capitalize">content preference</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                      </div>
                     <hr />
                         </div>


                         <div className="w-100 header">
                    <h4 className="mx-2 text-capitalize">general</h4>
                    <hr />
          
                </div>

                         

                     <div className={ props.location.pathname === '/settings/display' ? "w-100 side-panel active-settings" : "w-100 side-panel" } path="/settings/display" onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex  justify-content-between align-items-center"   >
                         <span className="font-18 mx-2 text-capitalize">Display</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                      </div>
                     <hr />
                         </div>

                         

                     <div className={ props.location.pathname === '/settings/accessibility' ? "w-100 side-panel active-settings" : "w-100 side-panel" } path="/settings/accessibility" onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex  justify-content-between align-items-center"  >
                         <span className="font-18 mx-2 text-capitalize">accessibility</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                      </div>
                     <hr />
                         </div>

                         

                     <div className={ props.location.pathname === '/settings/about' ? "w-100 side-panel active-settings" : "w-100 side-panel" } path="/settings/about"  onClick={handleActive} > 
                  <div className="w-100 h-100 d-flex  justify-content-between align-items-center"  >
                         <span className="font-18 mx-2 text-capitalize">about accomease</span> <i className="fas fa-angle-right fa-2x mx-2 "></i>
                      </div>
                     <hr />
                         </div>
     

</div>

   )

 }

export default SidePanel;