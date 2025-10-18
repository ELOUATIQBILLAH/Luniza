export default function Contact() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      paddingTop: 'var(--spacing-2xl)',
      paddingBottom: 'var(--spacing-2xl)',
      backgroundColor: '#F8FBFF',
    },
    title: {
      textAlign: 'center',
      color: '#005BB5',
      marginBottom: 'var(--spacing-2xl)',
    },
    content: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    section: {
      backgroundColor: '#E6F0FF',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginBottom: 'var(--spacing-xl)',
    },
    contactMethods: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginBottom: 'var(--spacing-xl)',
    },
    contactCard: {
      backgroundColor: '#FFFFFF',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-md)',
    },
    contactTitle: {
      color: '#005BB5',
      marginBottom: 'var(--spacing-sm)',
    },
    contactText: {
      color: '#333',
      marginBottom: 'var(--spacing-sm)',
    },
    button: {
      marginTop: 'auto',
      padding: '0.75rem 1.5rem',
      borderRadius: 'var(--border-radius)',
      backgroundColor: '#005BB5',
      color: 'white',
      textDecoration: 'none',
      fontWeight: 600,
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>Contactez-nous</h1>
        <div style={styles.content}>
          <div style={styles.contactMethods}>
            <div style={styles.contactCard}>
              <h3 style={styles.contactTitle}>📞 Téléphone</h3>
              <p style={styles.contactText}>+212 XXX-XXXXXX</p>
              <a href="tel:+212XXXXXXXXX" style={styles.button}>Appeler</a>
            </div>
            <div style={styles.contactCard}>
              <h3 style={styles.contactTitle}>✉️ Email</h3>
              <p style={styles.contactText}>contact@lunizajewelers.com</p>
              <a href="mailto:contact@lunizajewelers.com" style={styles.button}>Envoyer un email</a>
            </div>
            <div style={styles.contactCard}>
              <h3 style={styles.contactTitle}>💬 WhatsApp</h3>
              <p style={styles.contactText}>Contactez-nous sur WhatsApp</p>
              <a href="https://wa.me/212XXXXXXXXX" style={styles.button}>WhatsApp</a>
            </div>
          </div>
          <div style={styles.section}>
            <h2>Horaires d'ouverture</h2>
            <p>Lundi - Samedi: 9h00 - 19h00</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
