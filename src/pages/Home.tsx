import { Link } from 'react-router-dom';

export default function Home() {
  const styles: { [key: string]: React.CSSProperties } = {
    hero: {
      background: 'linear-gradient(135deg, #005BB5 0%, #66A3FF 100%)',
      color: 'white',
      padding: '6rem 0',
      textAlign: 'center',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      opacity: 0.95,
    },
    heroButton: {
      fontSize: '1.1rem',
      padding: '1rem 2.5rem',
      backgroundColor: '#005BB5',
      color: 'white',
      borderRadius: 'var(--border-radius)',
      textDecoration: 'none',
      fontWeight: 600,
      display: 'inline-block',
    },
    section: {
      padding: 'var(--spacing-2xl) 0',
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
      color: '#005BB5',
    },
  };

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Luniza Jewelers</h1>
          <p style={styles.heroSubtitle}>Bijoux de luxe et élégance intemporelle</p>
          <Link to="/boutique" style={styles.heroButton}>Découvrir la collection</Link>
        </div>
      </section>
      
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Nos Collections</h2>
          <p style={{textAlign: 'center', marginBottom: '2rem'}}>
            Découvrez nos bijoux raffinés et élégants
          </p>
        </div>
      </section>
    </div>
  );
}
