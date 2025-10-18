const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    background: 'linear-gradient(135deg, #005BB5 0%, #66A3FF 100%)', // bleu Luniza et bleu clair
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
    backgroundColor: '#005BB5', // bleu Luniza
    color: 'white',
    borderRadius: 'var(--border-radius)',
    textDecoration: 'none',
    fontWeight: 600,
  },
  section: {
    padding: 'var(--spacing-2xl) 0',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-xl)',
    color: '#005BB5', // bleu Luniza
  },
  categoryCard: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  categoryImage: {
    width: '100%',
    paddingTop: '100%',
    position: 'relative',
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    marginBottom: '1rem',
    boxShadow: '0 2px 8px rgba(0,91,181,0.3)', // ombre bleu
  },
  categoryImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  categoryName: {
    fontSize: '1.2rem',
    color: '#005BB5', // bleu Luniza
    fontWeight: 500,
  },
};
