import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainList from './Components/MainList';
import Header from './Components/Header';
import SearchList from './Components/SearchList';
import TendersResult from './Components/TendersResult';
import Tenders from './Components/Tenders';
import ListRegistry_all from './Components/ListRegistry_all';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import ListRegistry_44 from './Components/ListRegistry_44';

const setActive = ({ isActive }) =>(isActive ? " active" : "");
class App extends React.Component {
  render () {
    return (
    <>
    <Header />
    <MainList />
    <SearchList />
    <Tenders />
    
   
    {/* <Routes>
      <Route path="/home" element={<ListRegistry_all />} />
      <Route path="/link" element={<ListRegistry_44 />} />
    
    </Routes>
     */}
     
    </>
    
    
  
    
   
    
  );
  }
  
}

export default App;
