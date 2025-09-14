import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { getAllApiData } from "../../context/Datacontext";

const LoginPage = () => {
  const {setUserRegistrationFormData, fetchRegistrationUser } = getAllApiData();

  const [formData, setFormData] = useState({
    Mobile: "",
  });

  const handleChange = (e) => {   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("registration Data:", formData);
    setUserRegistrationFormData(formData);
    fetchRegistrationUser()
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light mt-5">
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }}>
          <Card className="p-4 shadow-lg border-0 rounded-3">
            <h3 className="text-center mb-4">Sing in</h3>
            <Form onSubmit={handleSubmit}>
             
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Phone no.</Form.Label>
                <Form.Control
                  type="number"
                  name="Mobile"
                  maxLength={10}
                  placeholder="Enter Mobile no. "
                  value={formData.Mobile}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
             
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
