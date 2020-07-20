 import React from 'react';
import {
    Container,Row,Col,Form,Input,FormGroup
} from 'reactstrap';
import SidePanel from '../../../components/settingsSidePanel/sidePanel';
import { ScreenNameForm,PhoneForm,EmailForm,UpdatePwdForm,SecurityForm } from '../../../components/Form/form';

/**
* @author
* @function SettingsForm
**/


export const ScreenName = (props)=>{


    return (
        <>
        

       <Container fluid={true}>
            <Row className="no-gutters">
                <Col xs="12" md="5">
                <SidePanel />
                </Col>

                <Col xs="12" md="7">
                   <ScreenNameForm />     
                </Col>
            </Row>
        </Container>
 



        </>
    )

}



export const Phone = (props)=>{


    return (
        <>
       
  
       <Container fluid={true}>
            <Row className="no-gutters">
                <Col xs="12" md="5">
                <SidePanel />
                </Col>

                <Col xs="12" md="7">
                
                </Col>
            </Row>
        </Container>
 



        </>
    )

}




export const Email = (props)=>{


    return (
        <>
       
  
       <Container fluid={true}>
            <Row className="no-gutters">
                <Col xs="12" md="5">
                <SidePanel />
                </Col>

                <Col xs="12" md="7">
               <EmailForm />  
                </Col>
            </Row>
        </Container>
 



        </>
    )

}


export const UpdatePwd = (props)=>{


    return (
        <>
       
  
       <Container fluid={true}>
            <Row className="no-gutters">

                <Col xs="12" md="5">
                <SidePanel />
                </Col>

                <Col xs="12" md="7">
                   <UpdatePwdForm />     
                </Col>
            </Row>
        </Container>
 

        </>
    )

}



export const Security = (props)=>{


    return (
        <>
       
  
       <Container fluid={true}>
            <Row className="no-gutters">
                
                <Col xs="12" md="5">
                <SidePanel />
                </Col>

                <Col xs="12" md="7">
                   <SecurityForm />     
                </Col>
            </Row>
        </Container>
 

        </>
    )

}








const SettingsForm = (props) => {
  return(
    <div>SettingsForm</div>
   )

 }

export default SettingsForm;