import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
/*import logo اى اسم فاريبل from "../src/image/logo.png";*/
export default class Navbar extends Component {
    state = {  }
    render() { 
        return (

            <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  {/*<a className="navbar-brand" href="/">
  <img src={logo} width="60" height="20" />
  </a>
        */}
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item  ">
        <NavLink className="nav-link " to="/home">Home </NavLink>
      </li>
     
      <li className="nav-item  ">
        <NavLink className="nav-link " to="/movie">movie </NavLink>
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link " to="/tv">tv </NavLink>
      </li>
     </ul>


      {/*   registration form and login   */ }              

     <ul className=" navbar-nav m-auto py-1" > 
      <li className="nav-item ">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>


      <li className="nav-item ">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      
    </ul>
    
</nav>



            </>          
            );
    }
}
 





