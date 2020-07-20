//sign up


<Form className=" w-res text-center" onSubmit={handleSubmit}> 
       
{/* <img src={require('../../assests/images/user.png')}  style={{width:'140px',height:'140px'}} alt="" />
<div className=" ml-3 mb-2 text-muted"><span>Add profile picture</span> <img src={require('../../assests/images/camera.png')} alt="" style={{width:'15px',height:'15px',marginBottom:'15px'}}/> </div> */}
     

     <FormGroup>
         <Input type="text" id="firstname" valid={firstname.valid ? true : false} invalid={ firstname.valid === false ? true : '' }  placeholder="Firstname" onChange={handleFirstName} className="text-muted input-radius "  />
     <FormFeedback className="font-16" id="firstname-error-feedback" invalid></FormFeedback>
     </FormGroup>

     <FormGroup>
         <Input type="text" id="lastname" valid={lastname.valid ? true : false} invalid={ lastname.valid === false ? true : '' }  placeholder="Lastname" onChange={handleLastName} className="text-muted input-radius "  />
     <FormFeedback className="font-16" id="lastname-error-feedback" invalid></FormFeedback>
     </FormGroup>


     
     <FormGroup>
         <Input type="email" valid={email.valid  ? true : false} invalid={ email.valid === false ? true : '' } className="text-muted input-radius" id="email" value={email.value} onChange={handleEmail} placeholder="Email Address"    />
    <FormFeedback className="font-16" id="email-error-feedback" invalid></FormFeedback>
     </FormGroup>

     
     <FormGroup>
         <Input type="password" id="pwd" valid={pwd.valid ? true : false } invalid={ pwd.valid === false ? true : '' } placeholder="Password" onChange={handlePwd} className="text-muted input-radius"  />
     <FormFeedback className="font-16" id="pwd-error-feedback" invalid> </FormFeedback>
     </FormGroup>

       
     <FormGroup>
         <Input type="password" id="confirm-pwd" valid={Confirmpwd.valid ? true : false } invalid={ Confirmpwd.valid === false ? true : '' } placeholder="Confirm Password" onChange={handleConfirmPwd} className="text-muted input-radius"  />
     <FormFeedback className="font-16" id="confirm-pwd-error-feedback" invalid> </FormFeedback>
     <FormFeedback className="font-16" id="confirm-pwd-success-feedback" valid> </FormFeedback>
     </FormGroup>
     
     <FormGroup>
         <Input type="submit" value="Sign Up" className="button bg-pri font-weight-bold w-100 input-radius border-0" />
     </FormGroup>

     <span className="text-muted font-weight-bold mx-2">Have an account?</span><span><Link className="text-decoration-none text-sec font-weight-bold" to="/login">Login</Link></span>
  </Form>


//radio


<div 
className="radio-list "
 
>

    <div className="radio__item">
       <input type="radio" className="radio-btn" name="choice" id="a-opt" />
       <label for="a-opt" onClick={()=>{toggle('landlord')}} className="radio-label text-capitalize">landlord / agent</label>
   </div>

    
   <div className="radio__item">
       <input type="radio" className="radio-btn" name="choice" id="b-opt" />
       <label for="b-opt" onClick={()=>{toggle('renter')}} className="radio-label text-capitalize">renter</label>
   </div>


</div>




 
@import '.././styles/variables';
@import '.././styles/queries';


// .radio-list  {
//     display:flex;
//     flex-direction:column;
//  // border:2px solid red;
//      list-style:none; 
    
//     @include media(640px){
//         flex-direction:row;
//         justify-content:space-between;
//     }
// }

// .radio__item {
//     position: relative;
//     //border-radius:5px;
//     background:transparent;
// 	margin:10px;
//     width:300px;
//     height:70px;
//    // padding-left:10px;
//     box-sizing:border-box;
//     //border:1px solid $secondary;
    
// 	&:hover > .radio-label {
//         color: $primary;
//         border:1px solid $primary;
// 		&::before {
// 			border: 0.5rem solid $primary;
// 			margin-right: 2rem;
//         }
        
// 	}
// }

.radio-btn {
   position: absolute;
   opacity:0;
   visibility:visible;
   &:checked + .radio-label {
       color: $primary;
       background:$faint;
       border:1px solid $secondary;
       &::before {
           margin-right: 2rem;
           border: 0.5rem solid $primary;
           background: $secondary;
       }
        
   }
}

.radio-label {
   display: flex;
   justify-content:start;
   padding-left:10px;
   align-items: center;
  height:60px;
  width:calc(50% - 20px);
   color:$secondary;
   border-radius:5px;
   border:1px solid $secondary;
   cursor: pointer;
   transition: all 0.25|||||||||||||||||||||||||||||||||||||||||s linear;
   
   &:hover{
       color:$primary;
       border:1px solid $primary;
      &::before{
       border: 0.5rem solid $primary;
          background:$secondary;
          margin-right:2rem;
      } 
  }
}

.radio-label::before {
   display: inline-block;
   content: "";
   height: 1.5rem;
   width: 1.5rem;
   margin-right: 0.625rem;
   b: 50%;
   transition: all 0.25|s linea|;
}









//true dropdown




{/* 
                
<Row>

<Col xs="12" sm="6">
<div className="w-100"> 
       <div className="select-input my-4 text-capitalize text-dark d-flex justify-content-between align-items-center">
           <span className="mx-3 faculty font-weight-bold">select your school</span> <img className="caret" onClick={toggleSelect} src={require('../../assests/images/arrow-down.png')}  />
           </div> 
           <Collapse isOpen={select}   className="w-50 bg-white select-collapse shadow">
               <ul className="list-unstyled"> 
              {
                 faculty.map((school,i)=>{
               return <li className="w-100  select-item p-2" key={i} onClick={handleFaculty}>{school}</li>;
                  })

                  }
               </ul>
           </Collapse>
           </div>
         

</Col>

<Col xs="12" sm="6">

<div className="w-100"> 
       <div className="select-input my-4 text-capitalize text-dark d-flex justify-content-between align-items-center">
           <span className="mx-3 level font-weight-bold">select your level</span> <img className="caret" onClick={toggleLevelSelect} src={require('../../assests/images/arrow-down.png')}  /> 
           </div> 
           <Collapse isOpen={levelSelect} className="w-50 bg-white select-collapse r shadow">
               <ul className="list-unstyled"> 
              {
                 levels.map((level,i)=>{
               return <li className="w-100  select-item p-2" key={i} onClick={handleLevel}>{level}</li>;
                  })

                  }
               </ul>
           </Collapse>
           </div>

</Col>

</Row>
 */}
       
