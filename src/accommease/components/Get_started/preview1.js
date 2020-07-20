import React from 'react';
import './getStarted.scss';


const Indicator = (props)=>{
 
    return (
        <>
  <div className="d-flex justify-content-center my-20">
      <div onClick={()=>{ props.history.push('/') }} className={props.active === 'preview1' ? 'activeIndicator' : 'indicator'}></div>
      <div onClick={()=>{ props.history.push('preview2') }} className={props.active === 'preview2' ? 'activeIndicator' : 'indicator'}></div>
      <div onClick={()=>{ props.history.push('preview3') }} className={props.active === 'preview3' ? 'activeIndicator' : 'indicator'}></div>
      <div onClick={()=>{ props.history.push('preview4') }} className={props.active === 'preview4' ? 'activeIndicator' : 'indicator'}></div>
      

  </div>
  
        </>
    )
}

 






const Preview1 = (props)=>{
    return ( 
    <>
  
   
 
       <div className="scaled-center">
       <div className="w-100">
   <img src={require('../../assests/images/no-wahala.jpg')} className="img-scaled" alt="" />
 
   <h4 className=" font-weight-bold text-nowrap text-sec my-3 text-capitalize">No Wahala </h4>
    <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
    <p className="font-18 text-wrapped text-muted my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
     
   </div>
 
 <Indicator active="preview1" history={props.history} />
   <button className="button bg-pri text-capitalize shadow" onClick={()=>{props.history.push('/sign-up')}}> get started </button>
 
    
 
       </div>
        
     </>
    );
 }

 
 export default Preview1;