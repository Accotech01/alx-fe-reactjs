function Home() {
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
        background: 'rgba(255, 255, 255, 0.2)'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px'
        }}>Welcome to Our Company</h1>
        <p style={{
          fontSize: '24px',
          marginBottom: '40px'
        }}>We are dedicated to delivering excellence in all our services.</p>
        <button style={{
          backgroundColor: '#fff',
          color: '#3498db',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Learn More</button>
      </div>
    </div>
  );
}

export default Home;
