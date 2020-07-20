import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form,Input,Modal,ModalBody,FormFeedback,FormGroup } from 'reactstrap';
import { isEmpty } from '../../Form/form';
import { GoBack } from  '../../functionalComponent';

import './settingPanels.scss';

/**  
* @author marvel miles
* @function Settings
**/


export const NotificationPanel = (props)=>{

 return (
      <>

      <div className="w-100">

      <div className="w-100 border-e-t p-10">
                    <h4 className="mx-2 text-capitalize">notifications</h4>        
      </div> 

      
      <div className="w-100 border-e-t p-10">
                    <h4 className="mx-2 text-capitalize">preference</h4>
                </div>

  
                <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push('sms_notifications')}}>
                        <span className="text-capitalize">SMS Notifications</span>
                          <i className="fas fa-angle-right  mx-2 align-self-center"></i>

                     </div>

                     
  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push('email_notifications')}}>
                        <span className="text-capitalize">Email notifications</span>
                          <i className="fas fa-angle-right  mx-2 align-self-center"></i>

                     </div>


        </div>

      </>
 )

}

export const AccountPanel = (props)=>{

  const [delModal,setDelModal] = useState(false);
  const [pwd,setPwd] = useState({value:'',valid:""});

  let history = useHistory();

  const clearAcc = ()=>{

    
localStorage.removeItem('firstname__accomease');
localStorage.removeItem('lastname__accomease');
localStorage.removeItem('email__accomease');
localStorage.removeItem('pwd__accomease');
localStorage.removeItem('LoggedIn__accomease');
localStorage.removeItem('email-verification__accomease');

   if(localStorage.getItem('LoggedIn__accomease') === null || localStorage.getItem('LoggedIn__accomease') === 'null'){
    props.history.push('/sign-up');
   }
    
  }

    
  const toggleDeleteModal = (e)=>{
    const node = document.querySelector('#del-acc');
    if(node.checked){
      setDelModal(!delModal);
      node.checked = false;
    }
  }

   

  const handlePwd = (e)=>{
      const node = e.currentTarget;
      const feedback = document.querySelector('#pwd-error-feedback');
      const value = node.value;
      let min = 8;

      if(isEmpty(value)){
        setPwd({value,valid:false});
        feedback.textContent = 'Your password is required';
      }else{
            if(value.length >= min){
                setPwd({value,valid:true});
               
            }else{
                setPwd({value,valid:false});
                feedback.textContent = 'A minimum of 8 characters';
            }
      }
  }


 

    return (
        <>

        <Modal keyboard={true} isOpen={delModal} toggle={toggleDeleteModal} backdrop="static" >
          <button onClick={toggleDeleteModal} className="close-modal bg-pri">&times;</button>
       
       
     
     <Form clasName="" style={{height:'400px',width:'300px'}} >

<div className="p-center" style={{width:'300px',masWidth:'500px'}}>
<p className="text-danger">Hope you know what you are doing... To continue re-enter your password</p>

<FormGroup>
<Input type="password" id="pwd" valid={ pwd.valid ? true : false } invalid={ pwd.valid === false ? true : '' }  onChange={handlePwd} className="form-control-lg" />
<FormFeedback id="pwd-error-feedback" invalid></FormFeedback>
  </FormGroup>
<button className={ pwd.valid === false || pwd.valid === '' ? "btn bg-pri disabled" : "btn bg-pri" } onClick={clearAcc} disabled={pwd.valid === false || pwd.valid === '' ? true : false}   >Delete Account</button>
  </div>

    </Form>


          </Modal>
    
    <div className="w-100">
 
    <div className="w-100 border-e-t p-10 -mt">
                    <h4 className="mx-3 text-capitalize">account</h4>        
      </div> 

      
      <div className="w-100 border-e-t p-10">
                    <h4 className="mx-3 text-capitalize">login and security</h4>
                </div>


  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push("display_name") }}>
                        <div className="align-self-center ">
                      <small className="d-block font-18 mx-2">Name</small>
                      <small className="username d-block mx-2 text-capitalize text-muted">bankole temitope</small>
                          </div>
                          <i className="fas fa-angle-right fa-2x mx-2 align-self-center "></i>

                     </div>
                       
       
  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push("phone")}}>
                        <div className="align-self-center ">
                      <small className="d-block font-18 mx-2">Phone</small>
                      <small className="username d-block mx-2 text-capitalize text-muted">+2347019667900</small>
                          </div>
                          <i className="fas fa-angle-right fa-2x mx-2 align-self-center"></i>

                     </div>

                     
  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push("email")}}>
                        <div className="align-self-center ">
                      <small className="d-block font-18 mx-2">Email</small>
                      <small className="username d-block mx-2 text-muted">marvellousoluwaseun2@gmail.com</small>
                          </div>
                          <i className="fas fa-angle-right fa-2x mx-2 align-self-center"></i>

                     </div>

                     
  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push('password')}}>
                        <span className="text-capitalize mx-2">Password</span>
                          <i className="fas fa-angle-right fa-2x mx-2 align-self-center"></i>

                     </div>

                     
  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t " onClick={()=>{props.history.push("security")}}>
                        <span className="text-capitalize mx-2">security</span>
                          <i className="fas fa-angle-right fa-2x mx-2 align-self-center"></i>

                     </div>

                                          
  <div className="w-100 d-flex justify-content-between align-items-center  form-panel p-2 border-e-t ">
                        <span className="text-capitalize mx-2">delete account</span>
                        <Form className="align-self-start"> 
                    <Input type="checkbox" onClick={ toggleDeleteModal} className=" form-control-lg"  id="del-acc" className="checkbox-1x" />
                    </Form>
                    

                     </div>


    </div>
   
        </>
    )
}

 

export default AccountPanel;