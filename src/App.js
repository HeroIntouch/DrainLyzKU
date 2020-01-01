import React, { useState } from 'react';
import KUimg from "./Home/KUicon.png" ;
import ProblemImg from "./Home/Problem_pic.jpg" ;
import Event11Img from "./Home/Event1-1.jpg" ;
import Event12Img from "./Home/Event1-2.jpg" ;
import Event2Img from "./Home/Event2.JPG" ;
import Event3Img from "./Home/Event3.png" ;
import SciFacImg from "./Home/sci-KUicon.png" ;
import "./Home/styleHome.scss" 
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  BreadcrumbItem, 
  Card,
  Form,
  Row,
  Col,
  Container,
} from 'reactstrap';
import { MdMailOutline } from 'react-icons/md';
import { GoGraph } from "react-icons/go";
import { FiFlag } from "react-icons/fi";


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="basic_home">
      <Navbar light expand="md" style={{backgroundColor: "#DEFDE0" }}>
      <h3><MdMailOutline/></h3><NavbarBrand className="fontEmail">Intouch.pr@ku.th</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
          <div className="imgLogoKU">
            <img src={KUimg} />
        </div>
      </Navbar>
      
      <ol class="breadcrumb">
        <BreadcrumbItem tag="a" href="#" className="colorLinkKU">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#" className="colorLinkKU">Compute</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#" className="colorLinkKU">About Us</BreadcrumbItem>
      </ol>
      <h3 className="fontSci">คณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์</h3>
    <Card style={{backgroundColor: "rgb(240, 255, 241)" }}>
      <Form>
      <br/>
      <center><h3>1. วัตถุประสงค์ของโครงการ</h3></center>
      <br/>
      <div className="imgProblem">
            <img src={ProblemImg} />
        </div>
        <h5>
          <FiFlag/>
          วัตถุประสงค์ของโครงการย่อยนี้ มุ่งเน้นที่จะวิเคราะห์หาความสัมพันธ์ระหว่างปริมาณน้ำท่วมขังผิว ถนนปริมาณฝนที่ตกเพื่อประเมินความสามารถในการระบายน้ำในบริเวณที่ศึกษาเขตบางเขน
      </h5>
      </Form>
      </Card>

      <Card style={{backgroundColor: "rgb(240, 255, 241)" }}>
      <Form>
      <br/>
      <center><h3>2. กราฟความสัมพันธ์ของแต่ละสถานการณ์</h3></center>
      <br/>
        <h4 className="positionText1"><GoGraph/> สถานการณ์ที่ 1 </h4>
        <div className="positionText2">2017-08-03 (15:30:00) to 2017-08-03 (16:10:00)</div>
        
        <div className="imgProblem">
            <br/>
            <img src={Event11Img} />
              <div className="imgEvent12">
              <img src={Event12Img} />
        </div>
        </div>
        
      </Form>
      </Card>

      <Card style={{backgroundColor: "rgb(240, 255, 241)" }}>
      <Form>
      <br/>
        <h4 className="positionText1"><GoGraph/> สถานการณ์ที่ 2 </h4>
        <div className="positionText2">2017-08-14 (17:10:00) to 2017-08-14 (18:25:00)</div>
        
        <div className="imgProblem">
            <br/>
            <img src={Event2Img} />
        </div>
        
      </Form>
      </Card>

      <Card style={{backgroundColor: "rgb(240, 255, 241)" }}>
      <Form>
      <br/>
        <h4 className="positionText1"><GoGraph/> สถานการณ์ที่ 3 </h4>
        <div className="positionText2">2017-09-05 (02:50:00) to 2017-09-05 (03:55:00)</div>
        
        <div className="imgProblem">
            <br/>
            <img src={Event3Img} />
        </div>
        
      </Form>
      </Card>

      <Card style={{backgroundColor: "#DEFDE0" }}>
      <Form>
      <br/>
      <Row>

      <Col>
      <h5 className="fontSciCr">คณะวิทยาศาสตร์</h5>
      <h5 className="fontSciCr">มหาวิทยาลัยเกษตรศาสตร์</h5>
      <h6 className="fontSciAddress">ที่อยู่ : 50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10903</h6>
      <h6 className="fontSciAddress">โทรศัพท์ : 0-2562-5444 0-2562-5555</h6>
      <h6 className="fontSciAddress">โทรสาร : 0-2942-8290</h6>
      <h6 className="fontSciAddress">อีเมล์ : sci@ku.ac.th</h6>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
      <Col>
      <div className="imgSciFac">
            <img src={SciFacImg} />
        </div>
      </Col>

      </Row>
      <br/>
      </Form>
      </Card>
      

    </div>
  );
}

export default Example;