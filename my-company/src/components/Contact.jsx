import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333'
      }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label style={{
          display: 'block',
          marginBottom: '10px'
        }}>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
            width: '100%',
            height: '40px',
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }} />
        </label>
        <label style={{
          display: 'block',
          marginBottom: '10px'
        }}>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{
            width: '100%',
            height: '40px',
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }} />
        </label>
        <label style={{
          display: 'block',
          marginBottom: '10px'
        }}>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} style={{
            width: '100%',
            height: '100px',
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }} />
        </label>
        <button type="submit" style={{
          width: '100%',
          height: '40px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;