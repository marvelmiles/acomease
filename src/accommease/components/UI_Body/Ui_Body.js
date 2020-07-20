import React,{ useEffect,useContext } from 'react';
import { Link,useHistory,Redirect } from 'react-router-dom';
import { CrossFade,FlexReview } from '../../components/sliders/sliders';
import { Form,Input,FormGroup,FormFeedback,Col,Row,Container,
Card,CardImg,CardBody,CardFooter,CardText
} from 'reactstrap';

import './Ui_Body.scss';
import ProfileImg, { debounce,ContextObj } from '../../components/functionalComponent';
import NEWScard, { ListingCard } from '../newsCard/news';
import Footer from '../Footer/footer';
/**
* @author
* @function Ui_Body
**/

const Ui_Body = (props) => {

    const history = useHistory();
 

    useEffect(()=>{
    let nav = document.querySelector('#nav-header');
    const scrolled = ()=>{
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
            nav.classList.add('nav-t0');
        }else{
            nav.classList.remove('nav-t0');
        }
        //console.log('debounced');
    }
       window.addEventListener('scroll',debounce(scrolled,null,false));
    },[]);

    const appContext = useContext(ContextObj);
    const { searchRef } = appContext;
    const LoggedIn = localStorage.getItem('LoggedIn__accomease');

    const imgs = [
        { src:'hostel1.jpg' },
        { src:'hostel2.jpg' },
        { src:'hostel3.jpg' },
        { src:'hostel4.jpg' },
        { src:'hostel5.jpg' },
        { src:'hostel6.jpg' },
    ]
   
    const handleSubmit = (e)=>{

        e.preventDefault();
       let input = document.querySelector('#location-search');
       input.value = "";
       input.focus()

    }

//     const getSubAmenities = (amenities)=>{
// const a1 = amenities[0];
// const a2 = amenities[1];
// const a3 = amenities[2];

//         return (
//             <>
     
     
// <ul className="list-unstyled">
//     <li> <i className="fa fa-bed text-sec"></i> <span>2bed</span> </li>
//     <li> <i className="fa fa-bath text-sec"></i> <span>2bath</span> </li>
//     <li> <i className="fa fa-warehouse text-sec"></i> <span> 1 park</span> </li>
// </ul>

//             </>
//         )
//     }

//     const getNewListings = ()=>{

//    return props.lodges.map((lodge,i)=>{
//        return (
//            <>
     

//            </>
//        )
//    })

//    } 


// if(LoggedIn === null ||  LoggedIn === 'false' || LoggedIn === 'null' ){
//     return <Redirect to="/login" />
//   } 

 
   return(
 <>
   <section>  
       <div className="banner-gallery-cont">
       <CrossFade images={imgs} /> 
      
      
   <div className=" banner-gallery-content" >
          <div>
              <p className="">We showcase to you lodges and listings as they are. Aiding you to find a place of your comfort</p>
              <button className=""> <Link to="/sign-up" className="text-decoration-none text-capitalize"> Get started </Link> </button>
              </div>

     <Form className="banner-gallery-form" onSubmit={handleSubmit} >

     <FormGroup className="banner-gallery-formGroup">
         <Input id="location-search" ref={searchRef}  className="form-control-lg text-pri" placeholder="Find a lodge" />
         <FormFeedback invalid></FormFeedback>
     </FormGroup>
    
    <button> <i className="fa fa-search "></i> </button>
     </Form>

      </div>

       
  </div>
        {/* <Container fluid="container-lg" className="card-flex-container" >

           <Row className="no-gutters">
              
               <Col xs="12" sm="6" md="5" className="mx-auto">

       
               <div className="card-flex shadow">
            <img src={require('../../assests/images/hostel1.jpg')} alt="image" />

            <div className="card-flex-body">
               <h5> Apatakiti </h5> 
               <h6 className="text-muted">Self contained</h6>

               <ul className="list-unstyled">
                   <li> <i className="fa fa-bed text-sec"></i> <span> 2bed</span> </li>
                   <li> <i className="fa fa-bath text-sec"></i> <span> 1bath</span> </li>
                   <li> <i className="fa fa-warehouse text-sec"></i> <span> 2bed</span> </li>
               </ul>
            </div>
        </div>
      

                   </Col>

                 <Col xs="12" sm="6" md="5" className="mx-auto">

    
               <div className="card-flex shadow">
            <img src={require('../../assests/images/hostel2.jpg')} alt="image" />

            <div className="card-flex-body">
               <h5 className=""> Apatakiti </h5> 
               <h6 className="text-muted">Self contained</h6>

               <ul className="list-unstyled">
                   <li> <i className="fa fa-bed text-sec"></i> <span> 2bed</span> </li>
                   <li> <i className="fa fa-bath text-sec"></i> <span> 1bath</span> </li>
                   <li> <i className="fa fa-warehouse text-sec"></i> <span> 2bed</span> </li>
               </ul>
            </div>
        </div>
      

                   </Col>

                   <Col xs="12" sm="6" md="4" className="mx-auto d-md-none d-xl-block">

    
<div className="card-flex shadow">
<img src={require('../../assests/images/hostel3.jpg')} alt="image" />

<div className="card-flex-body">
<h5 className=""> Apatakiti </h5> 
<h6 className="text-muted">Self contained</h6>

<ul className="list-unstyled">
    <li> <i className="fa fa-bed text-sec"></i> <span> 2bed</span> </li>
    <li> <i className="fa fa-bath text-sec"></i> <span> 1bath</span> </li>
    <li> <i className="fa fa-warehouse text-sec"></i> <span> 2bed</span> </li>
</ul>
</div>
</div>


    </Col>


           </Row>
                 
            </Container>     */}

      </section>    { /*  End of banner gallery */ }


   <section>
         
 <div className="card-overflow">
 <NEWScard cards={props.lodges}   />
 </div>
 
 <FlexReview />
{/*  
 <div className="new-listing card-overflow"> 
  
 <Container fluid="container-lg" className="" >


<Row className="no-gutters">
   <Col xs="12">
   <h5 className="text-capitalize my-4 mx-md-5">New Listings</h5>
   </Col>

    { getNewListings() }

</Row>
      
 </Container>    

 </div> */}
 <div className="card-overflow" style={{overflowX:'hidden'}}> 

 <ListingCard cards={props.lodges} title="new listings" className="" />
 </div>
       </section>
  
  <section className="pa"> 
       <Footer />
       </section>
      <ProfileImg src={require('../../assests/images/t1.jpg')} />
 </>
   )

 }

export default Ui_Body;