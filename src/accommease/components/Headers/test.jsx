import React, { useEffect,useContext } from 'react';
import {
Nav, NavItem, Container,Row,Col
} from 'reactstrap';
import styled from 'styled-components';
import  { Link } from 'react-router-dom';
import './Header.scss';
import { ContextObj } from '../functionalComponent';

/**
* @author
* @function Header
**/

const Header = (props) => {
   
  const context = useContext(ContextObj);
  const { LoggedIn } =  context;
   
  const active = "nav-link text-decoration-none text-capitalize active-h";
  const BSstyle = "nav-link text-decoration-none text-capitalize text-pri";
  const notActive = "nav-link text-decoration-none text-capitalize text-pri";
 const pathname = props.location.pathname;

  
 
  return(
   <> 

    <Nav  className={ props.location.pathname === '/sign-up' || props.location.pathname === '/login' || props.location.pathname === '/recover-password'  ? 'd-none': ''}> 

   <NavItem className="" ><Link className={ pathname === '/' ? active : notActive } to="/">lodges</Link> </NavItem>   
  <NavItem className={ LoggedIn ? 'd-block': 'd-none' } ><Link className={ pathname === '/me/notification' ? active : notActive }  to="/me/notification"><i className="far fa-bell font-12"></i></Link> </NavItem>
  <NavItem className={ LoggedIn ? 'd-block': 'd-none' } ><Link className={ pathname === '/settings/account' ? active : notActive }  to="/settings/account"><i className="fa user-cog font-12"></i></Link> </NavItem>
  <NavItem><Link className={ pathname === '/explore' ? active : notActive } to="/explore"><i className="fab fa-searchengin font-12"></i></Link> </NavItem>
  <NavItem className={ LoggedIn ? 'd-none' : 'd-block'  }><Link className={ pathname === '/login' ? active : notActive } to="/login"><i className="fa fa-sign-in-alt font-12"></i></Link> </NavItem>
  <NavItem className={  LoggedIn ? 'd-block': 'd-none' } ><Link className={ pathname === '/login' ? active : notActive }  to="/login"><i className="fa fa-sign-out-alt font-12"></i></Link> </NavItem>
  

  <NavItem className="r" ><Link className={ pathname === '/benefits' ? active  : notActive } to="/benefits"> Benefits</Link> </NavItem>
  <NavItem className={  LoggedIn ? 'd-block': 'd-none' } ><Link className={ pathname === '/me/actions' ? active  : notActive } to="/me/actions">Actions</Link> </NavItem>          
  <NavItem className="r" ><Link className={ pathname === '/north' ? active  : notActive } to="/north">north</Link> </NavItem>
  <NavItem ><Link className={ pathname === '/south' ? active : notActive } to="/south">south</Link> </NavItem>
  <NavItem><Link className={ pathname === '/west' ? active : "nav-link text-decoration-none text-capitalize text-pri" } to="/west">west</Link> </NavItem>
  <NavItem ><Link className={ pathname === '/agents' ? active : notActive } to="/agents">agents</Link> </NavItem>
  <NavItem className={LoggedIn ? 'd-none':'d-block'}><Link to="/sign-up" className="nav-link nav-radius text-decoration-none text-nowrap bg-pri">Get started</Link> </NavItem>
     
            </Nav>
</>
   )

 }

export default Header;





@import '../../styles/queries';
@import '../../styles/variables';

.navigation{
   // position:relative !important;
    
    
&__checkbox {
 display:none;
 opacity:0;

 &:checked ~ .mobile-list{
  display:none;
 }
 
&:checked ~ nav{
  height:100vh;
  //overflow:hidden;
    opacity: 1;
    width  : 100%;
    background:$secondary;
    @include media(768px){
      display:none;
    }
}

// &:checked ~ .navigation__bg{
//     transform:scale(100);
     
// };

&:checked + .navigation__button .navigation__icon{
   background:transparent;

}

&:checked + .navigation__button .navigation__icon::before{
  background:#fff;
    top      : 0;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
}

&:checked + .navigation__button .navigation__icon::after{
  background:#fff;
    top      : 0;
    -webkit-transform: rotate(-135deg);
            transform: rotate(-135deg);
}

}
    

  
  
  &__button {
     
    height          : 40px;
    width           : 40px;
    border-radius   : 50%;
    position        : absolute;
    top             : 5px;
    right           : 15px;
    z-index         : 20;
    cursor          : pointer !important;
    // -webkit-box-shadow      : 0 1rem 3rem rgba(#3333, .1);
    // box-shadow      : 0 1rem 3rem rgba(#333, .1);
    //   text-align      : center;
    @include media(768px){
      display:none;
    }

  }

  
//   &__bg {  
//     height          : 32px;
//     width           : 32px;
//     border-radius   : 50%;
//     position        : absolute;
// transform:scale(0);
//     top             : 12px;
//     //background:#ccc;
//     right           : 17px;
//   background-image: radial-gradient(#fff, #000);
//     z-index         : 10;
//     -webkit-transition      : -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);
//     transition      : -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);
//     transition      : transform .8s cubic-bezier(0.86, 0, 0.07, 1);
//     transition      : transform .8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);
 
//   }


  &__icon{
     @include positioned-center($value:relative);

     cursor:pointer;
      &,&::before,&::after{
        width:27px;
        height:3px;
        display:block;
        background:$grey-dark;
        border:0;
        color:#fff;
       transition:all .5s;
      }

      &::before,&::after{
        content:'';
        position:absolute;
      }

      &::before{
         top:-8px;
        // background:blue;
      }

      &::after{
         // background:pink;
         top:8px;
      }

  } //icon btn

  &__button:hover &__icon::before{
      top:-9px;
  }

  
  &__button:hover &__icon::after{
    top:9px;
}


 
}//EOF navigation

 
nav{
    height    : 100vh;
    width     : 0;
    position  : relative;
    top       : 0;
    left      : 0;
    z-index   : 15;
    opacity   : 0;
    -webkit-transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    @include media(768px){
      display:none;
    }

   & .navigation__list{
       @include positioned-center;
       list-style   : none;
       text-align   : center;
    }
 

  .navigation__link{
     width:200px;  
    &:link,
    &:visited {
      display         : inline-block;
      color           : #fff;
      padding         : 1rem 2rem;
      text-decoration : none;
      text-transform  : uppercase;
     background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $tertiary 50%);
      background-size : 220%;
      -webkit-transition      : all .4s;
      transition      : all .4s;
    }

    &:active,
    &:hover {
      background-position: 100%;
      color              : #fff;
      -webkit-transform          : translateX(1rem);
              transform          : translateX(1rem);
    }

  }
    

}//EOF nav
 


// mobile exceptional

.mobile-list{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    
    & .mobile-btn{
      margin:5px;
      padding:5px;
      border:0;
      outline:none;
      box-shadow:none;
      width:map-get($width,'w-80');
      transition:all 0.5s;
   
    }
 
}
 

@import '../../styles/variables';
@import '../../styles/queries';

//.container{ margin-top:-30px; }

//.nav{ margin-top:-40px; }

.active-h{
    background:$primary;
    color:#fff;
}

.nav{  
    //  margin-top:-36px;
    position:absolute;
       z-index:500 ; 
}
 
.nav-item{
    background:none;
    text-align:center;
    color:$primary;
    width:100px;
    margin:5px;
    

    &:nth-child(5){
        @include media($width:768px){
            margin-left:auto;
     
        }
 
    }

    
    &:hover{
        background:lighten($secondary,30%);
      
        &:hover > .nav-link{ color:#fff !important; }
    }
}



//true



@import '../../styles/queries';
@import '../../styles/variables';

.navigation{
   // position:relative !important;
    
    
&__checkbox {
 display:none;
 opacity:0;

 &:checked ~ .mobile-list{
  display:none;
 }
 
&:checked ~ nav{
  height:100vh;
  //overflow:hidden;
    opacity: 1;
    width  : 100%;
    background:$secondary;
    @include media(768px){
      display:none;
    }
}

// &:checked ~ .navigation__bg{
//     transform:scale(100);
     
// };

&:checked + .navigation__button .navigation__icon{
   background:transparent;

}

&:checked + .navigation__button .navigation__icon::before{
  background:#fff;
    top      : 0;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
}

&:checked + .navigation__button .navigation__icon::after{
  background:#fff;
    top      : 0;
    -webkit-transform: rotate(-135deg);
            transform: rotate(-135deg);
}

}
    

  
  
  &__button {
     
    height          : 40px;
    width           : 40px;
    border-radius   : 50%;
    position        : absolute;
    top             : 5px;
    right           : 15px;
    z-index         : 20;
    cursor          : pointer !important;
    // -webkit-box-shadow      : 0 1rem 3rem rgba(#3333, .1);
    // box-shadow      : 0 1rem 3rem rgba(#333, .1);
    //   text-align      : center;
    @include media(768px){
      display:none;
    }

  }

  
//   &__bg {  
//     height          : 32px;
//     width           : 32px;
//     border-radius   : 50%;
//     position        : absolute;
// transform:scale(0);
//     top             : 12px;
//     //background:#ccc;
//     right           : 17px;
//   background-image: radial-gradient(#fff, #000);
//     z-index         : 10;
//     -webkit-transition      : -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);
//     transition      : -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);
//     transition      : transform .8s cubic-bezier(0.86, 0, 0.07, 1);
//     transition      : transform .8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);
 
//   }


  &__icon{
     @include positioned-center($value:relative);

     cursor:pointer;
      &,&::before,&::after{
        width:27px;
        height:3px;
        display:block;
        background:$grey-dark;
        border:0;
        color:#fff;
       transition:all .5s;
      }

      &::before,&::after{
        content:'';
        position:absolute;
      }

      &::before{
         top:-8px;
        // background:blue;
      }

      &::after{
         // background:pink;
         top:8px;
      }

  } //icon btn

  &__button:hover &__icon::before{
      top:-9px;
  }

  
  &__button:hover &__icon::after{
    top:9px;
}


 
}//EOF navigation

 
nav{
    height    : 100vh;
    width     : 0;
    position  : absolute;
    top       : 0;
    left      : 0;
    z-index   : 15;
    opacity   : 0;
    -webkit-transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    @include media(768px){
      display:none;
    }

   & .navigation__list{
       @include positioned-center;
       list-style   : none;
       text-align   : center;
    }
 

  .navigation__link{
     width:200px;  
    &:link,
    &:visited {
      display         : inline-block;
      color           : #fff;
      padding         : 1rem 2rem;
      text-decoration : none;
      text-transform  : uppercase;
     background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $tertiary 50%);
      background-size : 220%;
      -webkit-transition      : all .4s;
      transition      : all .4s;
    }

    &:active,
    &:hover {
      background-position: 100%;
      color              : #fff;
      -webkit-transform          : translateX(1rem);
              transform          : translateX(1rem);
    }

  }
    

}//EOF nav
 


// mobile exceptional

.mobile-list{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    
    & .mobile-btn{
      margin:5px;
      padding:5px;
      border:0;
      outline:none;
      box-shadow:none;
      width:map-get($width,'w-80');
      transition:all 0.5s;
   
    }
 
}
 



<input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
<label htmlFor="nav-toggle" className="navigation__button">
  <span className="navigation__icon">&nbsp;</span>  
</label>

{/* <div className="navigation__bg"></div> */}

{/*       
<ul className="mobile-list">
        <li className="mobile-item"><a href="#" className="mobile-link rounded">Lodges</a></li>
    <li className="mobile-item"><a href="#" className="mobile-link rounded">Login</a></li>

     <li className="mobile-item"><a href="#" className="mobile-link rounded">Benfits</a></li>
    <li className="mobile-item"><a href="#" className="mobile-link rounded">explore</a></li>
 
</ul> */}


<div className="mobile-list">

<button className="bg-pri mobile-btn">Lodges</button>
<button className="bg-pri mobile-btn"><i className="fab fa-sign-in-alt font-12"></i></button>
<button className="bg-pri mobile-btn">Benefits</button>
<button className="bg-pri mobile-btn"><i className="fab fa-searchengin font-12"></i></button>

<button className="bg-pri mobile-btn"><i className="far fa-bell font-12"></i></button>
<button className="bg-pri mobile-btn"><i className="fa fa-user-cog font-12"></i></button>
<button className="bg-pri mobile-btn">Actions</button>
<button className="bg-pri mobile-btn">North</button>
<button className="bg-pri mobile-btn">south</button>
<button className="bg-pri mobile-btn">west</button>

</div>

   
  <nav className="navigation__nav">

  <ul className="navigation__list">
    <li className="navigation__item"><a href="#" className="navigation__link">About Natours</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Your benefits</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Popular tours</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Book now</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Your benefits</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Popular tours</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
    <li className="navigation__item"><a href="#" className="navigation__link">Book now</a></li>
 
  </ul>

  </nav>

   