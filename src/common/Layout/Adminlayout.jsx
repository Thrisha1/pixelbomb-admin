import React from 'react';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import Nav from '../components/nav/Nav.jsx';

function Adminlayout() {
  return (
    <div className="main d-flex">
        <Sidebar/>
        <Nav/>
    </div>
  );
}

export default Adminlayout;