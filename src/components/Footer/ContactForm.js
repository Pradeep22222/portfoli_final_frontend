import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
 import {  toast } from "react-toastify";
import { useState } from "react";
import {
  postAPIMessages,
} from "../../helpers/axiosHelper.js";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};
export const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postAPIMessages(form);
    const { status, message } = result;
    console.log(result.message);
    setForm(initialState);
    toast[status](message)
  };
  return (
    <div>
      <Form className="mt-3" onSubmit={handleOnSubmit}>
        <Form.Text className="text-muted">Your details are kept safe</Form.Text>
        <Row>
          <Col md={1} sm={0}></Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicfirstName">
              <Form.Label className="required"> First Name</Form.Label>
              <Form.Control
                className="text-center"
                type="text"
                placeholder="First Name"
                required
                name="firstName"
                onChange={handleOnChange}
                value={form.firstName}
              />
            </Form.Group>
          </Col>

          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasiclastName">
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                className="text-center"
                name="lastName"
                onChange={handleOnChange}
                value={form.lastName}
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicemail">
              <Form.Label className="required">Email Address</Form.Label>
              <Form.Control
                className="text-center"
                type="email"
                placeholder="example@mail.com"
                required
                name="email"
                onChange={handleOnChange}
                value={form.email}
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={5}>
            <Form.Group className="mb-3" controlId="formBasicphone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="text-center"
                type="number"
                placeholder="Phone Number"
                name="phone"
                onChange={handleOnChange}
                value={form.phone}
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>
          <Col sm={12} md={10}>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label className="required">Message</Form.Label>
              <Form.Control
                className="text-center"
                as="textarea"
                placeholder="Leave your message here please"
                rows={3}
                required
                name="message"
                onChange={handleOnChange}
                value={form.message}
              />
            </Form.Group>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={1} sm={0}></Col>
          <Col sm={12} md={10}>
            <Button id="message_button" variant="none" type="submit">
              Send
            </Button>
          </Col>
          <Col md={1} sm={0}></Col>
        </Row>
      </Form>
    </div>
  );
};
