import React, {useState, useEffect, useContext} from 'react';
import {
Form,FormGroup,Input,Label,FormFeedback,CustomInput,TabContent,TabPane,Container,Col,Row,Collapse
} from 'reactstrap';
import { Link,Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import './form.scss';
import { FormRadios, ContextObj } from '../functionalComponent';

/**
* @author
* @function SignUp
**/



    
let whitespace = "\t\n\r";

export const isEmpty = (s) =>{
  let i;
  if( (s === null)  || s.length === 0 ) return true;

  
  //search string look for character that are not white space

  for (i = 0; i < s.length; i++)    {  
     var c = s.charAt(i);
     if (whitespace.indexOf(c) === -1) return false;
    }
  
    //At this point all character are white space
    return true;

  // return /\t\n\r/.test(s);
}

const isInteger = (value)=>{ return /^-?\d+$/.test(value);}



const isEmail = (s)=>{
    return /[^@]+@(\w+\.)+\w+/.test(s);
}

 


// settings Form


export const ScreenNameForm = (props)=>{

    const [firstname,setFirstName] = useState({value:'',valid:false});
    const [lastname,setLastName] = useState({value:'',valid:false});
    const [inputReady,setInputReady] = useState(false);
    
const handleFirstName =  ()=>{
    const input = document.querySelector('#firstname');
    const value = input.value;
    const label = document.querySelector('#firstname-label');
    let valid = false;
       if(isEmpty(value)){
           setFirstName({value,valid:false});
           label.textContent = "Field is required";
           valid=false;
       }else{
            setFirstName({value,valid:true});
            label.textContent = 'Username';
            valid=true;
       }

       if(valid && lastname.valid){
        setInputReady(true);
    }else{
        setInputReady(false);
    }
    
    }

    
const handleLastName =  ()=>{
    const input = document.querySelector('#lastname');
    const value = input.value;
    const label = document.querySelector('#lastname-label');
    let valid = false;
       if(isEmpty(value)){
           setLastName({value,valid:false});
           label.textContent = "Field is required";
           valid=false;
       }else{
            setLastName({value,valid:true});
            label.textContent = 'Lastname';
            valid=true;
       }

       if(firstname.valid && valid){
           setInputReady(true);
       }else{
           setInputReady(false);
       }
    
    }
    
    
    const handleChange = (e)=>{
         e.preventDefault();
         document.querySelector('#save').textContent = "updated";
    }
    

    return (
        <>
       
       <div className="w-100 bg-white">
           
  <div className="w-100 border-e-t h bg-white">
      <i className="fa fa-arrow mx-2"></i>
      <h4 className="d-inline text-capitalize mx-2">update name</h4>
     </div>

    <div className="w-100 p-2 bg-light"></div>
     
    
  
<Form onSubmit={handleChange} >

<div className="w-100 border-e-t h bg-white">

<FormGroup className="settings-form-group">
    <Input id="firstname" type="text" className="settings-form-input" placeholder="Temitope" name="firstname" onChange={handleFirstName} />
    <Label id="firstname-label" className="font-weight-bold">Firstname</Label>
    <hr className="bg-pri" />
  </FormGroup>

  
<FormGroup className="settings-form-group">
    <Input id="lastname" type="text" className="settings-form-input" placeholder="Bankole" name="lastname" onChange={handleLastName} />
    <Label id="lastname-label" className="font-weight-bold">Lastname</Label>
    <hr className="bg-pri" />
  </FormGroup>

  </div>

  <Alert color="danger" className="text-dark w-75 mx-auto font-weight-bold text-capitalize d-none mt-4" id="resHandler">HELLO WORLD</Alert>
  <button id="save" type="submit" disabled={ inputReady ? false : true } className={ inputReady ? "settings-btn bg-pri font-22 mt-3 " : "settings-btn bg-pri font-22 mt-3 disabled" } >Save</button>


</Form>
 

       </div>

        </>
    )

}




export const PhoneForm = ()=>{

    const [phone,setPhone] = useState({value:'',valid:false});
    const [inputReady,setInputReady] = useState(false);
   
       const handlePhone = ()=>{
           const value = document.querySelector('#phone').value;
         const label = document.querySelector('#phone-label');
        let valid = false;

           if(!isInteger(value)){
        label.textContent = "Digits only";
        setPhone({value,valid:false});
        valid=false;
           }else{
               const max = 11;
               if(value.length !== max){
                   label.textContent = "Max length of 11";
                   setPhone({value,valid:false});
                   valid=false;
               }else{
                   label.textContent = "Phone";
                   setPhone({value,valid:true});
                 valid=true;
               }
           }
          
         valid ? setInputReady(valid) : setInputReady(valid); 

       }
   
       const handleChange = (e)=>{
     e.preventDefault();
     document.querySelector('#save').textContent = 'updated';
       }
   
       return (
           <>
     
     <div className="w-100 bg-white">
              
  <div className="w-100 border-e-t h bg-white">
      <i className="fa fa-arrow mx-2"></i>
      <h4 className="d-inline text-capitalize mx-2">update Phone number</h4>
     </div>
            
                <div className="w-100 p-2 bg-light"></div>
                 
                  
              
            <Form onSubmit={handleChange}>

            <div className="w-100 border-e-t h bg-white"> 
            
<FormGroup className="settings-form-group">
    <Input id="phone" type="text" className="settings-form-input" placeholder="07098765678" name="lastname" onChange={handlePhone} />
    <Label id="phone-label" className="font-weight-bold">Phone number</Label>
    <hr className="bg-pri" />
  </FormGroup>

  </div>
 
  <Alert color="danger" className="text-dark w-75 mx-auto font-weight-bold text-capitalize d-none mt-4" id="resHandler">HELLO WORLD</Alert>
  <button id="save" type="submit" disabled={inputReady ? false : true} className={ inputReady ? "settings-btn bg-pri font-22 mt-3" : "settings-btn bg-pri font-22 mt-3 disabled" } >Save</button>
    

            </Form>
             
             
            
                   </div>
            
   
           </>
       )
   }
   
   
   export const  EmailForm = ()=>{
   
       const [email,setEmail] = useState({value:'',valid:''});
       const [inputReady,setInputReady] = useState(false); 
   
       const handleEmail = ()=>{
        const value = document.querySelector('#email').value;
        const label = document.querySelector('#email-label');
        let valid = false;
        
        if(isEmpty(value)){
            label.textContent="Field is required";
            setEmail({value,valid:false});
            valid = false;
        }else{
            
        if(!isEmail(value)){
            label.textContent = "Email isn't in valid format";
            setEmail({value,valid:false});
            valid = false;
        }else{
            label.textContent = "Email";
            setEmail({value,valid:true});
            valid = true;
        }
        }

        valid ? setInputReady(valid) : setInputReady(valid);
   
       } 
     
       const handleChange = (e)=>{
     e.preventDefault();
     document.querySelector('#save').textContent = "updated";
       }
   
       return (
           <>
     
     <div className="w-100 bg-white">
              
              <div className="w-100 border-e-t h bg-white">
                  <i className="fa fa-arrow mx-2"></i>
                  <h4 className="d-inline text-capitalize mx-2">update your Email</h4>
                 </div>
            
                <div className="w-100 p-2 bg-light"></div>
            
            <Form onSubmit={handleChange}>

<div className="w-100 border-e-t h bg-white"> 

<FormGroup className="settings-form-group">
<Input id="email" type="email" className="settings-form-input" valid={email.valid ? true : false} invalid={ email.valid === false ? true : '' } placeholder="Temitope@yahoo.com" name="lastname" onChange={handleEmail} />
<Label id="email-label" className="font-weight-bold">Email</Label>
<hr className="bg-pri" />
</FormGroup>

</div>

<Alert color="danger" className="text-dark w-75 mx-auto font-weight-bold text-capitalize d-none mt-4" id="resHandler">HELLO WORLD</Alert>
<button id="save" type="submit" disabled={ inputReady ? false : true } className={ inputReady ? "settings-btn bg-pri font-22 mt-3 " : "settings-btn bg-pri font-22 mt-3 disabled" }>Save</button>


</Form>
 

          </div>
            
   
           </>
       )
   }
   
   
   export const UpdatePwdForm = ()=>{
   
   const [pwd1,setPwd1] = useState({value:'',valid:''}); 
   const [pwd2,setPwd2] = useState({value:'',valid:''});
   const [update,setUpdate] = useState({value:'',valid:''});
   const [confirm,setConfirm] = useState({value:'',valid:''});   
   const [disable,setDisable] = useState(true);
  const  [inputReady,setInputReady] = useState(false);


   const handleChange = (e)=>{
    e.preventDefault();
    const node = document.querySelector('#resHandler');
     let valid = true;
     if(!update.valid){
         valid = false;
     }
    
     if(!confirm.valid){
         valid = false;
     }

     if(!pwd1.valid){
         valid = false;
     }

     if(!pwd2.valid){
         valid = false;
     }

     if(valid){
       //  node.classList.remove('d-none');
       document.querySelector('#save').textContent = "updated";
     } 

     }

   
   const handlePwd1 =  ()=>{
       const input = document.querySelector('#pwd-1');
       const value = input.value;
       const label = document.querySelector('#pwd-label1');
       let valid = false;
          if(isEmpty(value)){
              setPwd1({value,valid:false});
              label.textContent = "Field is required";
              valid=false;
          }else{
              let min = 8;
               
                   
                if(value.length >= min){
            
                    setPwd1({value,valid:true});
                    label.textContent = 'password';
              valid=true;
                       //recheck pwd2 should incase user change input afterwards
                    if(value !== document.querySelector('#pwd-2').value){
                        setPwd2({valid:false});
                        document.querySelector('#pwd-label2').textContent = "Passwords don't match";
                           }else{
                               setPwd2({valid:true});
                     document.querySelector('#pwd-label2').textContent = "Passwords match";
                           } 
    
                   }else{
                       setPwd1({value,valid:false});
                       label.textContent = 'A minimum of 8';
                   }
 
          }
       
       }
   
      const handlePwd2 = ()=>{
       const input = document.querySelector('#pwd-2');
       const value = input.value;
       const label = document.querySelector('#pwd-label2');
       
          if(isEmpty(value)){
              setPwd2({value,valid:false});
              label.textContent = "Field is required";
          }else{
           
            if(value !== pwd1.value){
                setPwd2({value,valid:false});
                label.textContent = "Passwords don't match";
                   }else{
                       setPwd2({value,valid:true});
                       label.textContent = "Passwords match";
                   }

          }
      
      } 
   
   
      
   const handleUpdate =  ()=>{
       const input = document.querySelector('#update');
       const value = input.value;
       const label = document.querySelector('#update-label');

    
          if(isEmpty(value)){
              setUpdate({value,valid:false});
              label.textContent = "Field is required";
          }else{
            
                    let min = 8;
                    if(value.length >= min){

                        setUpdate({value,valid:true});
                        label.textContent = 'password';
            
                           //recheck pwd2 should incase user change input afterwards
                        if(value !== document.querySelector('#confirm').value){
                            setConfirm({valid:false});
                            document.querySelector('#confirm-label').textContent = "Passwords don't match";
                               }else{
                                   setConfirm({valid:true});
                         document.querySelector('#confirm-label').textContent = "Passwords match";
                               }
   
                    }else{
                        setUpdate({value,valid:false});
                        label.textContent = "A minimum of 8";
                    }
 
          }
       
       }
   
      const handleConfirm = ()=>{
       const input = document.querySelector('#confirm');
       const value = input.value;
       const label = document.querySelector('#confirm-label');
       
          if(isEmpty(value)){
              setConfirm({value,valid:false});
              label.textContent = "Field is required";
          }else{
         
                 
                    if(value !== pwd1.value){
                       setConfirm({value,valid:false});
                        label.textContent = "Passwords don't match";
                           }else{
                               setConfirm({value,valid:true});
                               label.textContent = "Passwords match";

                               if(!isEmpty(value) && !isEmpty(pwd1.value) && !isEmpty(pwd2.value) && !isEmpty(update.value) ){
                                   setDisable(false);
                               }
                           }
 
          }
      
      } 
    
   
       return (
           <>
          
          
     <div className="w-100 bg-white">
              
              <div className="w-100 border-e-t h bg-white">
                  <i className="fa fa-arrow mx-2"></i>
                  <h4 className="d-inline text-capitalize mx-2">update Password</h4>
                 </div>
            
                <div className="w-100 p-2 bg-light"></div>
                 
              
            <Form onSubmit={handleChange}>

            <div className="w-100 border-e-t h bg-white"> 
            
            <FormGroup className="settings-form-group">
                <Input id="pwd-1" type="password" className="settings-form-input"  valid={pwd1.valid ? true : false } invalid={pwd1.valid === false ? true : '' }  name="password" onChange={handlePwd1} />
                <Label id="pwd-label1" className="font-weight-bold">Password</Label>
                <hr className="bg-pri" />
              </FormGroup>

              
              <FormGroup className="settings-form-group">
                  <Input id="pwd-2" type="password" className="settings-form-input" valid={pwd2.valid ? true : false } invalid={pwd2.valid === false ? true : '' }  name="pwd2" onChange={handlePwd2} />
                  <Label id="pwd-label2" className="font-weight-bold">Confirm Password</Label>
                  <hr className="bg-pri" />
                </FormGroup>
               

              <FormGroup className="settings-form-group">
                  <Input id="update" type="password" className="settings-form-input" valid={update.valid ? true : false } invalid={update.valid === false ? true : '' }  name="updatePassword" onChange={handleUpdate} />
                  <Label id="update-label" className="font-weight-bold">New Password</Label>
                  <hr className="bg-pri" />
                </FormGroup>
 
                <FormGroup className="settings-form-group">
                    <Input id="confirm" type="password" className="settings-form-input" valid={confirm.valid ? true : false } invalid={confirm.valid === false ? true : '' }  name="confirm" onChange={handleConfirm} />
                    <Label id="confirm-label" className="font-weight-bold">Confirm Password</Label>
                    <hr className="bg-pri" />
                  </FormGroup>

                  </div>

                  <Alert color="danger" className="text-dark w-75 mx-auto font-weight-bold text-capitalize d-none mt-4" id="resHandler">changed</Alert>

                  <button id="save" disabled={disable} className="settings-btn bg-pri font-22 mt-3">Save</button>
                
                </Form>
                 
            
                   </div>
            
   
   
           </>
       )
   }
   
   
   export const SecurityForm = ()=> {
   
       return (
           <>
      
      
     <div className="w-100 bg-white">
              
              <div className="w-100 border-e-t p-10 bg-white">
                   
                  <h4 className="d-inline text-capitalize mx-2">security</h4>
                
                 </div>
            
                <div className="w-100 p-2 bg-light"></div>
   
                <div className="w-100 border-e-t p-2 bg-white">
                 
                  <h4 className="d-inline text-capitalize mx-2">Additional password authentication </h4>
   
                 </div>
        
            <div className="w-100 border-e-t p-10 bg-white">
   
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <span className="align-self-center">Password reset protect</span>
   
                    <Form className="align-self-center"> 
                    <Input type="checkbox" className="align-self-center form-control-lg"  id="checkbox" className="checkbox-1x" />
                    </Form>
                    
                </div>
             <small className="d-block text-muted mt-4">When you check this box, you will be required to verify additional information before you can request a password reset with just your email. If you have a phone number on your account, you will be sent a verification code before you can request a password reset with just your email address. </small>
            </div>
                
   </div>
   
           </>
       )
   }
   
   
   export const SMSNotification = ()=>{

    return(
        <>
 
      
 <div className="w-100 bg-white">
              
              <div className="w-100 border-e-t p-2 bg-white">
                   
                  <h4 className="d-inline text-capitalize mx-2">notifications</h4>
                
                 </div>
            
                <div className="w-100 p-2 bg-light"></div>
   
                <div className="w-100 border-e-t p-10 bg-white">
                 
                  <h4 className="d-inline text-capitalize mx-2"> personalization and preference</h4>
   
                 </div>
        
            <div className="w-100 border-e-t p-10 bg-white">
   
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <small className="align-self-center text-muted">Update about apartment and lodges owners you follow will be sent to your mail </small>
   
                    <Form className="align-self-center"> 
                    <CustomInput type="switch" id="smsnotification-switch" className="settings-switch checkbox-1x" name="customSwitch"/>
                    </Form>
                    
                </div>
             <small className="d-block text-muted mt-4">Newly added features and actions notifications wont be sent to your mail.  </small>
            </div>
                
   </div>
   

        </>
    )
   }


   export const EmailNotification = ()=>{

    return(
        <>
 
      
 <div className="w-100 bg-white">
              
              <div className="w-100 border-e-t p-2 bg-white">
                   
                  <h4 className="d-inline text-capitalize mx-2">notifications</h4>
                
                 </div>
            
                <div className="w-100 p-2 bg-light"></div>
   
                <div className="w-100 border-e-t h bg-white">
                 
                  <h4 className="d-inline text-capitalize mx-2"> personalization and preference</h4>
   
                 </div>
        
            <div className="w-100 border-e-t h bg-white">
   
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <small className="align-self-center text-muted">Update about apartment and lodges owners you follow will be sent to your sms </small>
   
                    <Form className="align-self-center"> 
                    <CustomInput type="switch" id="smsnotification-switch" className="settings-switch checkbox-1x" name="customSwitch"/>
                    </Form>
                    
                </div>
             <small className="d-block text-muted mt-4"> Notifications sent through sms will be at  interval. 
               <br />   Newly added features and actions notifications wont be sent to your sms.  </small>
            </div>
                
   </div>
   

        </>
    )
   }



//EOF settings form



export const ForgotPwd = (props)=>{

    const { setLoggedIn } = useContext(ContextObj);
     
     const [email,setEmail] = useState({value:'',valid:''});
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        var valid = true;

        if(!email.valid){
          setEmail({...email,valid:false});
            valid = false;
        } 
  

         if(valid){
         //setLogge 
       
         if(localStorage.getItem('email__accomease') !== email.value){
             document.querySelector('#submit-feedback').style.display = 'block';
         }else{
            localStorage.setItem('email-verification__accomease',email.value);
            props.history.push('/password_verfication');
         }
              
         }

    }   

    const handleEmail = (props)=>{

        const obj = document.querySelector('#email');
        const feedback = document.querySelector('#email-error-feedback');
        const value = obj.value;
       if(isEmpty(value)){
           setEmail({value,valid:false});
           feedback.textContent = 'Your email is required';
       }else{
           
        if(isEmail(value)){
            setEmail({value,valid:true});
           
           }else{
               setEmail({value,valid:false});
               feedback.textContent = 'Email format isn\'t valid';
           }
       }
         
    }
 

 
     
  return (
   <> 
       <Form className="form-container" onSubmit={handleSubmit}> 
       
       
     <div className="form-brand">   
         <img src={require('../../assests/images/brand.jpg')} alt=""   />
         </div>
        <h6 className="my-4">Verification mail to recieve code</h6>

      <Alert color="danger" id="submit-feedback" className="my-2" style={{display:'none'}} >A user with this email don't exists. <Link to="/sign-up"> please sign up to create an account. </Link></Alert>

          <FormGroup>
              <Input type="email" className="text-muted  form-control-lg input-radius" valid={email.valid  ? true : false} invalid={ email.valid === false ? true : '' }  id="email" value={email.value} onChange={handleEmail} placeholder="Email Address"    />
         <FormFeedback className="form-feedback" id="email-error-feedback" invalid></FormFeedback>
          </FormGroup>
 
          
          <FormGroup>
              <Input type="submit" value="submit" className="w-100 button bg-pri  btn-lg border-0" />
          </FormGroup>

          {/* <Link className="text-decoration-none text-sec text-center" to="#"> <h6 className="font-13">Forgot my Password </h6></Link> */}
       </Form>
 

       </>
   )

}



export const PwdRecoveryVerification = (props)=>{

    const { setLoggedIn } = useContext(ContextObj);
     
     const [pwd,setPwd] = useState({value:'',valid:''});
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        var valid = true;

        if(!pwd.valid){
          setPwd({...pwd,valid:false});
            valid = false;
        } 
  

         if(valid){
          props.history.push('/set_password');
             
         }

    }   

    const handlePwd = (props)=>{

        const obj = document.querySelector('#pwd');
        const feedback = document.querySelector('#pwd-error-feedback');
        const value = obj.value;
        const max = 6;
       if(isEmpty(value)){
           setPwd({value,valid:false});
           feedback.textContent = 'Verification code required';
       }else{
            if(value.length !== max){
                setPwd({value,valid:false});
                feedback.textContent = 'verfication code of 6 input';
            }else{
                setPwd({value,valid:true});
            }
       }
         
    }
 
 const Resend = ()=>{
       document.querySelector('#code-resend').style.display = 'block';
       document.querySelector('#code-resend').textContent = 'check your mail code as been resent to you';
 }
 
     
  return (
   <> 
       <Form className="form-container" onSubmit={handleSubmit}> 
       
       
     <div className="form-brand">   
         <img src={require('../../assests/images/brand.jpg')} alt=""   />
         </div>

      <Alert color="primary" id="code-resend" className="my-2" style={{display:'none'}}></Alert>

        <h6 className="my-4">Enter verfication code sent to { localStorage.getItem('email-verification__accomease') }</h6>
          <FormGroup>
              <Input type="password" className="text-muted  form-control-lg input-radius" valid={pwd.valid  ? true : false} invalid={ pwd.valid === false ? true : '' }  id="pwd"  onChange={handlePwd} placeholder="* * * * * * "    />
         <FormFeedback className="form-feedback" id="pwd-error-feedback" invalid></FormFeedback>
          </FormGroup>
 
          
          <FormGroup>
              <Input type="submit" value="submit" className="w-100 button bg-pri  btn-lg border-0" />
          </FormGroup>

    <h6 onClick={Resend} className="font-13 text-tertiary text-center" style={{cursor:'pointer'}}>Didn't get any code!</h6>
       </Form>
 

       </>
   )

}




export const Login = (props)=>{


    useEffect(()=>{

// localStorage.removeItem('firstname__accomease');
// localStorage.removeItem('lastname__accomease');
// localStorage.removeItem('email__accomease');
// localStorage.removeItem('pwd__accomease');
// localStorage.removeItem('LoggedIn__accomease');
  
localStorage.setItem('LoggedIn__accomease','false');

},[props.history.pathname]);
   // const { setLoggedIn } = useContext(ContextObj);
     
     const [email,setEmail] = useState({value:'',valid:''});
    const [pwd,setPwd] = useState({value:'',valid:''});

    const handleSubmit = (e)=>{
        e.preventDefault();
        var valid = true;

        if(!email.valid){
          setEmail({...email,valid:false});
            valid = false;
        } 
 
        if(!pwd.valid){
            setPwd({...pwd,valid:false});
            valid=false;
        }
 

         if(valid){
             let log = true;
         const p = document.querySelector('#pwd');
         const e = document.querySelector('#email');
            if(localStorage.getItem('pwd__accomease') !== p.value){
                document.querySelector('#submit-feedback').style.display = 'block';
                document.querySelector('#submit-feedback').textContent = 'Password or email dont match our records';
                log = false;
            }

             if(localStorage.getItem('email__accomease') !== e.value) {
                document.querySelector('#submit-feedback').style.display = 'block';
                document.querySelector('#submit-feedback').textContent = 'Password or email dont match our records'
             log = false;
         }
            
         if(log){
            localStorage.setItem('LoggedIn__accomease','true');
            if(localStorage.getItem('LoggedIn__accomease') === 'true') props.history.push('/');
         }

    }
}   

    const handleEmail = (props)=>{

        const obj = document.querySelector('#email');
        const feedback = document.querySelector('#email-error-feedback');
        const value = obj.value;
       if(isEmpty(value)){
           setEmail({value,valid:false});
           feedback.textContent = 'Your email is required';
       }else{
           
        if(isEmail(value)){
            setEmail({value,valid:true});
           
           }else{
               setEmail({value,valid:false});
               feedback.textContent = 'Email format isn\'t valid';
           }
       }
         
    }
 


    const handlePwd = ()=>{
 
 const node = document.querySelector('#pwd');
 const value = node.value;
 const feedback = document.querySelector('#pwd-error-feedback');
 
  if(isEmpty(value)){
      setPwd({value,valid:false});
      feedback.textContent = 'A password is required';
  }else{
    setPwd({value,valid:true});
  } 
    }


     
  return (
   <> 
       <Form className="form-container" onSubmit={handleSubmit}> 
       
       
     <div className="form-brand">   
         <img src={require('../../assests/images/brand.jpg')} alt=""   />
         </div>
          
          <FormGroup>
              <Input type="email" className="text-muted  form-control-lg" valid={email.valid  ? true : false} invalid={ email.valid === false ? true : '' }  id="email" value={email.value} onChange={handleEmail} placeholder="Email Address"    />
         <FormFeedback className="form-feedback" id="email-error-feedback" invalid></FormFeedback>
          </FormGroup>

          
          <FormGroup>
              <Input type="password" className="text-muted form-control-lg" id="pwd" valid={pwd.valid ? true : false } invalid={ pwd.valid === false ? true : '' } placeholder="Password" onChange={handlePwd}   />
          <FormFeedback className="form-feedback" id="pwd-error-feedback" invalid> </FormFeedback>
          </FormGroup>
          
          <FormGroup>
              <Input type="submit" value="Login" className="btn bg-pri btn-block btn-lg border-0" />
          </FormGroup>
          <div className="w-100 d-flex justify-content-between">
          <Link className="text-decoration-none text-sec text-center" to="/sign-up"> <h6 className="font-13">Dont have an account! </h6></Link>
          <Link className="text-decoration-none text-sec text-center" to="/password_recovery"> <h6 className="font-13">Forgot my Password </h6></Link>        

          </div>
          
  <Alert color="danger" id="submit-feedback" style={{display:'none'}}></Alert>

           
      
       </Form>
 

       </>
   )

}

 export const SetPwd = (props)=>{

     const [pwd,setPwd] = useState({value:'',valid:''});
     const [confirm,setConfirm] = useState({value:'',valid:''});

  const handleSubmit = (e)=>{
      e.preventDefault();
      let valid = true;
        if(!pwd.valid){
            setPwd({...pwd,valid:false});
            valid = false;
        }
        if(!confirm.value){
            setConfirm({...confirm,valid:false});
            valid = false;
        }
      if(valid){
     //setLoggedIn(true);
     if(pwd.value !== ''){
        localStorage.setItem('pwd__accomease',pwd.value);
        if(localStorage.getItem('pwd__accomease') === pwd.value)   props.history.push('/');
    }
  }
  }
    const handlePwd = (e)=>{
 
        const id = e.target.getAttribute('id');
 const node = document.querySelector(`#${id}`);
 const value = node.value;
 const feedback = document.querySelector(`#${id}-error-feedback`);
     
     if(isEmpty(value)){
         setPwd({value,valid:false});
         feedback.textContent = 'Your new password is required';
     }else{
         
      if(value.length < 8){
      setPwd({value,valid:false});
      feedback.textContent = 'A minimum of 8 character';
      }  else setPwd({value,valid:true});
         
  if(value !== document.querySelector('#confirm').value){
      setConfirm({...confirm,valid:false});
      document.querySelector('#confirm-error-feedback').textContent="Passwords dont match";
  }


     }   // not empty

}

    

    const handleConfirm = (e)=>{

       const id = e.target.getAttribute('id');
        const node = document.querySelector(`#${id}`);
        const value = node.value;
        const feedback = document.querySelector(`#${id}-error-feedback`);
       
         if(isEmpty(value)){
        setConfirm({value,valid:false});
            feedback.textContent = 'confirm password is required';
         }else{
               if(value !== document.querySelector('#pwd').value){
                   setConfirm({value,valid:false});
                feedback.textContent = "Passwords don't match";
               }else{
            setConfirm({value,valid:true});
               }
       
            }
        }



    return (
        <>
      
      <Form className="form-container" onSubmit={handleSubmit}>
        
      <div className="form-brand">   
         <img src={require('../../assests/images/brand.jpg')} alt=""   />
         </div>
        <h6 className="my-4">One step away... </h6>
          <FormGroup>
              <Input type="password" className="text-muted  form-control-lg input-radius" valid={pwd.valid  ? true : false} invalid={ pwd.valid === false ? true : '' }  id="pwd"  onChange={handlePwd} placeholder="Password"    />
         <FormFeedback className="form-feedback" id="pwd-error-feedback" invalid></FormFeedback>
          </FormGroup>
            
                 <FormGroup>
              <Input type="password" className="text-muted  form-control-lg input-radius" valid={confirm.valid  ? true : false} invalid={ confirm.valid === false ? true : '' }  id="confirm"  onChange={handleConfirm} placeholder="Confirm Password"    />
         <FormFeedback className="form-feedback" id="confirm-error-feedback" invalid></FormFeedback>
          </FormGroup>
       
       <button id="submit" className="button btn-lg w-100 bg-pri text-capitalize">Reset</button>
          </Form>

        </>
    )
}


const SignUp = (props) => {


    const [email,setEmail] = useState({value:'',valid:''});

    const [LAFirstname,setLAFirstname] = useState({value:'',valid:''});
    const [LALastname,setLALastname] = useState({value:'',valid:''});
    const [LApwd,setLApwd] = useState({value:'',valid:''});
    const [LAconfirm,setLAconfirm] = useState({value:'',valid:''});
    const [LAUnit,setLAUnit] = useState({value:0,valid:''});
   

    // const [apply,setApply] = useState(false);
    // const [select,setSelect] = useState(false);
    // const [faculty,setFaculty] = useState(['saat','seet','shht','scom','set','smat','sems','others']);
    // const [levels,setLevels] = useState(['100L','200L','300L','400L','500L','PG','Masters','NYSC Service','UABS','Pre Degree']);
    // const [levelSelect,setLevelSelect] = useState(false);
  
     
    
    
    const [RFirstname,setRFirstname] = useState({value:'',valid:''});
    const [RLastname,setRLastname] = useState({value:'',valid:''});
    const [Rpwd,setRpwd] = useState({value:'',valid:''});
    const [Rconfirm,setRconfirm] = useState({value:'',valid:''});
   const  [Rbio,setRbio]= useState({size:280,valid:''});
    
  useEffect(()=>{

    
localStorage.removeItem('firstname__accomease');
localStorage.removeItem('lastname__accomease');
localStorage.removeItem('email__accomease');
localStorage.removeItem('pwd__accomease');
localStorage.removeItem('LoggedIn__accomease');
localStorage.removeItem('email-verification__accomease');

  },[props.history.pathname]);

  
//   const handleFaculty = (e)=>{
//     let value = e.target.textContent;
//     document.querySelector('.faculty').textContent = value;
//     setSelect(!select);
// }


// const toggleSelect = (e)=>{
  
//     setSelect(!select);
//   }  

  
//   const handleLevel = (e)=>{
//     let value = e.target.textContent;
//     document.querySelector('.level').textContent = value;
//    setLevelSelect(!levelSelect);
// }


// const toggleLevelSelect = (e)=>{
  
//     setLevelSelect(!levelSelect);

//   }
  
   

    const handleSubmit = (e)=>{
       e.preventDefault();
        var valid = true;
      const LA = document.querySelector('#a-opt');
      const R = document.querySelector('#b-opt')

        if(LA.checked === true){

            if(LAFirstname.valid === false || LAFirstname.valid === '' ){
                valid = false;
           setLAFirstname({...LAFirstname,valid:false});
            }

            if(LALastname.valid === false || LALastname.valid === ''){
                valid = false;
                setLALastname({...LALastname,vaild:false});
            }

            if(LApwd.valid === false || LApwd.valid === ''){
                valid = false;
                setLApwd({...LApwd,valid:false});
            }
            
            if(LAconfirm.valid === false || LAconfirm.valid === ''){
                valid = false;
                setLAconfirm({...LAconfirm,valid:false});
            }

            if(LAUnit.valid === false || LAUnit.valid === ''){
                valid = false;
                setLAUnit({...LAUnit,valid:false});
            }

        }
        else if(R.checked){

             if(RFirstname.valid === false || RFirstname.valid === ''){
                 valid = false;
                 setRFirstname({...RFirstname,valid:false});
             }

             if(RLastname.valid === false || RLastname.valid === ''){
                 valid = false;
                 setRLastname({...RLastname,valid:false});
             }

             if(Rpwd.valid === false || Rpwd.valid === ''){
                 valid = false;
                 setRpwd({...Rpwd,valid:false});
             }
             
             if(Rconfirm.valid === false|| Rconfirm.valid ==='' ){
                 valid = false;
                 setRconfirm({...Rconfirm,valid:false});
             }

             if(Rbio.valid === false || Rbio.valid === ''){
                valid = false;
                setRbio({...Rbio,valid:false});
             }

       
            }//EOF R-submit
    
           if(valid){
               if(LAFirstname.value !== '' && email.value !== '' && LA.checked && LApwd.value !== ''){
          localStorage.setItem('firstname__accomease',LAFirstname.value);
          localStorage.setItem('pwd__accomease',LApwd.value);
          localStorage.setItem('email__accomease',email.value);
          props.history.push('/login');   
               }else if( RFirstname.value !== '' && email.value !== '' && R.checked && Rpwd.value !== '' ){
                localStorage.setItem('firstname__accomease',RFirstname.value);
                localStorage.setItem('pwd__accomease',Rpwd.value);
                localStorage.setItem('email__accomease',email.value);
                props.history.push('/login');   
               }
             
           }

        
    } //EOF submit   

    const handleEmail = (e)=>{
         
        const id = e.target.getAttribute('id');
        const node = document.querySelector(`#${id}`);
        const feedback = document.querySelector(`#${id}-error-feedback`);
        const value = node.value;
       if(isEmpty(value)){
            
           setEmail({value,valid:false});
           
           feedback.textContent = 'Your email is required';
       }else{
           
        if(isEmail(value)){
            setEmail({value,valid:true});
           
           }else{
            setEmail({value,valid:false});
               feedback.textContent = 'Email format isn\'t valid';
           }
       }
         
    }


    const checkId = (id,state,arg,redirect=false) => {
        
          if(!redirect){
      
            // normal check with no conflicting form member   
        if(state === 'lastname'){
            id === 'LA-lastname' ? setLALastname(arg) : setRLastname(arg);
         }
 
         else if (state === 'firstname'){
             id === 'LA-firstname' ? setLAFirstname(arg) : setRFirstname(arg);
         }
 
         else if (state === 'pwd'){
             id === 'LA-pwd' ? setLApwd(arg) : setRpwd(arg);
         }
 
        
         else if (state === 'confirmPwd'){
             const { value,feedback } = arg;

             if(id === 'LA-confirm-pwd'){
                                
            if(value !== LApwd.value){
                setLAconfirm({value,valid:false});
                feedback.textContent = "Passwords don't match";
            }else{
                setLAconfirm({value,valid:true});                  
            }

             }else{
                   
            if(value !== Rpwd.value){
                setRconfirm({value,valid:false});
                feedback.textContent = "Passwords don't match";
            }else{
                setRconfirm({value,valid:true});                  
            }

             }

             
         }

         else return;

          } //EOF if Redirect

          else{  //conflicting form member
 
               if(id === 'LA-pwd'){
                const { value } = arg.value;
            if(value !== document.querySelector('#LA-confirm-pwd').value){
                setLAconfirm({value,valid:false});
                document.querySelector('#LA-confirm-pwd-error-feedback').textContent = "Passwords don't match";
            }else{
                setLAconfirm({value,valid:true});
                document.querySelector('#LA-confirm-pwd-success-feedback').textContent = "Passwords match";
            }
           
               }

               else if(id === 'R-pwd') {
                const { value } = arg.value;
                if(value !== document.querySelector('#R-confirm-pwd').value){
                setRconfirm({value,valid:false});
                document.querySelector('#R-confirm-pwd-error-feedback').textContent = "Passwords don't match";
            }else{
                setRconfirm({value,valid:true});
                document.querySelector('#R-confirm-pwd-success-feedback').textContent = "Passwords match";
            }

               }
                                
          } //EOF redirect else

    }  //EOF checkId

    const handleLastname = (e)=>{
        const id = e.target.getAttribute('id');
        const node = document.querySelector(`#${id}`);
        const value = node.value;
       const feedback = document.querySelector(`#${id}-error-feedback`);
        if(isEmpty(value)){
           checkId(id,'lastname',{value,valid:false});
            feedback.textContent = 'Your lastname is required';
        }else{
           checkId(id,'lastname',{value,valid:true});
        }
    }

    
    const handleFirstname = (e)=>{
        const id = e.target.getAttribute('id');
        const node = document.querySelector(`#${id}`);
        const value = node.value;
       const feedback = document.querySelector(`#${id}-error-feedback`);
        if(isEmpty(value)){
            checkId(id,'firstname',{value,valid:false});
            feedback.textContent = 'Your firstname is required';
        }else{
            checkId(id,'firstname',{value,valid:true});
        }
    }


    const handlePwd = (e)=>{
 
        const id = e.target.getAttribute('id');
 const node = document.querySelector(`#${id}`);
 const value = node.value;
 const feedback = document.querySelector(`#${id}-error-feedback`);

  if(isEmpty(value)){
    //setLApwd({value,valid:false});
    checkId(id,'pwd',{value,valid:false});
      feedback.textContent = 'A password is required';
  }else{
       const max = 20,min = 8;
                                                        
       if(value.length >= min ){
        //setLApwd({value,valid:true});

        checkId(id,'pwd',{value,valid:true});
             //  Recheck pwd 2 should incase user change input afterwards
        
             checkId(id,'confirmPwd',{value,valid:false},true);
 


       }else{
       // setLApwd({value,valid:false});
       checkId(id,'pwd',{value,valid:false});
           feedback.textContent = 'A minimum of 8';
 
                  //  Recheck pwd 2 should incase user change input afterwards
                  checkId(id,'confirmPwd',{value,valid:false},true);

       }
  }
    }

    

    const handleConfirmPwd = (e)=>{

       const id = e.target.getAttribute('id');
        const node = document.querySelector(`#${id}`);
        const value = node.value;
        const feedback = document.querySelector(`#${id}-error-feedback`);
       
         if(isEmpty(value)){
          //  setLAconfirm({value,valid:false});
          checkId(id,'confirmPwd',{value,valid:false,feedback});
         feedback.textContent = 'A password is required';
         }else{
              
            checkId(id,'confirmPwd',{value,valid:false,feedback},false);
          // feedback.textContent = "Passwords don't match";
            }
        }

        const handleUnit = (e)=>{
            const input = e.currentTarget;
            const value = input.value;
            const feedback = document.querySelector('#LA-unit-error-feedback');
            if(isEmpty(value)){
            setLAUnit({value,valid:false});
            feedback.textContent="Field is required";
            }else{
                setLAUnit({value,valid:true});
            }
        }

        const countBio = (e)=>{
            const input = e.currentTarget;
            const length = input.value.length;
            const max = input.getAttribute('maxlength');
            const min = input.getAttribute('minlength');
          //  const size = bio.size - length;
          //  const feedback = document.querySelector('#history-bio-error-feedback');
            const size = max - length;
            if(length < min){
                setRbio({size,valid:false});
            }else{
                setRbio({size,valid:true})
            } 
        }
         

  return(
   <> 
     <Form onSubmit={handleSubmit} className=" form-sl">
  
     <div className="form-brand-conta">   
         <img src={require('../../assests/images/brand.jpg')} alt=""   />
         </div>
  
         
   <h4 className="text-sec text-center mb-5"> Get started with us </h4>
     
    <FormGroup>
        
         <Input type="email" valid={email.valid  ? true : false} invalid={ email.valid === false ? true : '' } className="text-muted input-radius form-control-lg"  id="email"  onChange={ handleEmail } placeholder="Email Address"    />
    <FormFeedback className=" form-feedback" id="email-error-feedback" invalid></FormFeedback>
     </FormGroup>
  
      <div className="radio-tab"> 
			<input type="radio" className="radio-btn" name="choice" id="a-opt" />
			<label for="a-opt"   className="radio-label text-capitalize ">landlord / agent</label> 

	  
			<input type="radio" className="radio-btn" name="choice" id="b-opt" />
			<label for="b-opt" id="b-opt-label"   className="radio-label text-capitalize">renter</label>     
            <hr />

            
            <div className="landlord-form">
               
               <Container fluid={true}>
                  
                  <Row>

                      <Col xs="12" sm="6">
                             
                             
     <FormGroup className="">
         <Input type="text" className="text-muted form-control-lg landlord-form-input" id="LA-firstname" valid={LAFirstname.valid ? true : false} invalid={ LAFirstname.valid === false ? true : '' }  placeholder="Firstname" onChange={handleFirstname}   />
     <FormFeedback className="form-feedback" id="LA-firstname-error-feedback" invalid></FormFeedback>
     </FormGroup>
 
                      </Col>


                      <Col xs="12" sm="6">
                             
 
     <FormGroup className="">
         <Input type="text" className="text-muted form-control-lg landlord-form-input"  id="LA-lastname" valid={LALastname.valid ? true : false} invalid={ LALastname.valid === false ? true : '' }  placeholder="Lastname" onChange={handleLastname}  />
     <FormFeedback className=" form-feedback" id="LA-lastname-error-feedback" invalid></FormFeedback>
     </FormGroup>
                      </Col>

                      
               
                      <Col xs="12" sm="6">
                             
                             
     <FormGroup className="">
         <Input type="password" className="text-muted form-control-lg landlord-form-input "  id="LA-pwd" valid={LApwd.valid ? true : false } invalid={ LApwd.valid  === false ? true : '' } placeholder="Password" onChange={ handlePwd }  />
     <FormFeedback className="form-feedback" id="LA-pwd-error-feedback" invalid> </FormFeedback>
     </FormGroup>
                
                      </Col>


                      <Col xs="12" sm="6">
                             
                 
     <FormGroup className="">
         <Input type="password" className="text-muted form-control-lg landlord-form-input" id="LA-confirm-pwd" valid={ LAconfirm.valid ? true : false } invalid={ LAconfirm.valid === false ? true : '' } placeholder="Confirm Password" onChange={ handleConfirmPwd}   />
     <FormFeedback className="form-feedback" id="LA-confirm-pwd-error-feedback" invalid> </FormFeedback>
     <FormFeedback className="form-feedback" id="LA-confirm-pwd-success-feedback" valid> </FormFeedback>
     </FormGroup>

                       </Col>

                       <Col xs="12">
                             
                                                         
     <FormGroup className="">
         <Label htmlFor="LA-unit">Number of unit manage</Label>
         <Input type="number" className="text-muted form-control-lg" id="LA-unit" placeholder="Apartments,Lodges,rooms" valid={LAUnit.valid ? true : false} invalid={ LAUnit.valid === false ? true : '' }   onChange={handleUnit}   />
     <FormFeedback className="form-feedback" id="LA-unit-error-feedback" invalid></FormFeedback>
     </FormGroup>
 
                 
     
     <FormGroup>
         <Input type="submit" id="LA-submit"   value="Sign Up" className="btn bg-pri font-weight-bold w-100 form-control-lg border-0" />
     </FormGroup>
                        
                                               </Col>
                          </Row>

                   </Container>

                   
  

            </div>
        


        
            <div className="renter-form">


               <Container fluid={true}>
                  
                  <Row>

                      <Col xs="12" sm="6">
                             
                             
     <FormGroup className="">
         <Input type="text" className="text-muted form-control-lg landlord-form-input" id="R-firstname" valid={RFirstname.valid ? true : false} invalid={ RFirstname.valid === false ? true : '' }  placeholder="Firstname" onChange={handleFirstname}   />
     <FormFeedback className="form-feedback" id="R-firstname-error-feedback" invalid></FormFeedback>
     </FormGroup>
 
                      </Col>


                      <Col xs="12" sm="6">
                             
 
     <FormGroup className="">
         <Input type="text" className="text-muted form-control-lg landlord-form-input"  id="R-lastname" valid={RLastname.valid ? true : false} invalid={ RLastname.valid === false ? true : '' }  placeholder="Lastname" onChange={handleLastname}  />
     <FormFeedback className=" form-feedback" id="R-lastname-error-feedback" invalid></FormFeedback>
     </FormGroup>
                      </Col>

                      
               
                      <Col xs="12" sm="6">
                             
                             
     <FormGroup className="">
         <Input type="password" className="text-muted form-control-lg landlord-form-input "  id="R-pwd" valid={Rpwd.valid ? true : false } invalid={ Rpwd.valid  === false ? true : '' } placeholder="Password" onChange={ handlePwd }  />
     <FormFeedback className="form-feedback" id="R-pwd-error-feedback" invalid> </FormFeedback>
     </FormGroup>
                
                      </Col>


                      <Col xs="12" sm="6">
                             
                 
     <FormGroup className="">
         <Input type="password" className="text-muted form-control-lg landlord-form-input" id="R-confirm-pwd" valid={ Rconfirm.valid ? true : false } invalid={ Rconfirm.valid === false ? true : '' } placeholder="Confirm Password" onChange={ handleConfirmPwd}   />
     <FormFeedback className="form-feedback" id="R-confirm-pwd-error-feedback" invalid> </FormFeedback>
     <FormFeedback className="form-feedback" id="R-confirm-pwd-success-feedback" valid> </FormFeedback>
     </FormGroup>

                       </Col>

                       <Col xs="12">
                             
                 <FormGroup>
                     <Label htmlFor="#history-bio" id="history-bio-label">Tell us about your rent history</Label>
                     <Input type="textarea" id="history-bio" minlength="8" maxlength="280" invalid={Rbio.valid === false ? true : '' } placeholder="A minimum of 8 word" onChange={countBio} name="history-bio" />
                     <span className="text-muted ml-auto">word count: { Rbio.size }</span>
                     <FormFeedback id="history-bio-error-feedback" invalid></FormFeedback>
                 </FormGroup>
     
     <FormGroup>
         <Input type="submit" id="R-submit" value="Sign Up" className="btn bg-pri font-weight-bold w-100 form-control-lg border-0" />
     </FormGroup>
                        
                                               </Col>
                          </Row>

                   </Container>

                
            </div>

          
          
            </div>  { /* EOF radio tab */ }
            
           <div>
           <h5 className="text-center">Already Have an account? <Link to="/login" className="text-decoration-none text-pri">Login</Link> </h5>  
           <h5 className="text-center">If you sign up you agree to our <span className="text-sec" style={{cursor:'pointer'}}>terms of service and policies </span> </h5>
               </div>
        

        </Form>
 


   </>
   )

 }


export default SignUp;