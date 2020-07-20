import React, { useState, useContext, useEffect } from 'react'
import { Link,Redirect } from 'react-router-dom';
import {
Container,Row,Col,Button,ButtonGroup,Spinner
} from 'reactstrap';
import ProfileImg, { ContextObj } from '../../components/functionalComponent'; 
import   { AgentsSlides } from '../../components/sliders/sliders';
//import styled from 'styled-components';
import './Authenticated.scss'
import Footer from '../../components/Footer/footer';
import FAQ from '../../components/Faq/faq';
/**
* @author marvel miles
* @function LandingPage
**/


const LandingPage = (props) => {

  const initialLodges = [

  
    {
      id:1,   
     location:'south',
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
      location:'south',
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
      location:'south',
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
       location:'north',
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
       location:'north',
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
       
     

  ]
  const agent = { name:'Akinrinmola marvellous',space:'5 space' }; 
  //const [modal, setModal] = useState(false);

  const [loading,setLoading] = useState(true)
  
  const [lodges,setLodges] = useState(initialLodges);

const appContext = useContext(ContextObj);


useEffect(()=>{
  setLoading(false);
},[]);

const LoggedIn = localStorage.getItem('LoggedIn__accomease');
 
 // const toggle = () => setModal(!modal);
 
    
//   const getSubAmenities = (amenities)=>{
    
//     const a1 = amenities[0];
//     const a2 = amenities[1];
//     const a3 = amenities[2];

// return <span style={{color:'#302b63'}}> {  a1 + ' . ' + a2 + " . " + a3 } </span> ;

//   }

  const getLodgesBy = ()=>{
     

       return lodges.map((lodge,i)=>{
         return (
           <>
        
      <div className="la-wrapper mx-2">
        <div className="l-container">
        <div className="l-img-container">
          <img src={require(`../../assests/images/${lodge.coverImage}`)} alt="" />
        </div>
        <Button onClick={_=>props.histroy.push(`/lodge/${lodge.location}/${lodge.id}`)} >check</Button>
        </div>
        
        <div className="l-body">
          <div className="l-body-img-cont">
            <img src={require('../../assests/images/t2.jpg')} alt=""/>
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
           </>
         )
       })

  }
  
  const getAllLodges = ()=>{

  return lodges.map((lodge,i)=>{
    return (
      <>

<Col key={i} xs="12" sm="6" xl="4" className="mx-auto">
  
  
<div className="l-wrapper">
        <div className="l-container">
        <div className="l-img-container">
          <img src={require(`../../assests/images/${lodge.coverImage}`)} alt="" />
        </div>
        <Button onClick={_=> props.history.push(`/lodge/${lodge.location}/${lodge.id}`)} >check</Button>
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
 
   
  const getGrettings = ()=>{
    return (
      <>
      
 
      <div className="content">

<div className="text-note">
  <h4>Rooms & Rates </h4>
  <p>
    Hi, <span>
      {  localStorage.getItem('firstname__accomease') ? localStorage.getItem('firstname__accomease') : 'user' }
      </span> lorem ipsium de lorem e deux comor ver sed cder 
    comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
    yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
  </p>
  <div className="hr"><div></div></div>
</div>

</div>

      </>
    )
  };
  
  const getStarted = ()=>{
    
    return (
       <>
    
<div className="view-page">
    <h4 className="text-white">We will give you better experience connecting you to a large user base of renters and landlords. <br /> No wahala No stress  </h4>
    <button className="btn bg-pri border-0"><Link to="/sign-up" className="">Get started</Link></button>
</div>
       </>
    )

  };

  const getMain = _ => {

    // if( LoggedIn === null || LoggedIn === 'false' || LoggedIn === 'null'){
    //   return <Redirect to="/login" />
    // } 

    return (
      <>


<div className="overlay__container">

  
{( LoggedIn !== null || LoggedIn !== 'null' )   && LoggedIn === 'true' ? getGrettings() : getStarted() }

</div>
 
<section className="clearfix explore">

    <div className="float-left explore-lodges-left">

      {/* Text note start */}

          <div className="text-note my-3">
     <h4 className="text-sec">Lorem ipsium </h4>
     <p className="text-dark">
       lorem ipsium de lorem e deux comor ver sed cder 
       comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
       yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
     </p>
     <div className="hr bg-sec"><div className="bg-pri"></div></div>
   </div>


   <div className="text-note my-3">
     <h4 className="text-sec"> lorem ipsium </h4>
     <p className="text-dark">
      lorem ipsium de lorem e deux comor ver sed cder 
       comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
       yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
     </p>
     <div className="hr bg-sec"><div className="bg-pri"></div></div>
   </div>



   <div className="text-note my-3">
     <h4 className="text-sec">Lorem ipsium </h4>
     <p className="text-dark">
        lorem ipsium de lorem e deux comor ver sed cder 
       comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
       yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
     </p>
     <div className="hr bg-sec"><div className="bg-pri"></div></div>
   </div>

{/* Text note ended */}

      </div>

      <div className="float-right explore-lodges-right">

        {/* Cards start */}
        <h4 className="text-sec text-center mb-3">Lodges for you</h4>

        <Container fluid={true}>
          <Row className="no-gutters">

            { getAllLodges() }

            </Row>
        </Container>
 
        {/* End cards */}

      </div>

  </section>


  <section className="category">

<h5 className="text-sec"><span className="first-word">Top</span> apartments by rates </h5>

   <div className="d-flex card-row ">
         
         { getLodgesBy() }

     </div>

  </section>


  <section>
   
   <Container fluid={true} className="my-5"> 
   
   <Row className="no-gutters">

     <Col xs="12" md="5">
       
    <div  className="explore-rent-left my-2">

{/* Text note start */}

    <div className="text-note my-3 mx-2">
<h4 className="text-sec">Lorem ipsium </h4>
<p className="text-dark">
  lorem ipsium de lorem e deux comor ver sed cder 
 comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
 yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
</p>
<div className="hr"><div className=""></div></div>
</div>


<div className="text-note my-3 mx-2">
<h4 className="text-sec"> Lorem ipsium </h4>
<p className="text-dark">
   lorem ipsium de lorem e deux comor ver sed cder 
 comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
 yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
</p>
<div className="hr"><div className=""></div></div>
</div>



<div className="text-note my-3 mx-2">
<h4 className="text-sec"> Lorem ipsium </h4>
<p className="text-dark">
 lorem ipsium de lorem e deux comor ver sed cder 
 comor tune yay vet devz comor deux let le rein tevz der cche ipsium deb uservb
 yah come rres des twight des tevr tune of omore comor jeux sedd cete eu tome.
</p>
<div className="hr"><div className=""></div></div>
</div>

{/* Text note ended */}

</div>
     </Col>

     <Col xs="12" md="7">
 
     <div className="shadow explore-rent-right my-3">

      <img className="w-100 h-100" src={require('../../assests/images/collect-rent-ui.png')} alt="" />

     </div>

       </Col>


     </Row>
   
    </Container>

</section>



<section>

  <h4 className="text-sec text-center first-word mb-3">Why you should choose accomease</h4>

   <AgentsSlides />

<FAQ />

   
  <Footer />
   

  </section>

<ProfileImg src={require('../../assests/images/user-blue.png')} />

      </>
    )

  }

  if( loading ) return null;

  return(
    <>
  
    { getMain() }
     
    </>
   )

 }

export default LandingPage;