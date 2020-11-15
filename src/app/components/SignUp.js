import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { Alert } from "react-bootstrap"

import Authentication from '../services/AuthenticationService'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false,
      validForm: true,
      errors: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
      }
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
  
    let errors = this.state.errors;

    switch (name) {
      case 'firstname':
        errors.firstname = 
          value.length < 3
            ? 'FirstName must be 3 characters long!'
            : '';
        break;
      case 'lastname':
        errors.lastname = 
          value.length < 3
            ? 'LastName must be 3 characters long!'
            : '';
        break;
      case 'username':
        errors.username = 
          value.length < 5
            ? 'Username must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })  
  }

  signUp = (e) => {
    e.preventDefault();
    const valid = validateForm(this.state.errors);
    this.setState({validForm: valid});
    if(valid){
      Authentication.register(
        this.state.firstname,
        this.state.lastname,
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          console.log("Fail! Error = " + error.toString());
          
          this.setState({
            successful: false,
            message: error.toString()
          });
        }
      );  
    }
  }

  render() {
    const title = <h2>Register User</h2>;
    const errors = this.state.errors;

    let alert = "";

    if(this.state.message){
      if(this.state.successful){
        alert = (
                  <Alert variant="success">
                    {this.state.message}
                  </Alert>
                );
      }else{
        alert = (
                  <Alert variant="danger">
                    {this.state.message}
                  </Alert>
                );
      }
    }

    return ( 
      <div>
        <AppNavbar/>
        <Container fluid>
          <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
          {title}
            <Form onSubmit={this.signUp}>
              <FormGroup controlId="forFirstname">
                <Label for="firstname">First Name</Label>
                <Input
                  type="text" 
                  placeholder="Enter First Name"
                  name="firstname" id="firstname"
                  value={this.state.firstname}
                  autoComplete="firstname"
                  onChange={this.changeHandler}
                />
                {
                  errors.firstname && ( 
                      <Alert variant="danger">
                        {errors.firstname}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forLastname">
                <Label for="lastname">Last Name</Label>
                <Input
                  type="text" 
                  placeholder="Enter Last Name"
                  name="lastname" id="lastname"
                  value={this.state.lastname}
                  autoComplete="lastname"
                  onChange={this.changeHandler}
                />
                {
                  errors.lastname && ( 
                      <Alert variant="danger">
                        {errors.firstname}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forUsername">
                <Label for="username">Username</Label>
                <Input
                  type="text" 
                  placeholder="Enter UserName"
                  name="username" id="username"
                  value={this.state.username}
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
                {
                  errors.username && ( 
                      <Alert variant="danger">
                        {errors.username}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="formEmail">
                <Label for="email">Email</Label>
                <Input required
                  type="text" 
                  placeholder="Enter Email"
                  name="email" id="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.changeHandler}
                />
                {
                  errors.email && ( 
                      <Alert variant="danger">
                        {errors.email}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="formPassword">
                <Label for="password">Password</Label>
                <Input required 
                  type="password" 
                  placeholder="Enter Password"
                  name="password" id="password"
                  value={this.state.password}
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
                {
                  errors.password && ( 
                      <Alert key="errorspassword" variant="danger">
                        {errors.password}
                      </Alert>
                    )
                }
              </FormGroup>

              <Button variant="primary" type="submit">
                Create
              </Button>
              {
                !this.state.validForm && (
                  <Alert key="validForm" variant="danger">
                    Please check the inputs again!
                  </Alert>
                )
              }

              {alert}
            </Form>
            </Col>
          </Row>
        </Container>
      </div>);
  }
}

export default SignUp;