function About() {
  return (
    <div style={{
      padding: '20px',
      background: 'linear-gradient(to bottom, #3498db, #2ecc71)',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.2)',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px'
        }}>About Us</h1>
        <p style={{
          fontSize: '24px',
          marginBottom: '40px'
        }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      </div>
    </div>
  );
}

export default About;