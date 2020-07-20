import React, { useState } from 'react';
import { Link } from'react-router-dom';
import {

    Carousel, CarouselItem,CarouselControl,
    CarouselIndicators,Row,Col,Container

} from 'reactstrap';
import './sliders.scss';

/**
* @author
* @function Testimonials
**/

export const AgentsSlides = () =>{


  
  const agentsTalk = [

    {
      name:'Akinrinmola Marvellous',
      alt:'Marvellous-image',
      src:'t1.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },
    
    {
      name:'Bankole Temitope',
      alt:'Temitope-image',
      src:'t2.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Akinyemi Oladeji',
      alt:'deji-image',
      src:'t3.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Olabisi ayomide',
      alt:'bisi-image',
      src:'t4.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Adenikinju nelson',
      alt:'nelson-image',
      src:'t5.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Japheth Korede',
      alt:'Japheth-image',
      src:'t6.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Akinrinmola Marvellous',
      alt:'Marvellous-image',
      src:'t1.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },
    
    {
      name:'Bankole Temitope',
      alt:'Temitope-image',
      src:'t2.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Akinyemi Oladeji',
      alt:'deji-image',
      src:'t3.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Olabisi ayomide',
      alt:'bisi-image',
      src:'t4.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Adenikinju nelson',
      alt:'nelson-image',
      src:'t5.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    },

    
    {
      name:'Japheth Korede',
      alt:'Japheth-image',
      src:'t6.jpg',
      statement:' Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.'
    }

  ];


  const getAgentSlides = ()=>{

    return agentsTalk.map((item,i)=>{

   return <div key={i} className="card__wrapper">
   <div className="img-wrapper"> 
   <img src={require(`../../assests/images/${item.src}`)} style={{width:'100%',height:'100%',borderRadius:'inherit'}} alt={item.alt} />
   </div>

   <div className="shadow w-100 p-3">
       <p>{item.statement}</p>

       <h6 className="text-center text-capitalize">{item.name}</h6>
   </div>

     </div>

    })

  }

  return(

    <>
   
   <div className="d-flex card-row">

        { getAgentSlides() }

   </div>

    </>
  );

}


export const CrossFade = (props)=>{
  
  


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = ()=> {
      if(animating) return;
      const nextIndex = activeIndex === props.images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
  } 

  const prev = ()=>{
      if(animating) return;
      const prevIndex = activeIndex === 0 ? props.images.length - 1 : activeIndex - 1;
     setActiveIndex(prevIndex);
  }
const goToIndex = (newIndex)=>{
  if(animating) return;
  setActiveIndex(newIndex);
} 

const slides = props.images.map((item,i)=>{
  return (

  
  <CarouselItem 
  className="banner-fade-gallery" 
  onExiting={()=> setAnimating(true)}
  onExited={()=> setAnimating(false)}
  key={item.src}
  >

   <img src={require(`../../assests/images/${item.src}`)} className="banner-fade-img" alt="" />
   

  </CarouselItem>


  );
});

return (
  
  <Carousel   

  ride="carousel"
  interval="3000"
  className="banner-fade-wrapper carousel-fade"
  activeIndex={activeIndex}
  next={next}
  previous={prev}
>
  
  {slides}
  
</Carousel>


);


}


export const LodgeSlides = (props)=>{

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = ()=> {
      if(animating) return;
      const nextIndex = activeIndex === props.lodges.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
  } 

  const prev = ()=>{
      if(animating) return;
      const prevIndex = activeIndex === 0 ? props.lodges.length - 1 : activeIndex - 1;
     setActiveIndex(prevIndex);
  }
const goToIndex = (newIndex)=>{
  if(animating) return;
  setActiveIndex(newIndex);
} 

const slides = props.lodges.map(item=>{
  return (

  
  <CarouselItem 
  className="rounded lodge-carousel-item" 
  onExiting={()=> setAnimating(true)}
  onExited={()=> setAnimating(false)}
  key={item.src}
  >

   <img src={require(`../../assests/images/${item.src}`)} className="rounded lodge-slide-img" alt="" />

  </CarouselItem>
  );
});

return (
  
  <Carousel   

  ride="carousel"
  interval="3000"
  className="rounded lodge-carousel"
  activeIndex={activeIndex}
  next={next}
  previous={prev}
>
  <CarouselIndicators className="lodge-carousel-indicator" items={props.lodges}  activeIndex={activeIndex} onClickHandler={goToIndex} />
  {slides}
  <CarouselControl className="lodge-carousel-control" direction="prev" directionText="Previous" onClickHandler={prev} />
  <CarouselControl className="lodge-carousel-control" direction="next"  directionText="Next" onClickHandler={next} />
</Carousel>


);


}

export const FlexReview = (props)=>{



return (
  <>

  
 <div className="flex-review"> 
<div className="flex-review-text">
    Taking away your hustle to get a nice place withh a nice pay rent...Your ease give us the desire to one do
    more.
  </div>

<div className="d-flex flex-review-t flex-wrap align-items-start">


<div  className="card__wrapper align-self-end mr-auto">
   <div className="img-wrapper"> 
   <img src={require('../../assests/images/t4.jpg')} style={{width:'100%',height:'100%',borderRadius:'inherit'}} alt="t4Image" />
   </div>

   <div className="shadow w-100 p-3">
       <p> 
         Relocating to this location is a nice thing for me more it helps me go to class early...
         i dont have to miss a class and most landlord are cool here.... This place is peaceful and cool to stay.
       </p>

       <h6 className="text-center text-capitalize">Wasiu yakubu</h6>
   </div>

     </div>


     <div  className="card__wrapper align-self-center">
   <div className="img-wrapper"> 
   <img src={require('../../assests/images/t4.jpg')} style={{width:'100%',height:'100%',borderRadius:'inherit'}} alt="t4Image" />
   </div>

   <div className="shadow w-100 p-3">
       <p> 
         Relocating to this location is a nice thing for me more it helps me go to class early...
         i dont have to miss a class and most landlord are cool here.... This place is peaceful and cool to stay.
       </p>

       <h6 className="text-center text-capitalize">Wasiu yakubu</h6>
   </div>

     </div>


     <div  className="card__wrapper align-self-start">
   <div className="img-wrapper"> 
   <img src={require('../../assests/images/t4.jpg')} style={{width:'100%',height:'100%',borderRadius:'inherit'}} alt="t4Image" />
   </div>

   <div className="shadow w-100 p-3">
       <p> 
         Relocating to this location is a nice thing for me more it helps me go to class early...
         i dont have to miss a class and most landlord are cool here.... This place is peaceful and cool to stay.
       </p>

       <h6 className="text-center text-capitalize">Wasiu yakubu</h6>
   </div>

     </div>


<div>


</div>

  </div>{ /* EOF */ }
  </div>
 
  </>
)

}


const Testimonials = (props) => {
 
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = ()=> {
        if(animating) return;
        const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    } 
 
    const prev = ()=>{
        if(animating) return;
        const prevIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
       setActiveIndex(prevIndex);
    }
const goToIndex = (newIndex)=>{
    if(animating) return;
    setActiveIndex(newIndex);
} 

const slides = props.items.map((item,i)=>{
    return (

    
    <CarouselItem   
    onExiting={()=> setAnimating(true)}
    onExited={()=> setAnimating(false)}
    key={item.src}
    >
    
       <Container className="w-100 m-0 " fluid={true} >
         <Row className="no-gutters m-0 w-100 p-5 cus-slide">
       <Col md="4" className="my-auto">
          
         <div className="w-100 text-center mx-auto mb-3">
         <img src={require(`../../assests/images/${item.src}`)} className="" alt={item.altText} style={{width:'150px',height:'150px',borderRadius:'50%'}} />
           </div>
        
       </Col>
       <Col md="8" className="my-auto">
         <div className="w-100 mx-auto text-center testimonial-text"><i className="fas fa-quote-left fa-2x  mx-2"></i>{item.text}</div>
        <p className="text-center font-weight-bold my-3">{item.user}</p>
       </Col>

           </Row>
         </Container>      

    </CarouselItem>
    );
});

return (
    
    <Carousel  
  
    ride="carousel"
    interval="3000"
    className="testimonials"
    activeIndex={activeIndex}
    next={next}
    previous={prev}
  >
    <CarouselIndicators className="testimonials-indicator" items={props.items}  activeIndex={activeIndex} onClickHandler={goToIndex} />
    {slides}
    <CarouselControl className="testimonial-control-prev" direction="prev" directionText="Previous" onClickHandler={prev} />
    <CarouselControl className="testimonial-control-next" direction="next"  directionText="Next" onClickHandler={next} />
  </Carousel>

  
);

 }


export default Testimonials;