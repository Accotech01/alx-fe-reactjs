function Services() {
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
        }}>Our Services</h1>
        <ul style={{
          listStyle: 'none',
          padding: '0',
          margin: '0'
        }}>
          <li style={{
            fontSize: '24px',
            marginBottom: '20px',
            padding: '10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>Technology Consulting</li>
          <li style={{
            fontSize: '24px',
            marginBottom: '20px',
            padding: '10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>Market Analysis</li>
          <li style={{
            fontSize: '24px',
            marginBottom: '20px',
            padding: '10px'
          }}>Product Development</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;