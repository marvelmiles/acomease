import React, { useEffect,useContext } from 'react';
import { Nav,NavItem,Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { checkPath,ContextObj } from '../../components/functionalComponent';
import './Header.scss';

/**
* @author
* @function Header
**/

const Header = (props) => {
 
  const appContext = useContext(ContextObj);
  const { searchRef } = appContext;

  let LoggedIn = localStorage.getItem('LoggedIn__accomease');
    
  const active = "nav-link text-decoration-none text-capitalize active-nav";
  //const BSstyle = "nav-link text-decoration-none text-capitalize text-pri";
  const notActive = "nav-link text-decoration-none text-capitalize text-pri";
 const pathname = props.location.pathname;

 useEffect(()=>{
  const nav = document.querySelector('#navigation__nav');
  if(nav.classList.contains('navigation__width')){
    nav.classList.remove('navigation__width');
    nav.classList.add('navigation__nav');
  } 


 },[pathname]);

   
  const toggleSearch = ()=>{ 
    const node = document.querySelector('#explore-form');
    const input = document.querySelector('#explore-input');
    const nav = document.querySelector('#navigation__nav');

      // if(pathname === '/north' || pathname === '/west' || pathname === '/south'){
      //   const search = document.querySelector('#');
      //   window.s
      // }
         
      if(document.querySelector('#location-search') && document.querySelector('#location-search') !== null && document.querySelector('#location-search') !== undefined){
      //  console.log('true scroll');
        window.scrollTo(0,searchRef.current.offsetTop);
      }else{
        
    if(node.classList.contains('explore-form-hide')){
      node.classList.remove('explore-form-hide');
      node.classList.add('explore-form-show');
      input.focus();
    }else{
      node.classList.remove('explore-form-show');
      node.classList.add('explore-form-hide');
    } 
      }

      
    if(nav.classList.contains('navigation__width')){
      nav.classList.remove('navigation__width');
      nav.classList.add('navigation__nav');
    } 
       
   
  }
 
  const toggleSideNav = ()=>{
    const node = document.querySelector('#explore-form');

    const nav = document.querySelector('#navigation__nav');
     if(nav.classList.contains('navigation__nav')){
    nav.classList.remove('navigation__nav');
    nav.classList.add('navigation__width');
     }else{
       nav.classList.remove('navigation__width');
     nav.classList.add('navigation__nav');
      
     }

    if(node.classList.contains('explore-form-show')){
      node.classList.remove('explore-form-show');
      node.classList.add('explore-form-hide');
    }

    window.scrollTo(0,nav.offsetTop);

  }

 
 const removeHeader = (path)=>{
   if(checkPath(path)){
     return { display:'none' };
   }else{
     return {};
   }
 }

 const pathStyle = (pathname)=>{
    if( 
      pathname === '/north' || pathname === '/west' || pathname === '/south' 
      ) return true;
      else if( /^(\/lodge)/.test(pathname) ) return true;
      else return false;
 }
  
  return(
    <>
   
  <Nav id="nav-header" className={  pathStyle(pathname) ? 'nav-fixed  bg-white' : 'nav-absolute' } style={removeHeader(pathname)} > 

<NavItem className="md" ><Link className={ pathname === '/' ? active : notActive } to="/">lodges</Link> </NavItem> 
<NavItem  className={ LoggedIn === 'true' ? ' d-block':'d-none' } > <Link to="/me/actions" className={ pathname === '/me/actions' ? active : notActive } > Actions  </Link> </NavItem>
<NavItem className={  LoggedIn === 'true' ? 'd-none' : 'md d-block' } > <Link className={ pathname === "/login" ? active : notActive } to="/login" > Login </Link> </NavItem>

<NavItem  className={ LoggedIn === 'true' ? ' d-block ':'d-none' } > <Link className={ pathname === "/benefits" ? active : notActive } to="/benefits"> benefits </Link> </NavItem>
<NavItem onClick={toggleSearch}  className={LoggedIn ? ' slog-md':'d-none' }  > <Link to="#" className={notActive} > <i className="fab fa-searchengin font-12"></i> </Link> </NavItem>
<NavItem  className={LoggedIn === 'true' ? ' slog-md ':'d-none' } > <Link className={ pathname === "/settings/account" ? active : notActive } to="/settings/account"><i className="fa fa-user-cog font-12"></i> </Link> </NavItem>
<NavItem  className={LoggedIn === 'true' ? 'slog-md ':'d-none' } >  <Link className={ pathname === "/login" ? active : notActive } to="/login"> Logout </Link> </NavItem>


 <NavItem className={ LoggedIn === 'true' ? 'd-none' : 'md d-block' }><Link className={ pathname === '/benefits' ? active : notActive } to="/benefits">benefits</Link></NavItem> 
 <NavItem onClick={toggleSearch} className={ LoggedIn || LoggedIn === 'true' ? 'd-none' : 'md e' }><Link to="#"  className={notActive}>explore</Link></NavItem>   

 
<NavItem className={ LoggedIn === 'true'  ? 'ln-d ml-auto': 'n-d ml-auto'} ><Link className={ pathname === "/north" ? active : notActive } to="/north">north</Link> </NavItem>
<NavItem className={ LoggedIn === 'true' ? 'ln-d' : 'n-d'}><Link className={ pathname === "/south" ? active : notActive } to="/south">south</Link> </NavItem>
<NavItem className={ LoggedIn === 'true' ? 'ln-d' : 'n-d'}><Link className={ pathname === "/west" ? active : notActive } to="/west">west</Link> </NavItem>
<NavItem className={ LoggedIn === 'true' ? 'ln-d' : 'n-d' }><Link className={ pathname === "/agents" ? active : notActive } to="/agents">agents</Link> </NavItem>
 

 {/* <NavItem  className="med-d" ><Link className={ pathname === '/me/notification' ? active : notActive }  to="/me/notification"><i className="far fa-bell font-12"></i></Link> </NavItem>
 <NavItem className="med-d" ><Link className={ pathname === '/settings/account' ? active : notActive }  to="/settings/account"><i className="fa user-cog font-12"></i></Link> </NavItem>
 <NavItem className="med-d"><Link className="#"className="text-deoration-none text-pri explore-nav" ><i className="fab fa-searchengin font-12"></i></Link> </NavItem>
 <NavItem  className="med-d"><Link className={ pathname === '/login' ? active : notActive } to="/login"><i className="fa fa-sign-in-alt font-12"></i></Link> </NavItem>
 <NavItem className="med-d" ><Link className={ pathname === '/login' ? active : notActive }  to="/login"><i className="fa fa-sign-out-alt font-12"></i></Link> </NavItem> */}

       
 <NavItem className="med-d" ><Link className={ pathname === '/me/actions' ? active  : notActive } to="/me/actions">Actions</Link> </NavItem> 

  <NavItem className="med-d"><Link className={ pathname === '/agents' ? active : notActive } to="/agents">agents</Link> </NavItem>
  

 
 <NavItem onClick={toggleSideNav} className={ LoggedIn === 'true' ? 'lmd icon__btn ml-auto' : 'md icon__btn ml-auto'}> <span className="navigation__icon"></span> </NavItem>
 
         </Nav>    
 
  <nav id="navigation__nav" className="navigation__nav">
<button onClick={toggleSideNav} className="close-modal bg-pri">&times;</button>
  <ul className="navigation__list">
    <li   className={ LoggedIn === 'true'  ? "navigation__item sn-d" : 'se-d'}> <Link to="#" onClick={toggleSearch} className="navigation__link">Explore</Link> </li>
    <li className={LoggedIn === 'true'  ? "navigation__item sn-d" : 'ssn-d'}> <Link to="/north" onClick={toggleSideNav} className="navigation__link">North</Link> </li>
    <li className={ LoggedIn === 'true'  ? "navigation__item sn-d" : 'ssn-d'}> <Link to="/south" onClick={toggleSideNav} className="navigation__link">South</Link> </li>
    <li className={ LoggedIn === 'true'  ? "navigation__item sn-d" : 'ssn-d'}> <Link to="/west" onClick={toggleSideNav} className="navigation__link">west</Link> </li>
    <li className={ LoggedIn === 'true'  ? "navigation__item sn-d" : 'ssn-d'}> <Link to="/agents" onClick={toggleSideNav} className="navigation__link">Agents</Link> </li>

    
  
    <li className={  LoggedIn === 'true' ? "navigation__item sl-d" : "d-none navigation__item" }> <Link to="/nprth" onClick={toggleSideNav} className="navigation__link"> North</Link> </li>
    <li className={  LoggedIn === 'true' ? "sl-d navigation__item" : "d-none navigation__item" }> <Link to="/south" onClick={toggleSideNav} className="navigation__link">South</Link> </li>
    <li className={  LoggedIn === 'true' ? "sl-d navigation__item" : "d-none navigation__item" }> <Link to="/west" onClick={toggleSideNav} className="navigation__link">West</Link> </li>
    <li className={ LoggedIn === 'true' ? "sl-d navigation__item" : "d-none navigation__item" }> <Link to="/agents" onClick={toggleSideNav} className="navigation__link">Agents</Link> </li>

    <li className={  LoggedIn === 'true' ? "navigation__item sn-d" : "d-none navigation__item" }> <Link to="/benefits" onClick={toggleSideNav} className="navigation__link">benefits</Link> </li>
    <li className={  LoggedIn === 'true' ? "navigation__item sn-d" : "d-none navigation__item" }> <Link to="/settings/account" onClick={toggleSideNav} className="navigation__link">settings</Link> </li>
    <li className={  LoggedIn === 'true' ? " navigation__item sn-d" : "d-none navigation__item" }> <Link to="/login" onClick={toggleSideNav} className="navigation__link">Logout</Link> </li>
 
   

  </ul>

  </nav>

    
    </>
   )

 }

export default Header;