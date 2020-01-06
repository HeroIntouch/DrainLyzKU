import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes/index'
import KUimg from "./Home/KUicon.png" ;
import "./Home/styleHome.scss" 
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  BreadcrumbItem
} from 'reactstrap';
import { MdMailOutline } from 'react-icons/md';
import { GoGraph } from "react-icons/go";
import { FiFlag } from "react-icons/fi";


class App extends Component {
  render() {
    return (
    <div className="basic_home">
      <Navbar light expand="md" style={{backgroundColor: "#DEFDE0" }}>
      <h3><MdMailOutline/></h3><NavbarBrand className="fontEmail">Intouch.pr@ku.th</NavbarBrand>
        <NavbarToggler/>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
          <div className="imgLogoKU">
            <img src={KUimg} />
        </div>
      </Navbar>
      
      <ol class="breadcrumb">
        <NavLink exact to="/" activeClassName="is-active">Home</NavLink>&nbsp;&nbsp;/&nbsp;&nbsp;
        <NavLink exact to="/compute" activeClassName="is-active">Compute</NavLink>&nbsp;&nbsp;/&nbsp;&nbsp;
        <NavLink exact to="/aboutus" activeClassName="is-active">About Us</NavLink>
      </ol>
      <Routing />
      </div>
      )
  }
}
export default App