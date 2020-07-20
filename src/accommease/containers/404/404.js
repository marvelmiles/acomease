import React, { useEffect } from 'react';
import { Nav,NavItem,Row,Col,Container,Card,CardBody,CardText,ButtonGroup,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useExtractCookies, GoBack } from '../../components/functionalComponent';
import './404.scss';

/**
* @author
* @function _404
**/

const _404 = (props) => {
return (
     <>
 
 
 <div className="p-center">
<GoBack history={props.history} />
<p style={{width:'100%',maxWidth:'500px'}}>
   This Ui is experimental and currently in development mode of the ground application phase.
   Contact @marvellous for support and contributions. Happy coding ... |-| /\ | /\/\
</p>

  </div>
  
    </>
   )

 }

export default _404;


// let LoggedIn = false;

//  const pathname = "/";
 
 
//  const items = [
//   { src:'hostel3.jpg' },
//   {src:'hostel4.jpg'},
//   {src:'hostel6.jpg'},
//   {src:'hostel2.jpg'}
// ];

//   return(
//     <>
     
//      <Col xs="12" sm="6" md="5" className="mx-auto">

       
// <div className="card-flex shadow">
// <img src={require('../../assests/images/hostel1.jpg')} alt="image" />

// <div className="card-flex-body">
// <h5> Apatakiti </h5> 
// <h6 className="text-muted">Self contained</h6>

// <ul className="list-unstyled">
//     <li> <i className="fa fa-bed text-sec"></i> <span> 2bed</span> </li>
//     <li> <i className="fa fa-bath text-sec"></i> <span> 1bath</span> </li>
//     <li> <i className="fa fa-warehouse text-sec"></i> <span> 2bed</span> </li>
// </ul>
// </div>
// </div>


//     </Col>



//     <Col xs="12" sm="6" md="5" className="mx-auto" style={{cursor:'pointer'}} onClick={()=> history.push(`/lodge/${lodge.location}/${lodge.id}`)}>


// <div className="card-flex shadow">
// <img src={require(`../../assests/images/${lodge.coverImage}`)} alt="image" />

// <div className="card-flex-body">
// <h5> {lodge.area} </h5> 
// <h6 className="text-muted">{ lodge.lodgeType }</h6>
// {  getSubAmenities(lodge.amenities) }
// </div>
// </div>


// </Col>




//       <div className="l-wrapper">
//         <div className="l-container">
//         <div className="l-img-container">
//           <img src={require('../../assests/images/hostel4.jpg')} alt="" />
//         </div>
//         <Button>check</Button>
//         </div>
        
//         <div className="l-body">
//           <div className="l-body-img-cont">
//             <img src={require('../../assests/images/t4.jpg')} alt=""/>
//           </div>
//       <div className="l-text">
//       <h5>$1,2000000/month</h5>
//       <div className="l-name-space"><h6>5 space</h6><h6 className="text-muted">Akinrinmola marvellous</h6></div>
//       </div>
//       <ButtonGroup className="l-btn-group" color="white">
//    <Button><i className="fa fa-bed"></i> 2</Button>
//    <Button><i className="fa fa-bath"></i> 2</Button>
//    <Button><i className="fa fa-car"></i> 2</Button>
//         </ButtonGroup>

//         </div>

//       </div> 



 
// // <div className="card__wrapper">

// // <div className="card__img-overlay">

// // <div className="card__description text-sec text-truncated ">
// // <p>
// //  <span> { lodge.location }  - { lodge.lodgeType } </span>
// //  { lodge.subDescription }
// //  { getSubAmenities(lodge.amenities) }

// // </p>
// // </div>

// // <img src={require(`../../assests/images/${lodge.coverImage}`)} alt="card-img" />
// // </div>

// // <div className="card__panel d-flex justify-content-between w-100">

// // <div className="">
// // <h6 className="text-sec"> {lodge.lodgeType} </h6>
// // <span className="text-pri"> &#8358;{lodge.price}/{lodge.planType} </span>
// // </div>

// // <div className="d-flex justify-content-between ">
// // <span className="text-sec mx-2">Read More</span>
// //   <div className="angle-btn"  onClick={()=>{ props.history.push(`/lodge/${lodge.location}/${lodge.id}`) }}><i className="fas fa-angle-right font-16 text-pri"></i></div>  
// // </div>

// // </div>

// // </div> 
