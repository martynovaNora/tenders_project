import React, { Component } from "react";
import { Routes, Route, Link, Layout } from 'react-router-dom';
import { Navbar, NavLink, Nav, NavDropdown, Container } from "react-bootstrap";
import ListRegistry_44 from '../Components/ListRegistry_44';
import ListRegistry_all from '../Components/ListRegistry_all';
import { connect } from "react-redux";

import './MainList.css';


class MainList extends Component {
    render () { 
        return (
            <div className="container-xxl">
              <Navbar  bg="light" expand="lg">
                    <Container>
                {/* <Navbar.Brand href="#home">Конкурсы</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/" className="nav-link">Реестр выигранных конкурсов 44-ФЗ и 223-ФЗ</Link></Nav.Link>
                    <Nav.Link><Link to="/link" className="nav-link">Общая стастика конкурсов 44-ФЗ, 223-ФЗ и коммерческие закупки
                    </Link></Nav.Link>
                    <NavDropdown title="Сохранить конкурсы" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Выигранные конкурсы</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Общая статистика конкурсов</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* <Routes>
                <Route path="/" element={<Layout />}>
                     <Route index exact component={<ListRegistry_44 />} />
                     <Route path="link" exact component={<ListRegistry_all />} />
                    
                </Route>
            </Routes> */}
                
                

            </div>
            
        )
      
    }
    
}

export default MainList;

