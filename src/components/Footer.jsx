import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import logo from "/Img/logo.png"; 

const Footer = () => {
  return (
    <footer style={{ background: "#F4F6F8", padding: "40px 0" }}>
      <Container>
        <Row className="mb-4">
          <Col md={3} sm={6} xs={12} className="mb-3">
            <h6 className="fw-bold">About Pubali healthcare</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">About us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="mb-3">
            <h6 className="fw-bold">Book Lab Tests at Home</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Urine Culture Test</a></li>
              <li><a href="#">D Dimer Test</a></li>
              <li><a href="#">Book Lab Tests at Home</a></li>
              <li><a href="#">Hemogram Test</a></li>
              <li><a href="#">Lipid Profile Test</a></li>
              <li><a href="#">RT PCR Test At Home</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="mb-3">
            <h6 className="fw-bold">Product Most Searched</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Fertility</a></li>
              <li><a href="#">Ovulation</a></li>
              <li><a href="#">First Trimester</a></li>
              <li><a href="#">Third Trimester</a></li>
              <li><a href="#">Labour</a></li>
              <li><a href="#">Breastfeeding & Formula</a></li>
              <li><a href="#">Postpartum</a></li>
              <li><a href="#">Infant</a></li>
              <li><a href="#">Ovulation Calculator</a></li>
              <li><a href="#">Due Date Calculator</a></li>
              <li><a href="#">Preconception</a></li>
              <li><a href="#">Pregnancy</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="mb-3">
            <h6 className="fw-bold">Product Categories</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">View All Categories</a></li>
              <li><a href="#">Health Devices</a></li>
              <li><a href="#">Personal Care</a></li>
              <li><a href="#">Baby Care</a></li>
              <li><a href="#">Nutrition</a></li>
              <li><a href="#">Dolo 650</a></li>
              <li><a href="#">Beauty Skin Care</a></li>
              <li><a href="#">Immunity Boosters</a></li>
            </ul>
          </Col>
        </Row>

        <hr />

        <Row className="align-items-center">
          <Col md={6} sm={12} className="d-flex align-items-center mb-3 mb-md-0">
            <img src={logo} alt="Pubali Healthcare" width="120" className="me-3" />
            <small>© 2020 Lift Media All rights reserved.</small>
          </Col>
          <Col md={6} sm={12} className="text-md-end text-center">
            <span className="me-3 fw-bold">Find us on</span>
            <a href="#" className="me-2"><FaFacebookF /></a>
            <a href="#" className="me-2"><FaXTwitter /></a>
            <a href="#" className="me-2"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
