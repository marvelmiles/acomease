import React,{ useState, useEffect,useContext } from 'react';
import {
  Modal,ModalBody,ModalFooter,Form,Container,Row,Col,FormGroup, FormFeedback,Input,Button
} from'reactstrap';
import { Redirect } from 'react-router-dom'; 
import Testimonials, { LodgeSlides } from '../sliders/sliders';
import './apartment.scss';
import FAQ from '../Faq/faq';
import Footer from '../Footer/footer';
import ProfileImg, { ContextObj,debounce } from '../functionalComponent';
import Loader from '../Loader/Loader';
import { ListingCard } from '../newsCard/news';

/**
* @author marvel miles
* @function Apartment
**/

const Apartment = (props) => {

  
  const initialLodges = [

  
    {
      id:1,   
     location:'south',
     addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
     area:'Apatakiti',
     lodgeType:'self contained',
     subDescription:'Our Self contained Apartment is second to none of south 1, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
     amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
     neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
     distance_toFuta: '3km from lodge a total of 10 mins walking distance',
     vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
     images:['apartment.jpg','dom.jpg','school-dom.jpg'],
     coverImage:'school-dom.jpg',
     price:'50,000',
     planType:'annual'
     },
     
     
    
     {
       id:2,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'ori-oke',
      lodgeType:'Flat',
      subDescription:'Our Self contained Apartment is second to none of south 2, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','dom.jpg','school-dom.jpg'],
      coverImage:'school-dom.jpg',
      price:'50,000',
      planType:'annual'
      },
       
     
      {
       id:3,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'single room',
      subDescription:'Our Self contained Apartment is second to none of south 3, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel2.jpg','hostel3.jpg','hostel4.jpg'],
      coverImage:'hostel1.jpg',
      price:'50,000',
      planType:'annual'
      },
      
     
      {
       id:4,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'cac road',
      lodgeType:'single room',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel1.jpg','apartment.jpg','school-dom.jpg'],
      coverImage:'hostel5.jpg',
      price:'2000',
      planType:'month'
      },
      
      {
       id:5,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Abule oja',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','hostel5.jpg','hoste1.jpg'],
      coverImage:'school-dom.jpg',
      price:'50,000',
      planType:'annual'
      },
      
     
      {
       id:6,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Idowu close',
      lodgeType:'single room',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','dom.jpg','hostel6.jpg'],
      coverImage:'school-dom.jpg',
      price:'20,000',
      planType:'annual'
      },
      
     
     
      {
       id:7,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','hostel6.jpg','hostel3.jpg'],
      coverImage:'hostel4.jpg',
      price:'80,000',
      planType:'annual'
      },
      
     
     
     
      {
       id:8,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Idow closet',
      lodgeType:'single room',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','dom.jpg','school-dom.jpg'],
      coverImage:'school-dom.jpg',
      price:'5000',
      planType:'month'
      },
      
     
     
      {
       id:9,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'futa road',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel3.jpg','hostel6.jpg','school-dom.jpg'],
      coverImage:'hostel1.jpg',
      price:'100,000',
      planType:'annual',
      },
      
     
      {
       id:10,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'flat',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel4.jpg','hostel3.jpg','hostel5.jpg'],
      coverImage:'hostel2.jpg',
      price:'150,000',
      planType:'annual'
      },
      
     
     
      {
       id:11,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Badmus close',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','dom.jpg','school-dom.jpg'],
      coverImage:'hostel1.jpg',
      price:'250,000',
      planType:'annual'
      },
      
     
     
     
      {
       id:12,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Idowu close',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','hostel6.jpg','hostel3.jpg'],
      coverImage:'hostel1.jpg',
      price:'250,000',
      planType:'annual'
      },

      
      {
       id:13,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'flat',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel1.jpg','hostel2.jpg','hostel3.jpg'],
      coverImage:'hostel4.jpg',
      price:'150,000',
      planType:'annual'
      },
      
      
      {
       id:14,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Badmus close',
      lodgeType:'single room',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel3.jpg','hostel6.jpg','school-dom.jpg'],
      coverImage:'hostel2.jpg',
      price:'20,000',
      planType:'annual'
      },
      
      
      {
       id:15,   
      location:'south',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['hostel5.jpg','apartment.jpg','hostel6.jpg'],
      coverImage:'school-dom.jpg',
      price:'50,000',
      planType:'annual'
      },
      
       {
       id:1,   
      location:'west',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','dom.jpg','school-dom.jpg'],
      coverImage:'school-dom.jpg',
      price:'50,000',
      planType:'annual'
      },
      
      
     
      {
        id:2,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'ori-oke',
       lodgeType:'Flat',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','school-dom.jpg'],
       coverImage:'school-dom.jpg',
       price:'50,000',
       planType:'annual'
       },
        
      
       {
        id:3,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel2.jpg','hostel3.jpg','hostel4.jpg'],
       coverImage:'hostel1.jpg',
       price:'50,000',
       planType:'annual'
       },
       
      
       {
        id:4,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'cac road',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel1.jpg','apartment.jpg','school-dom.jpg'],
       coverImage:'hostel5.jpg',
       price:'2000',
       planType:'month'
       },
       
       {
        id:5,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Abule oja',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','hostel5.jpg','hoste1.jpg'],
       coverImage:'school-dom.jpg',
       price:'50,000',
       planType:'annual'
       },
       
      
       {
        id:6,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Idowu close',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','hostel6.jpg'],
       coverImage:'school-dom.jpg',
       price:'20,000',
       planType:'annual'
       },
       
      
      
       {
        id:7,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','hostel6.jpg','hostel3.jpg'],
       coverImage:'hostel4.jpg',
       price:'80,000',
       planType:'annual'
       },
       
      
      
      
       {
        id:8,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Idow closet',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','school-dom.jpg'],
       coverImage:'school-dom.jpg',
       price:'5000',
       planType:'month'
       },
       
      
      
       {
        id:9,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'futa road',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel3.jpg','hostel6.jpg','school-dom.jpg'],
       coverImage:'hostel1.jpg',
       price:'100,000',
       planType:'annual',
       },
       
      
       {
        id:10,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'flat',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel4.jpg','hostel3.jpg','hostel5.jpg'],
       coverImage:'hostel2.jpg',
       price:'150,000',
       planType:'annual'
       },
       
      
      
       {
        id:11,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Badmus close',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','school-dom.jpg'],
       coverImage:'hostel1.jpg',
       price:'250,000',
       planType:'annual'
       },
       
      
      
      
       {
        id:12,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Idowu close',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','hostel6.jpg','hostel3.jpg'],
       coverImage:'hostel1.jpg',
       price:'250,000',
       planType:'annual'
       },

       
       {
        id:13,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'flat',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel1.jpg','hostel2.jpg','hostel3.jpg'],
       coverImage:'hostel4.jpg',
       price:'150,000',
       planType:'annual'
       },
       
       
       {
        id:14,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Badmus close',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel3.jpg','hostel6.jpg','school-dom.jpg'],
       coverImage:'hostel2.jpg',
       price:'20,000',
       planType:'annual'
       },
       
       
       {
        id:15,   
       location:'west',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel5.jpg','apartment.jpg','hostel6.jpg'],
       coverImage:'school-dom.jpg',
       price:'50,000',
       planType:'annual'
       },
       
         {
       id:1,   
      location:'north',
      addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
      area:'Apatakiti',
      lodgeType:'self contained',
      subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
      amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
      neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
      distance_toFuta: '3km from lodge a total of 10 mins walking distance',
      vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
      images:['apartment.jpg','dom.jpg','school-dom.jpg'],
      coverImage:'school-dom.jpg',
      price:'50,000',
      planType:'annual'
      },
      
      
     
      {
        id:2,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'ori-oke',
       lodgeType:'Flat',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','school-dom.jpg'],
       coverImage:'school-dom.jpg',
       price:'50,000',
       planType:'annual'
       },
        
      
       {
        id:3,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel2.jpg','hostel3.jpg','hostel4.jpg'],
       coverImage:'hostel1.jpg',
       price:'50,000',
       planType:'annual'
       },
       
      
       {
        id:4,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'cac road',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel1.jpg','apartment.jpg','school-dom.jpg'],
       coverImage:'hostel5.jpg',
       price:'2000',
       planType:'month'
       },
       
       {
        id:5,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Abule oja',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','hostel5.jpg','hoste1.jpg'],
       coverImage:'school-dom.jpg',
       price:'50,000',
       planType:'annual'
       },
       
      
       {
        id:6,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Idowu close',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','hostel6.jpg'],
       coverImage:'school-dom.jpg',
       price:'20,000',
       planType:'annual'
       },
       
      
      
       {
        id:7,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','hostel6.jpg','hostel3.jpg'],
       coverImage:'hostel4.jpg',
       price:'80,000',
       planType:'annual'
       },
       
      
      
      
       {
        id:8,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Idow closet',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','school-dom.jpg'],
       coverImage:'school-dom.jpg',
       price:'5000',
       planType:'month'
       },
       
      
      
       {
        id:9,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'futa road',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel3.jpg','hostel6.jpg','school-dom.jpg'],
       coverImage:'hostel1.jpg',
       price:'100,000',
       planType:'annual',
       },
       
      
       {
        id:10,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'flat',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel4.jpg','hostel3.jpg','hostel5.jpg'],
       coverImage:'hostel2.jpg',
       price:'150,000',
       planType:'annual'
       },
       
      
      
       {
        id:11,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Badmus close',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','dom.jpg','school-dom.jpg'],
       coverImage:'hostel1.jpg',
       price:'250,000',
       planType:'annual'
       },
       
      
      
      
       {
        id:12,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Idowu close',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['apartment.jpg','hostel6.jpg','hostel3.jpg'],
       coverImage:'hostel1.jpg',
       price:'250,000',
       planType:'annual'
       },

       
       {
        id:13,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'flat',
       subDescription:'Our Self contained Apartment is second to none 13 of north, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel1.jpg','hostel2.jpg','hostel3.jpg'],
       coverImage:'hostel4.jpg',
       price:'150,000',
       planType:'annual'
       },
       
       
       {
        id:14,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Badmus close',
       lodgeType:'single room',
       subDescription:'Our Self contained Apartment is second to none 14 of north, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel3.jpg','hostel6.jpg','school-dom.jpg'],
       coverImage:'hostel2.jpg',
       price:'20,000',
       planType:'annual'
       },
       
       
       {
        id:15,   
       location:'north',
       addresss:'2 Apatakiti rd off seleun blovk behind delux shooping plaza',
       area:'Apatakiti',
       lodgeType:'self contained',
       subDescription:'Our Self contained Apartment is second to none 15 0f north, it provides guest with a stylish, functional and modern look tailored to suit your taste with a water running system.',
       amenities: ['3 bathroom', '1 kitchen', '2 toilets', 'single parlour'],
       neighbourhood:['caccf church','futa clinic','chapel church','fourgates hotel','dave salon','Keg beer house','futa'],
       distance_toFuta: '3km from lodge a total of 10 mins walking distance',
       vehiclesCheckpoint: ['texaco','olukayode','state-library','futa-junction','southgate'],
       images:['hostel5.jpg','apartment.jpg','hostel6.jpg'],
       coverImage:'school-dom.jpg',
       price:'50,000',
       planType:'annual'
       },
       
     

  ]

  const LoggedIn = localStorage.getItem('LoggedIn__accomease');
   
  let location = props.match.params.location;
  let id = props.match.params.id;



  const [loading,setLoading] = useState(true);
  const [personalised,setPersonalised] = useState(false);
  const [allLodge,setallLodge] = useState(initialLodges);
  const [lodges,setLodges] = useState([]);
  const [lodge,setLodge] = useState( {});
  const [actionBtn,setActionBtn] = useState({follow:'follow',rent:'rent'});
  const [actions,setActions] = useState({followed:false,rents:true});
 // const [images,setImages] = useState([{src:'school-dom.jpg'}]);
 
  useEffect(()=>{
      let nav = document.querySelector('#nav-header');
      const scrolled = ()=>{
          if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
              nav.classList.add('nav-t0');
          }else{
              nav.classList.remove('nav-t0');
          }
          //console.log('debounced');
      }
         window.addEventListener('scroll',debounce(scrolled,null,false));
   
   
     const subLodges = allLodge.filter((item,i)=>{
       return item.location === location;
     });
 
    const currentLodge = allLodge.find((lodge)=>{
      let num = Number(id);
      //console.log(id,lodge.id);
      return lodge.location === location && lodge.id === num;
    });
   
  //console.log(currentLodge);
      setLodge(currentLodge);

  setLodges(subLodges);  

setActionBtn({follow:'follow',rent:'rent'});
   
setLoading(false);
  },[location,id]);
 

const Not_personalised = _ => setPersonalised(!personalised); 

const LodgeGallery = (lodge)=>{
   
 props.history.push(`/lodge/${lodge.location}/${lodge.id}`);
//window.reload();

}
  
      
const testimonials = [
    {
    altText: 'Slide 1',
    text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
    src:'t1.jpg',
    user:'Bamise olaniawo'
},

{
  altText: 'Slide 1',
  text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
  src:'t6.jpg',
  user:'Akinrinmola marvellous'
},

{
  altText: 'Slide 1',
  text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
  src:'t1.jpg',
  user:'Bisola Akinrinmola'
},

{
    altText: 'Slide 1',
    text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
    src:'t1.jpg',
    user:'Bisola Akinrinmola'
  },
  

{
  altText: 'Slide 1',
  text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
  src:'t2.jpg',
  user:'Japheth Korede'
},

{
  altText: 'Slide 1',
  text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
  src:'t3.jpg',
  user:'Akinmade steven'
},

{
  altText: 'Slide 1',
  text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
  src:'t4.jpg',
  user:'Bankole temitope'
},

{
  altText: 'Slide 1',
  text:'In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me.',
  src:'t5.jpg',
  user:'Samuel Omojudi'
}
];


 
const amenities = [
       {text:'Clean water'},
       {text:'Regular light'},
       {text:'Parking space'},
       {text:'Fairly good road'},
       {text:'Garden room'},
       {text:'Environment cleaner'}
   ];

  const what_around = [
      {next:'Caccf church'},
      {next:'David court'},
      {next:'Ceci plaza'},
      {next:'Futa clinic'},
      {next:'Futa'},
      {next:'Baba lotto'}
  ];

  const distance = [
     { distance:'3km from futa'},
     { distance:'Olukayode'},
     { distance:'Texaco' },
     {distance:'Oba-ile'},
     {distance:'futa junction'},
     {distance:'south-gate'},
     {Totalfee:'250'}

  ] 

   const getAmenities = ()=>{

   return amenities.map((item,i)=>{
       return (
           <>
       
       <li key={i} className="text-capitalize">{item.text}</li>
   

           </>
       )
   })

   }

   const getWhatAround = ()=>{

    return what_around.map((item,i)=>{
        return (
            <>
        
        <li key={i} className="text-capitalize">{item.next}</li>
    
 
            </>
        )
    })
 
    }
    
   const getDistance = ()=>{

    return distance.map((item,i)=>{
     
   if(item.hasOwnProperty('Totalfee')){

    return <li key={i} className="text-capitalize"> A total transport fee of &#8358;{item.Totalfee}</li>;

   }else{
       return <li key={i} className="text-capitalize">{item.distance}</li>;
   }

    })
 
    }

const parseSrc = (images)=>{
       
  let srcs = [];
      images.forEach((src)=>{
        srcs.push({ src }) 
      })
return srcs;
}

const Rent = (e)=>{
    if(LoggedIn === 'false' || LoggedIn === null || LoggedIn === 'null' ){
    return  Not_personalised();
    }else{
      setActionBtn({...actionBtn,rent:'processing...'});
    }
    

}
  
const Follow = (item)=>{
  //let followed = false;
    if(LoggedIn === 'false' || LoggedIn === null || LoggedIn === 'null'){
      return Not_personalised();
    }else{

      if(!actions.followed)  {  
  
        setActionBtn({...actionBtn,follow:'followed'});
          setActions({...actions,followed:true});
      
     }
    else{ 
        
      console.log('fooll');
      setActionBtn({...actionBtn,follow:'follow'}); 
      setActions({...actions,followed:false});
    }
    }
 
     
}

  if(loading) return null;

  return(
    <>

    
<Modal isOpen={personalised} toggle={Not_personalised} className='notlogged-modal'  keyboard={true} >

<ModalBody>
<button className="close-modal"  onClick={Not_personalised}>&times;</button>
  <div className="w-50 my-3 mx-auto"> 
  <img src={require('../../assests/images/archives.png')} style={ {width:'100%',margin: '0 auto'}} />
  </div>
  <div className="w-100"> 
oops! We cant personalize this feature with you if you haven't login or sign up.....
Dont be shy press the button below and get started. 
</div>

</ModalBody>
<ModalFooter>
  <Button className="btn bg-pri text-capitalize border-0" onClick={()=>{ props.history.push('/login') }}>Login</Button>{' '}
  <Button className="btn bg-sec text-capitalize border-0" onClick={()=>{ props.history.push('/sign-up') }}>get started</Button>
</ModalFooter>
</Modal>
 
 <Container fluid={true} style={{marginTop:'10px'}} >

  <Row>

 <Col xs="12" md='7' className="mx-auto">
<div className="img-container"> 
 <LodgeSlides lodges={parseSrc(lodge.images)} />
 </div>

  <Row className="attributes-row mx-auto">

   <Col xs="6" xl="4" className="attributes">
     
   <ul className="">

    
<li className="attribute-lead text-capitalize text-nowrap">amenities</li>
 
 { getAmenities() }
  
</ul>

   </Col>

   
   <Col xs="6" xl="4"  className="attributes">

   <ul className="">

    
<li className="attribute-lead text-capitalize text-nowrap">what's around</li>
 
   { getWhatAround() }

</ul>

 
   </Col>


   
   <Col xs="6" xl="4" className="attributes">
 
 
   <ul className="">

    
<li className="attribute-lead text-capitalize text-nowrap">distance</li>
  
  { getDistance() }

</ul>

 
   </Col>

      </Row>

     </Col>



     <Col xs="12" md="5" className="mx-auto">

  <div className="desc-cont shadow rounded">

<div className="d-flex justify-content-between align-items-center desc-header"> 
 <img src={require('../../assests/images/t1.jpg')} className="mx-2" style={{width:'50px', height:'50px', borderRadius:'50%'}} alt="" />

    <div className="mx-2 text-justify">
     <h4 className="text-capitalize">Olaniawo bamise</h4>
     <small className="text-muted"> Acting on behalf </small>
     </div>
 </div>
<hr />
     <div className="desc-content p-3">
      { lodge.subDescription }
  </div>

<hr />

     <div className="desc-footer">
      
      <div className="w-100 d-flex">

      <Button id="follow-btn"  className="btn bg-pri mx-2 text-capitalize" onClick={ Follow.bind(this,lodge) } >{actionBtn.follow}</Button>
          <Button id="rent-btn" className="btn bg-sec mx-2 text-capitalize" onClick={Rent} >{actionBtn.rent}</Button>
          

      </div>
          
      </div>

  
      </div>

 
     </Col>




      </Row>

 </Container>

<hr className="bg-pri" />
 
 <Testimonials items={testimonials}  />

 <hr className="bg-pri" />
 
<div className="card-overflow" style={{overflowX:'hidden'}} >
 
 <ListingCard cards={lodges} title={`lodges around ${props.match.params.location || lodge.location} gate`} />

</div>

<hr className="bg-pri" />

 <FAQ />

 <Footer />

   <ProfileImg src={require('../../assests/images/t1.jpg')} />   


    </>
   )

 }

export default Apartment;