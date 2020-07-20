import React, {Suspense,lazy } from 'react'
import Loader from '../../components/Loader/Loader';
/**
* @author
* @function Preview1
**/

const LandingPage = lazy(() => import('./LandingPage') );

const Authenticted = (props) => {
  
  return(
    <Suspense fallback={ 
        <>
        <Loader />
    </>
    }>
      <LandingPage />
    </Suspense>
   )

 }

export default Authenticted;