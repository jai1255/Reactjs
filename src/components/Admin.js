import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron,Form, FormGroup, Label, Input,Button } from 'reactstrap';
import Request from 'superagent';
class Admin extends Component {
 
constructor(){
  super();
  this.state = {
   
  }
}
 handleSubmit(e){
  const emp ={
       firstname :this.firstname.value,
       lastname :this.lastname.value,
       email:this.email.value,
      password:this.password.value,
      role:this.role.value
  };
  Request
      .put('http://localhost:3000/api/saveuser')
      .set('Content-Type', 'application/json')
      .send(emp)
      .end(function(err, res){
        if (err || !res.ok) {
          alert('Oh no! error');
       } else {
         alert('yay got ' + JSON.stringify(res.body));
     }
   });
e.preventDefault();
}

render() {
    
    return (
      <div className="Admin">
        <Jumbotron>
         <Form onSubmit={this.handleSubmit.bind(this)}>
         <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input type="text" name="firstname" id="firstname" getRef={(input) => (this.firstname = input)} placeholder="first name" />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last name</Label>
          <Input type="text" name="lastname" id="lastname" getRef={(input) => (this.lastname = input)} placeholder="last name" />
        </FormGroup>  
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" getRef={(input) => (this.email = input)}placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" getRef={(input) => (this.password = input)} placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label for="role">role</Label>
          <Input type="select" name="role" id="role" getRef={(input) => (this.role = input)}>
            <option>admin</option>
            <option>user</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleSubmit.bind(this)}>Create employee</Button>
        </Form>
          </Jumbotron>
      </div>
    );
  }
}

export default Admin;
            
  
         