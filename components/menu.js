/* Imporando basicos from react*/
import React from 'react';
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

/*Classe principal com construtor*/
class Menu extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        comments: []
    };
  }
  
  render() {
  /* O que vai ser renderizado quando a função for chamada*/
        return (
          <Navbar bg="dark" variant="dark" sticky="top" >
            <LinkContainer to ="/">
              <Navbar.Brand href="/">[CC1] Parcial 2 - Juan</Navbar.Brand>
            </LinkContainer>
            <Nav  className="mr-auto">
              <LinkContainer to ="/">
                <NavLink>Home</NavLink>
              </LinkContainer>
              
              <NavDropdown title="Produtos" id="basic-nav-dropdown">
                <LinkContainer to ="/java">
                  <NavDropdown.Item>Java</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to ="/js">
                  <NavDropdown.Item>JS</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to ="/php">
                  <NavDropdown.Item>PHP</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to ="/csharp">
                  <NavDropdown.Item>C#</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to ="/about">
                  <NavDropdown.Item>Sobre</NavDropdown.Item>
                </LinkContainer>
                
              </NavDropdown>
            </Nav>
          </Navbar>
        );
  }
}
  function Menu() {
    /*Função que insere a classe anterior em uma div*/
  return (
  <div className="Menu">
    <Menu/>
    
 </div>
  );
}

export default Menu; /* O que esse arquivo vai retornar quando chamado, no caso a classe Menu*/
