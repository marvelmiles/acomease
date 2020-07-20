import React, { useState,useEffect } from 'react';
import Ui_Body from '../../components/UI_Body/Ui_Body';

 
 /**
 * @author  marvel miles
 * @function South
 **/
 
 const South = (props) => {

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    },[]);

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
       
       
      ];
      
      if(loading) return null;

   return(
    <>
  
    <Ui_Body lodges={initialLodges} />

    </>
    )
 
  }
 
 export default South;