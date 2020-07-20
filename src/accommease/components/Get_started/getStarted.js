import React, { useEffect, Suspense,Lazy } from 'react';
import {
Container,Row,Col
} from 'reactstrap';
import styled from 'styled-components';
import Loader from '../Loader/Loader';
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

 

 export const Preview1 = (props)=>{
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


export const Preview2 = (props)=>{
    return ( 
    <>
  
    
  <div className="scaled-center">
      <div className="w-100">
  <img src={require('../../assests/images/variety.jpg')} className="img-scaled" alt="" />

  <h4 className=" font-weight-bold text-nowrap text-sec my-3 text-capitalize">Variety </h4>
   <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
   <p className="font-18 text-wrapped text-muted my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
    
  </div>

<Indicator active="preview2" history={props.history} />
  <button className="button bg-pri text-capitalize shadow "> get started </button>

   

      </div>
     </>
    );
 }

 
export const Preview3 = (props)=>{
    return ( 
    <>
  
    
  <div className="scaled-center">
      <div className="w-100">
  <img src={require('../../assests/images/savings.jpg')} className="img-scaled" alt="" />

  <h4 className=" font-weight-bold text-nowrap text-sec my-3 text-capitalize">cost effective </h4>
   <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
   <p className="font-18 text-wrapped text-muted my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
    
  </div>

<Indicator active="preview3" history={props.history} />
  <button className="button bg-pri text-capitalize shadow "> get started </button>

   

      </div>
     </>
    );
 }
 
 
export const Preview4 = (props)=>{

    return ( 
    <>
  
    
  <div className="scaled-center">
      <div className="w-100">
  <img src={require('../../assests/images/vet-agents.jpg')} className="img-scaled"  alt="" />

  <h4 className=" font-weight-bold text-nowrap text-sec my-3 text-capitalize">vet agents </h4>
   <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
   <p className="font-18 text-wrapped text-muted my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
    
  </div>

<Indicator active="preview4" history={props.history} />
  <button className="button bg-pri text-capitalize shadow "> get started </button>

   

      </div>
     </>
    );
 }
 

 const GoTo = (props)=>{
  return(
    <>
 
 <div className="d-flex justify-content-center mt-100 mb-5"> 
  <div onClick={()=>{ props.history.push('/signed/preview1') }} className={props.active === 'preview1' ? 'activeIndicator' : 'indicator'}></div>
  <div onClick={()=>{ props.history.push('/signed/preview2') }} className={props.active === 'preview2' ? 'activeIndicator' : 'indicator'}></div>
  <div onClick={()=>{ props.history.push('/signed/preview3') }} className={props.active === 'preview3' ? 'activeIndicator' : 'indicator'}></div>
  <div onClick={()=>{ props.history.push('/signed/preview4') }} className={props.active === 'preview4' ? 'activeIndicator' : 'indicator'}></div>
 </div>

    </>
  )
}


export const UserBase = (props)=>{

return (
  <>


    
<div className="scaled-center">
      <div className="w-100">
  <img src={require('../../assests/images/diversity.jpg')} className="img-scaled mb-80"  alt="" />

  <h4 className=" font-weight-bold text-nowrap text-sec text-capitalize">large user base </h4>
   <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
   <p className="font-18 text-wrapped text-muted my-3 my-sm-0 ">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
    
  </div>

<GoTo active="preview1" history={props.history} />
  <button className="button border-sec bg-none text-capitalize text-sec shadow"> get started </button>

   

      </div>

  </>
);

}



export const EasyUse = (props)=>{

  return (
    <>
  
  
      
  <div className="scaled-center">
        <div className="w-100">
    <img src={require('../../assests/images/easy-to-use.jpg')} className="img-scaled mb-80"  alt="" />
  
    <h4 className=" font-weight-bold text-nowrap text-sec text-capitalize">easy to use </h4>
     <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
     <p className="font-18 text-wrapped text-muted my-3 my-sm-0 ">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
      
    </div>
  
  <GoTo active="preview2" history={props.history} />
    <button className="button border-sec bg-none text-capitalize text-sec shadow"> get started </button>
  
     
  
        </div>
  
    </>
  );
  
  }
    


  export const Transaction = (props)=>{

    return (
      <>
    
    
        
    <div className="scaled-center">
          <div className="w-100">
      <img src={require('../../assests/images/money_transfer_.jpg')} className="img-scaled mb-80"  alt="" />
    
      <h4 className=" font-weight-bold text-nowrap text-sec text-capitalize">Quick transactions </h4>
       <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
       <p className="font-18 text-wrapped text-muted my-3 my-sm-0 ">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
        
      </div>
    
    <GoTo active="preview3" history={props.history} />
      <button className="button border-sec bg-none text-capitalize text-sec shadow"> get started </button>
    
       
    
          </div>
    
      </>
    );
    
    }
    

    export const Regulated = (props)=>{

      return (
        <>
      
      
          
      <div className="scaled-center">
            <div className="w-100">
        <img src={require('../../assests/images/regulated.jpg')} className="img-scaled mb-80"  alt="" />
      
        <h4 className=" font-weight-bold text-nowrap text-sec text-capitalize">well regulated </h4>
         <p className="font-18 text-wrapped text-muted mb-0 my-3 my-sm-0">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
         <p className="font-18 text-wrapped text-muted my-3 my-sm-0 ">Loremipsium dolor sit amet, consecteur adispising to cmoe</p>
          
        </div>
      
      <GoTo active="preview4" history={props.history} />
        <button className="button bg-pri text-capitalize shadow"> get started </button>
      
         
      
            </div>
      
        </>
      );
      
      }

      var animated = false;

   export const PostLodge = (props)=>{

    useEffect(()=>{
      setTimeout(()=>{
        document.querySelector('#agent-btn').classList.remove('diagonal-down');
       animated = true;
      },100);
    }, []);
     return (
       <>

<div className="scaled-center">
            <div className="w-100">
        <img src={require('../../assests/images/housing-agent.png')} className="small-scale"  alt="" />
      
        <h4 className=" font-weight-bold text-nowrap text-sec text-capitalize">well regulated </h4>
         <p className="font-14 text-wrapped text-muted  my-3 my-sm-0">Are you a(an)...</p>
          
          
        </div>
      
       
        <button id="agent-btn" className="button bgn-border-sec text-capitalize  mx-3 mt-20 diagonal-down"> agent </button>
        <button className="button bg-pri text-capitalize shadow mx-3 mt-20"> landlord </button>
      
         
      
            </div>
      

       </>
     )
   }
      

const DivingIn = (props)=>{

  
  useEffect(()=>{
      if(document.querySelector('#special-find-lodge')){
        setTimeout(()=>{
          document.querySelector('#special-find-lodge').classList.add('diagonal-down');
          document.querySelector('#special-post-lodge').classList.add('translate-x');
        },100);
      }
    }, []);

    const handleFindPostEffect = ()=>{

   document.querySelector('#special-post-lodge').classList.remove('translate-x');

      props.history.push('post-lodge');
    }

const getNormal = ()=>{
 
       
    return (
      <>
     <button id="find-lodge" className="button bgn-border-sec text-capitalize  font-16 mx-3  mt-20">Find a lodge?</button>
               <button id="post-lodge" onClick={()=>{ props.history.push('post-lodge') }}  className="button bg-pri text-capitalize shadow font-16 mx-3 mb-5">Post a lodge?</button>
                </>
    );
}

const getSpecial = ()=>{
     
   return (
     <>
 <button id="special-find-lodge" className="button bgn-border-sec text-capitalize  font-16 mx-3  mt-20">Find a lodge?</button>
               <button id="special-post-lodge" onClick= {handleFindPostEffect}  className="button bg-pri text-capitalize shadow font-16 mx-3  mb-5">Post a lodge?</button>
          
     </>
   )

}
    return (
        <>
     <div className="small-scale">
  
     <img src={require('../../assests/images/dive-in.png')}   width="560" height="350"  alt="" />
              <h4 className="font-weight-bold text-sec text-nowrap">Before you dive in</h4>
               <p className="text-muted text-center font-13">Do you wish to...</p>

           
               {
                 !animated && getNormal()
    
               }
               {
                 animated && getSpecial()
               }
               </div>
                
      

        

         </>
    )
}


export default DivingIn;