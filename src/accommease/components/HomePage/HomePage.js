import React from 'react';
import styled from 'styled-components';
import { 
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col,Row,Container
} from 'reactstrap';

import { AgentsSlides } from '../../components/sliders/sliders';

import './HomePage.scss';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {

    const BannerButton = styled.button.attrs({
        type:'button',
        className:props.className
    })``;

  return(
   <>

  <section>
      
      <div className="banner">
          <div>
          <p className="">
              Lorem ipsium of de lore tevez isium of color it ese res deux vex deu pavrol le tocuhe dere chome isi tom tore
              teux is tome comet trey res isium ipsium tore two cinq quartz jombe joure tome yourme to vez is res to me res itrey
               re tem ipsium of dere tom ere canvase lorem opera tome isium of tore juex der tevez le tom isium topez re eset isias
           </p>
             <BannerButton className="btn btn-lg bg-pri">Get started</BannerButton>
             </div>
      </div>
  </section>
   
   <seciton>

   <AgentsSlides />

   </seciton>

   <Container fluid={true}>
    
        <Row className="">
                
                <Col xs="12" sm="6" lg="4" xl="3" className="mx-auto">
                      
                <Card className="hover-shadow">
        <CardImg top width="100%" src={require('../../assests/images/school-dom.jpg')} alt="Card image cap" />
        <CardBody>
          <CardTitle className="">
              <div className="w-100 d-flex justify-content-between">
                  <h6>$5,000/annually</h6>
                 <small className="text-muted"> 2bed . 1bath</small>
              </div>
          </CardTitle>
          <CardSubtitle>Self contained lodge</CardSubtitle>
           
  <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-between">

          <div className="location-sub-img-container">
                
             <img src={require('../../assests/images/school-dom.jpg')} alt="school-dom.jpg" className="rounded" />
             <img src={require('../../assests/images/school-dom.jpg')} alt="school-dom.jpg" className="rounded" />

              </div>

  </div>

  <div className="location-sub-btn-container text-center">
  <Button className="bg-pri border-0">Check</Button>

  </div>

        </CardBody>
      </Card>                      

                    </Col>

                    <Col xs="12" sm="6" lg="4" xl="3" className="mx-auto">
                      
                      <Card className="hover-shadow">
              <CardImg top width="100%" src={require('../../assests/images/school-dom.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle className="">
                    <div className="w-100 d-flex justify-content-between">
                        <h6>$5,000/annually</h6>
                       <small className="text-muted"> 2bed . 1bath</small>
                    </div>
                </CardTitle>
                <CardSubtitle>Self contained lodge</CardSubtitle>
                 
        <div className="w-100 d-flex flex-direction-sm-row align-items-center justify-content-between">
      
                <div className="location-sub-img-container">
                      
                   <img src={require('../../assests/images/school-dom.jpg')} alt="school-dom.jpg" className="rounded" />
                   <img src={require('../../assests/images/school-dom.jpg')} alt="school-dom.jpg" className="rounded" />
      
                    </div>
      
        </div>
      
        <div className="location-sub-btn-container text-center">
        <Button className="bg-pri border-0">Check</Button>
      
        </div>
      
              </CardBody>
            </Card>                      
      
                          </Col>


                          <Col xs="12" sm="6" lg="4" xl="3" className="mx-auto">
                      
                      <Card className="hover-shadow">
              <CardImg top width="100%" src={require('../../assests/images/school-dom.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle className="">
                    <div className="w-100 d-flex justify-content-between">
                        <h6>$5,000/annually</h6>
                       <small className="text-muted"> 2bed . 1bath</small>
                    </div>
                </CardTitle>
                <CardSubtitle>Self contained lodge</CardSubtitle>
                 
        <div className="w-100 d-flex flex-direction-sm-row align-items-center justify-content-between">
      
                <div className="location-sub-img-container">
                      
                   <img src={require('../../assests/images/school-dom.jpg')} alt="school-dom.jpg" className="rounded" />
                   <img src={require('../../assests/images/school-dom.jpg')} alt="school-dom.jpg" className="rounded" />
      
                    </div>
      
        </div>
      
        <div className="location-sub-btn-container text-center">
        <Button className="bg-pri border-0">Check</Button>
      
        </div>
      
              </CardBody>
            </Card>                      
      
                          </Col>
      

        </Row>



  
       </Container>


   </>
   )

 }

export default HomePage;