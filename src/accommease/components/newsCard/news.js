import React from 'react';
import { Nav,NavItem,Row,Col,Container,Card,CardBody,CardText,ButtonGroup,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './news.scss';

/**
* @author
* @function NEWScard
**/

const NEWScard = (props)=>{

  const agent = {name:'maxwell jason',space:'4 space'};

  const getCards = ()=>{
       return props.cards.map((lodge,i)=>{
         return (
           <>
          
<Col key={i} xs="12" sm="6" lg="4" xl="3" className="mx-auto">
  
  
  <div className="l-wrapper mx-auto">
          <div className="l-container">
          <div className="l-img-container">
            <img src={require(`../../assests/images/${lodge.coverImage}`)} alt="" />
          </div>
          <Button><Link className="text-decoration-none text-white text-capitalize" to={`/lodge/${lodge.location}/${lodge.id}`}> check</Link></Button>
          </div>
          
          <div className="l-body">
            <div className="l-body-img-cont">
              <img src={require('../../assests/images/t4.jpg')} alt=""/>
            </div>
        <div className="l-text">
        <h5>&#8358;{lodge.price}/{lodge.planType}</h5>
        <div className="l-name-space"><h6>{agent.space}</h6><h6 className="text-muted">{agent.name}</h6></div>
        </div>
        <ButtonGroup className="l-btn-group" color="white">
     <Button><i className="fa fa-bed"></i> 2</Button>
     <Button><i className="fa fa-bath"></i> 2</Button>
     <Button><i className="fa fa-car"></i> 2</Button>
          </ButtonGroup>
  
          </div>
  
        </div> 
   
  </Col>
           </>
         )
       })
  }

  return (
    <>
  <Container fluid={true} >
 
 <Row className="no-gutters">
 
   { getCards() }

   </Row>

    </Container>
    </>
  )
}


export const ListingCard = (props) => {
     
        
      const getSubAmenities = (amenities)=>{
        
        const a1 = "3 bath";
        const a2 = "2 room";
        const a3 = '2  car';
    
    return <p> {  a1 + ' | ' + a2 + " | " + a3 } </p> ;
    
      }
    
      const getSubImages = (images)=>{
       const img1 = images[0];
       const img2 = images[1];
        return (
            <>
        <div className="gallery-img-container d-flex flex-row justify-content-center">
    <img src={require(`../../assests/images/${img1}`)} alt="" />
    <img src={require(`../../assests/images/${img2}`)} alt="" />
  </div>
  
            </>
        )

      }
       

    const getListingCards = ()=>{

        return props.cards.map((card,i)=>{

            return (
                <>
            
            
<Col xs="12" sm="6"  lg="4" xl="3" key={i}  className="mx-auto">
  
  <div className="c"> 
  <div className="cy"> 
          <img width="100%" top src={require(`../../assests/images/${card.coverImage}`)} alt="Card image cap" />
           
          <div className="card__img-overlay">

<div className="card__description text-sec text-truncated ">
 <p>
 <span> { card.location }  - { card.lodgeType } </span>
 { card.subDescription }
 { getSubAmenities(card.amenities) }

</p>
</div>

    </div>     
    </div>  
          <div className="card__body shadow">
             <div className="d-flex justify-content-between align-items-start">
               <h6 className="first-word">&#8358;{ card.price }/{ card.planType }</h6>
            <h6 className="align-self-center">{card.lodgeType}</h6>
             </div>
  
   {/* <CardText className="text-center font-weight-bold"> { card.lodgeType } </CardText> */}
   <ButtonGroup className="l-btn-group" color="white">
     <Button><i className="fa fa-bed"></i> 2</Button>
     <Button><i className="fa fa-bath"></i> 2</Button>
     <Button><i className="fa fa-car"></i> 2</Button>
          </ButtonGroup>
  
   
   <div className="d-flex flex-column">
     
     { getSubImages(card.images) }
   
  <div className="gallery-btn-container align-self-center">
  
  <button className="btn bg-sec mt-2"> <Link className="text-decoration-none text-capitalize text-white" to={`/lodge/${card.location}/${card.id}`}> check </Link></button>
  
  </div>
  
   </div>
  
          </div>
        </div>
  
  </Col>
  
  

                </>
            )
        })

    }

  return(
  <>

 
<Container fluid={true} className={props.className} style={props.style}>

<Row>
<Col xs="12">
   <h5 className="text-capitalize my-5 mx-md-5">{ props.title }</h5>
   </Col>
  { getListingCards() }

</Row>

</Container>

    

  </>
   )

 }

export default NEWScard;