import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Col,Row } from 'reactstrap';


import './faq.scss';

/**
* @author
* @function FAQ
**/

const FAQ = (props) => {
  return(
   <>

<div id="faq">
     <h5 ><span className="first-word" >FAQ</span></h5>

     <Container fluid="container-lg">
     <Row className="">

      <Col  xs="12" sm="6" className="mx-auto my-2 faq-col">

        <div className="w-100  shadow rounded  faq-wrapper">
     
      <div className="d-flex flex-column flex-lg-row">
        <div className="faq-img-cont">
          <img src={require('../../assests/images/be-the-frist-to-know.jpg')}  style={{width:'150px', height:'150px'}}  alt="" />
        </div>

        <div className="faq-text text-tertiary">
          <h5>How to upgrade my account, i also need to know why i cant change my cookie settings i need fast answer dude</h5>
        </div>
      </div>

      <Link to="#" className="faq-arrow"><i className="fas fa-arrow-right text-pri"></i></Link>

          </div>
       
      </Col>
      
      <Col xs="12" sm="6" className="mx-auto my-2 faq-col">

      <div className="w-100  shadow rounded  faq-wrapper">
     
     <div className="d-flex flex-column flex-lg-row">
       <div className="faq-img-cont">
         <img src={require('../../assests/images/getting-started-payment.svg')}  style={{width:'150px', height:'150px'}}  alt="" />
       </div>

       <div className="faq-text text-tertiary">
         <h5>How to upgrade my account, i also need to know why i cant change my cookie settings i need fast answer dude</h5>
       </div>
     </div>

     <Link to="#" className="faq-arrow"><i className="fas fa-arrow-right text-pri"></i></Link>

         </div>
      
      </Col>

       </Row>
       </Container>

   </div>


   </>
   )

 }

export default FAQ;