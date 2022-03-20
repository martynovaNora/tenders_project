import React, { Component } from "react";
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <div className="super-style">
      <Outlet /> 
    </div>
  );