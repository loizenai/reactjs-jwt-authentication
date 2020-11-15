import AppNavbar from './AppNavbar';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: ""
    }
  }

  componentDidMount() {
    BackendService.getAdminBoard()
      .then( response => {
        this.setState({
          content: response.data
        })
      } , error => {
        console.log(error);
        this.setState({
          error: error.toString()
        }); 
      });    
  }

  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          {
            this.state.content ? (
              <div style={{marginTop: "20px"}}>
                <Alert variant="info">
                  <h2>{this.state.content}</h2>
                </Alert>
              </div>
            ) : (
              <div style={{marginTop: "20px"}}>
                <Alert variant="danger">
                  {this.state.error}
                </Alert>
              </div>
            )
          }
        </Container>
      </div>
    );
  }
}

export default AdminPage;