import React from 'react';
import './Loading.scss';

/**
* @author
* @function Loader
**/

const Loader = (props) => {
  return(
     <>
<div className="loader-container"> 
<img src={require('../../assests/images/brand.jpg')} width="200" height="200" className=" loader" /> 
</div>
     </>
   )

 }

export default Loader;