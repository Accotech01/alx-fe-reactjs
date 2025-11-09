import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'right'
    }}>
      <Link to="/" style={{
        color: '#fff',
        margin: '10px',
        textDecoration: 'none'
      }}>Home</Link>
      <Link to="/about" style={{
        color: '#fff',
        margin: '10px',
        textDecoration: 'none'
      }}>About</Link>
      <Link to="/services" style={{
        color: '#fff',
        margin: '10px',
        textDecoration: 'none'
      }}>Services</Link>
      <Link to="/contact" style={{
        color: '#fff',
        margin: '10px',
        textDecoration: 'none'
      }}>Contact</Link>
    </nav>
  );
};

export default Navbar;