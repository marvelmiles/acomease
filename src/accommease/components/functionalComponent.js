import React,{ createContext,useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container,Row,Col, Button, Modal, ModalHeader,Input, ModalBody, ModalFooter,Form,CustomInput,FormGroup,Label } from 'reactstrap';

/**
* @author
* @function ProfileImg
**/ 

 
 


 export const useExtractCookies = ()=>{

  //const [cookies,s] = useState({name:''});
      const cookies = {};
      
    let name,value,beginning,middle,end;
 
         beginning = 0;

          while(beginning < document.cookie.length){
              middle = document.cookie.indexOf('=', beginning);
              end = document.cookie.indexOf(';', beginning);
             
              if (end === -1) end = document.cookie.length;

              if( (middle > end) || middle == -1 ){
                 name = document.cookie.substring(beginning,end);
                 value="";
              }

              else{
                 
                name = document.cookie.substring(beginning,middle);
                value = document.cookie.substring(middle + 1, end);

              }
              cookies[name] = unescape(value);
            beginning = end + 2;
            }//EOF while

      

function deleteCookie(name)
{
 document.cookie = name + "=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT";
 document.cookie = name + "; expires=Thu, 01-Jan-1970 00:00:01 GMT"; 
//check if cookie was set with domian and path then delete it with that token
}

            return [cookies,{deleteCookie}]; 
     
          }

  export const GoBack = props => {

    const getStyle = _=> {
        if(props.style || props.style !== undefined || props.style !== null) return props.style;
        else return {cursor:'pointer'};
    }

    return    <i className="fa fa-arrow-left text-pri gb" onClick={ _=> props.history.goBack()}   style={getStyle()}></i>;

  }        

 export const checkPath = path =>{
     
    if(
      path === '/settings/account' || path === '/settings/about' || path === '/settings/display' || path === '/settings/preference' ||
      path === '/settings/privacy_safety' || path === '/settings/notifications' || path === '/settings/accessibility' || path === '/login' ||
      path === '/sign-up' || path === '/password_recovery' || path === '/settings/display_name' || path === '/settings/phone' || path === '/settings/email' ||
      path === '/settings/password' || path === '/settings/security' || path === '/settings/sms_notifications' || path === '/settings/email_notifications' ||
      path === '/me/notification' || path === '/password_verification' || path === '/set_password' || path === '/me/actions' || path === '/agents'
    
    ) return true;
    else return false;

   }

   export const removeBrand = (path)=>{

      if(
        path === '/me/notification' || path === '/north' || path === '/west' || path === '/south' || path === '/sign-up' || path === '/login' ||
      path === '/not-found' || path === '/password_recovery' || path === '/password_verification' || path === '/set_password' 
        ) return { display:'none' };
      else if( /\/lodge/.test(path) ) return { display:'none' };
      else return {};

   }

          export const BrandLogo = (props)=>{

            const pathname= props.location.pathname;
  
            return (
              <>
          
           <div className={ checkPath(props.location.pathname) ? " bg-white" : "shadow fixed-top bg-white"} style={ removeBrand(pathname) } >
             <div className="w-100 d-flex justify-content-center align-items-center">
               
    <Form id="explore-form" className="explore-form-hide mx-3">
   
   <div >
     
  <FormGroup className="d-flex justify-content-between">
   
    <Input type="text" id="explore-input" className="settings-form-input" placeholder="Find lodge" />
   <i className="fa fa-search text-pri align-self-end " style={{cursor:'pointer',marginLeft:'-7px'}}></i>  
  </FormGroup>
   
  <hr className="bg-pri" />
   </div>
  
    </Form>
  
            <div className="" >  
           <img src={require('../assests/images/photo.jpg')} alt="brand-logo" style={{width:'130px',height:'50px'}} />  
           </div> 
            
             </div>
           </div>  
              
                
  
              </>
            )
  
          }

    
          export const debounce = function(fn,wait=20,immediate=true){
            let timeout;
            return function(){
              let context = this, args=arguments;
              let later = function(){
                timeout = null;
                if(!immediate) fn.apply(context,args);
              };
              let callNow = immediate && !timeout;
              clearTimeout(timeout);
              timeout = setTimeout(later,wait);
              if(callNow) fn.apply(context,args);
            }
          }
  
  
export const ContextObj = createContext();

export const ScrolltoTop = (props)=>{

  useEffect(()=>{

    const scrollTo = ()=>{
      const node = document.querySelector('#scroll-to-top');
      if( document.body.scrollTop > 80 ||  document.documentElement.scrollTop > 80){
        node.classList.remove('uninteract');
        node.classList.add('interact');
    
      }else{
        node.classList.remove('interact');
        node.classList.add('uninteract');
      }
    }

   window.addEventListener('scroll',debounce(scrollTo,null,false));
  },[])
  
const goUp = ()=>{
    window.scrollTo(0,0);
}

  return (
    <>
     <div id="scroll-to-top" className="fixed-bottom ml-auto mb-5 mx-5 p-2 d-flex justify-content-center align-items-center uninteract" style={{width:'40px',height:'40px',borderRadius:'50%',background:'#7E7E7E',color:'#fff'}}>
       <i onClick={goUp} className="fa fa-arrow-up text-white" ></i>
     </div>
    </>
  )

}


const ProfileImg = (props) => {

  const [modal,setModal] = useState(false);

  const toggle = ()=> setModal(!modal);

  return(
    <>
    
   <img className="fixed-bottom ml-auto mb-5 mx-5"  onClick={toggle} src={props.src} alt="" width="50" height="50" style={localStorage.getItem('LoggedIn__accomease') !== null && localStorage.getItem('LoggedIn__accomease') === 'true' ? {cursor:'pointer',borderRadius:'50%',zIndex:'5000'} : {display:'none'}} /> 

   
   <Modal isOpen={modal} toggle={toggle} className='notlogged-modal' backdrop="static" keyboard={true} >

<ModalBody className="">
<button className="close-modal"  onClick={toggle}>&times;</button>

<div style={{width:'200px',margin:'0 auto'}} > 
   <img  htmlFor="profile-img" src={require('../assests/images/user.png')}  style={{cursor:'pointer',width:'140px',height:'140px'}} alt="" />

<div className=" ml-3 mb-2 text-muted">
  <span>Add profile picture</span> 
  <img src={require('../assests/images/camera.png')} alt="" style={{width:'15px',height:'15px',marginBottom:'15px'}}/> 
</div> 
</div> 

  <div style={{width:'100%',maxWidth:'400px',margin:'0 auto'}} > 
   <Form style={{width:'100%'}}>
   <FormGroup className="w-100">
       <Label><Link to="/settings/account" className="text-pri" >Edit your account </Link></Label>  
        <CustomInput type="file" id="profile-img" name="customFile"  label="upload image" />
      </FormGroup>

 </Form>



</div>



</ModalBody>
<ModalFooter>
   
</ModalFooter>
</Modal>



    </>
   )

 }

export default ProfileImg;