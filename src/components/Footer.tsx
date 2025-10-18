export default function Footer() {
  const instagramUrl = 'https://www.instagram.com/luniza_jewelers/';
  const whatsappNumber = '212XXXXXXXXX';
  const email = 'contact@lunizajewelers.com';

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h3 style={styles.title}>Luniza Jewelers</h3>
            <p style={styles.description}>
              Bijoux de luxe faits à la main avec passion et élégance.
            </p>
          </div>

          <div style={styles.section}>
            <h4 style={styles.subtitle}>Navigation</h4>
            <ul style={styles.list}>
              <li><a href="/" style={styles.link}>Accueil</a></li>
              <li><a href="/boutique" style={styles.link}>Boutique</a></li>
              <li><a href="/a-propos" style={styles.link}>À propos</a></li>
              <li><a href="/contact" style={styles.link}>Contact</a></li>
            </ul>
          </div>

          <div style={styles.section}>
            <h4 style={styles.subtitle}>Nous Contacter</h4>
            <ul style={styles.list}>
              <li>
                <a href={`mailto:${email}`} style={styles.link}>
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © 2025 Luniza Jewelers. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: 'var(--color-bg-secondary)',
    marginTop: 'var(--spacing-2xl)',
    paddingTop: 'var(--spacing-2xl)',
    paddingBottom: 'var(--spacing-lg)',
    borderTop: '1px solid var(--color-border)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--spacing-xl)',
    marginBottom: 'var(--spacing-xl)',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-sm)',
  },
  title: {
    color: '#005BB5',             // ici la couleur « bleu Luniza »
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--color-text)',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  description: {
    color: 'var(--color-text-light)',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: '#005BB5',             // lien aussi en bleu pour rappel visuel
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  bottom: {
    paddingTop: 'var(--spacing-lg)',
    borderTop: '1px solid var(--color-border)',
    textAlign: 'center',
  },
  copyright: {
    color: 'var(--color-text-light)',
    fontSize: '0.9rem',
  },
};
