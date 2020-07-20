import React from 'react';
import { Link } from 'react-router-dom';
import {

} from 'reactstrap';

import './footer.scss';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <>

<footer>
     

<div className="d-flex flex-column flex-sm-row justify-content-between align-items-start">

     <div className="footer-ul">

   <ul className="">
    
    <li className="footer-header text-capitalize font-weight-bold mb-4">Company</li>
    <li><Link to="#" className="text-muted text-capitalize">About</Link></li>
    <li><Link to="#" className="text-muted text-capitalize ">Contact us</Link></li>
    <li><Link to="#" className="text-muted text-capitalize">Careers</Link></li>
    <li><Link to="#" className="text-muted text-capitalize">Teams</Link></li>
   </ul>

   <ul className="">
    
    <li className="footer-header text-capitalize font-weight-bold mb-4">Resources</li>
    <li><Link to="#" className="text-muted text-capitalize ">See a demo</Link></li>
    <li><Link to="#" className="text-muted text-capitalize ">Guides</Link></li>
    <li><Link to="#" className="text-muted text-capitalize ">Careers</Link></li>
    <li><Link to="#" className="text-muted text-capitalize">Newsletter</Link></li>
   </ul>


  
   <ul className="">
    
    <li className="footer-header text-capitalize font-weight-bold mb-4">products</li>
    <li><Link to="#" className="text-muted text-capitalize ">For tenants</Link></li>
    <li><Link to="#" className="text-muted text-capitalize ">pricing</Link></li>
    <li><Link to="#" className="text-muted text-capitalize ">security</Link></li>
    <li><Link to="#" className="text-muted text-capitalize ">Benefits</Link></li>
   </ul>


     </div>
     

 <div className="footer-social-icons">
     <li className="footer-header font-weight-bold text-capitalize">connect with us</li>
     
     <div>
       <a href="#"> <i className="fab fa-instagram"></i> </a>
      <a href="#">  <i className="fab fa-twitter"></i> </a>
        <a href="#">  <i className="fab fa-linkedin-in"></i> </a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
        <a href="#"> <i className="fab fa-facebook-f"></i></a>
     </div>
 </div>

</div>

 <div className="footer-bottom ">
    <small className="text-muted"> &copy;copyright {new Date().getFullYear()}. All rights reserved </small>
</div>

     </footer> 
 


    </>
   )

 }

export default Footer;