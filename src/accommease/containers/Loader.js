import React, {Suspense} from 'react'
import Loader from '../components/Loader/Loader';
/**
* @author
* @function Preview1
**/

const Started = React.lazy(() => import('../components/Get_started/preview1') );

const Preview1 = (props) => {
  return(
    <Suspense fallback={
       <>
     <Loader />

       </>
        }>
        <Started history={props.history} />
    </Suspense>
   )

 }

export default Preview1;