import React from 'react'
import PropTypes from 'prop-types';
//import styled from 'styled-components';
 import {
Container,Col,Row
 } from 'reactstrap';
import './benefits.scss';
import { AgentsSlides } from '../../components/sliders/sliders';
import FAQ from '../../components/Faq/faq';
import Footer from '../../components/Footer/footer';
import { ScrolltoTop } from '../../components/functionalComponent';

const Benefits = props => {
   
  
  
  return(
    
    <>

  <section>
      
      <div className="banner">
          <div>
          <p className="">
              Lorem ipsium of de lore tevez isium of color it ese res deux vex deu pavrol le tocuhe dere chome isi tom tore
              teux is tome comet trey res isium ipsium tore two cinq quartz jombe joure tome yourme to vez is res to me res itrey
              
           </p>
             <button onClick={()=>props.history.push('/sign-up')} className="btn btn-lg bg-pri">Get started</button>
             </div>
      </div>

    <div className="container-lg">

  <Row className="benefit-card-row">
         <Col xs="12" md="8" lg="4" className="mx-auto benefit-card-col my-5">
          <div className="benefit-card">
          <img src={require('../../assests/images/free-up-time.svg')}  alt="free-up-time" />
          </div>

               
   <div className="w-100 benefit-card-body ">

<h5 className="my-3">It frees you up for the good stuff</h5>
<p className="text-decoration">
Stop worrying about rent payments. Accomease helps you get your rentals up and running and keeps you updated along the way
</p>

</div>
         </Col>

         <Col xs="12" md="8" lg="4" className="mx-auto benefit-card-col my-5">
          <div className="benefit-card">
          <img src={require('../../assests/images/peace-of-mind.svg')}  alt="free-up-time" />
          </div>

               
   <div className="w-100 benefit-card-body">

<h5 className="my-3">It connects you to your tenants</h5>
<p>
    
Accomease helps you and your tenants to stay on the same page. Receive payments, communicate about maintenance issues, share documents, and more.

</p>

</div>
         </Col>

         <Col xs="12" md="8" lg="4" className="mx-auto benefit-card-col my-5">
          <div className="benefit-card">
          <img src={require('../../assests/images/better-landlord.svg')}  alt="free-up-time" />
          </div>

               
   <div className="w-100 benefit-card-body">

<h5 className="my-3" > It connects you to your tenants</h5>
<p>

Learn how to be the best landlord you can be with our resources and daily feedbacks.

</p>

</div>
         </Col>


  </Row>

    </div>


  </section>
 
 <section>

<Container>

<Row>

<Col xs="12" md="8"  className="mx-auto">

 <div className="benefit-card">
          <img src={require('../../assests/images/better-landlord.svg')}  alt="free-up-time" />
          </div>

            
   <div className="w-100 banner-tab-body  mt-5">

<h5>publice your listings</h5>
<p>
  You dont have to wait anymore! invite renters to apply with your permalink. Each accomease listing has a standard rental application.
</p>

</div>

</Col>
 
</Row>

<Row className="align-items-sm-start align-items-md-stretch">


<Col xs="12" sm="6"> 
       
       <div className="showcase-img mx-auto">
              <img src={require('../../assests/images/Listings@2x.png')}  alt="gallery" />
              </div>
    
           </Col> 
        
      <Col xs="12" sm="6" >
     
    <div className="mx-auto showcase-content">
      
    <h5 className="text-muted ">Listings</h5>
    <h4>Advertise your listings</h4>
    <p>
    Customized listings help your property stand out, with your gallery of photos, icons of home amenities and things around.
    </p>
    
    </div>
    
      </Col>
    

</Row>

</Container>


<Container className="mt-5">

<Row >

<Col xs="12" md="8"  className="mx-auto">

 <div className="benefit-card">
          <img src={require('../../assests/images/better-landlord.svg')}  alt="free-up-time" />
          </div>

            
   <div className="w-100 banner-tab-body  mt-5">

<h5>we help collect rent</h5>
<p>
  A more better service we render is to help you remove stress and hustle in collecting rent from tenants. 
</p>

</div>

</Col>
 
</Row>

<Row className="align-items-sm-start align-items-md-stretch">


<Col xs="12" sm="6"> 
       
       <div className="showcase-img mx-auto">
              <img src={require('../../assests/images/Listings@2x.png')}  alt="gallery" />
              </div>
    
           </Col> 
        
      <Col xs="12" sm="6" >
     
    <div className="mx-auto showcase-content">
      
    <h5 className="text-muted ">Payment procedural</h5>
    <h4>Recieve payment directly to your bank account</h4>
    <p>
     
    Lorem ipsium of de lore tevez isium of color it ese res deux vex deu pavrol le tocuhe dere chome isi tom tore
              teux is tome comet trey res isium ipsium tore two cinq quartz jombe joure tome yourme to vez is res to me res itrey
 
    </p>
    
    </div>
    
      </Col>
    


</Row>


<Row className="align-items-sm-start align-items-md-stretch">


<Col xs="12" sm="6"> 
       
       <div className="showcase-img mx-auto">
              <img src={require('../../assests/images/Listings@2x.png')}  alt="gallery" />
              </div>
    
           </Col> 
        
      <Col xs="12" sm="6" >
     
    <div className="mx-auto showcase-content">
      
    <h5 className="text-muted ">Accurate records</h5>
    <h4>Recieve payment directly to your bank account</h4>
    <p>
     
    Lorem ipsium of de lore tevez isium of color it ese res deux vex deu pavrol le tocuhe dere chome isi tom tore
              teux is tome comet trey res isium ipsium tore two cinq quartz jombe joure tome yourme to vez is res to me res itrey
               
    </p>
    
    </div>
    
      </Col>
    
    

</Row>


</Container>


<Container className="mt-5">

<Row >

<Col xs="12" md="8"  className="mx-auto">

 <div className="benefit-card">
          <img src={require('../../assests/images/better-landlord.svg')}  alt="free-up-time" />
          </div>

            
   <div className="w-100 banner-tab-body  mt-5">

<h5>Provide you with the best tenants</h5>
<p>
Our rental application as been built to help you get the valuable information you need to select the right tenants
</p>

</div>

</Col>
 
</Row>

<Row className="align-items-sm-start align-items-md-stretch">


<Col xs="12" sm="6"> 
       
       <div className="showcase-img mx-auto">
              <img src={require('../../assests/images/Listings@2x.png')}  alt="gallery" />
              </div>
    
           </Col> 
        
      <Col xs="12" sm="6" >
     
    <div className="mx-auto showcase-content">
      
    <h5 className="text-muted ">Screening</h5>
    <h4>Evaluate renter bio data</h4>
    <p>
     
     Bio data include the essential information you need such as: rental histories,payment capability,  academic level.
     
    </p>
    
    </div>
    
      </Col>
    


</Row>

 
</Container>


<Container className="mt-5">

<Row >

<Col xs="12" md="8"  className="mx-auto">

 <div className="benefit-card">
          <img src={require('../../assests/images/better-landlord.svg')}  alt="free-up-time" />
          </div>

            
   <div className="w-100 banner-tab-body  mt-5">

<h5>Reports & coverage</h5>
<p>
we dont stop by connecting you with a renter we also go more by giving you documented reports and activites by your tenants once an agreement as
been established between the tenant and landlord 
</p>

</div>

</Col>
 
</Row>

<Row className="align-items-sm-start align-items-md-stretch">


<Col xs="12" sm="6"> 
       
       <div className="showcase-img mx-auto">
              <img src={require('../../assests/images/Listings@2x.png')}  alt="gallery" />
              </div>
    
           </Col> 
        
      <Col xs="12" sm="6" >
     
    <div className="mx-auto showcase-content">
      
    <h5 className="text-muted ">Report interval</h5>
    <h4> Data storage </h4>
    <p>
     
    Images of reciept and bills payed can be uploaded to us and requested upon at intervals set by you. Over 20 uploads space is availiable to you and your tenants, to save more
      terms and condition are applied.
     
    </p>
    
    </div>
    
      </Col>
    


</Row>

 
</Container>


 </section>

 <section className="mt-100">

<AgentsSlides />
<FAQ />
<Footer />

   <ScrolltoTop />

 </section>
 
 </>
  );
}

Benefits.propTypes = {

}

export default Benefits;
