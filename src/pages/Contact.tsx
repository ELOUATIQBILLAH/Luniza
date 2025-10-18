const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: 'var(--spacing-2xl)',
    paddingBottom: 'var(--spacing-2xl)',
    backgroundColor: '#F8FBFF', // fond très clair bleu Luniza
  },
  title: {
    textAlign: 'center',
    color: '#005BB5', // bleu Luniza
    marginBottom: 'var(--spacing-2xl)',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  section: {
    backgroundColor: '#E6F0FF', // bleu clair pour les sections
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
    backgroundColor: '#FFFFFF', // blanc pour chaque carte
    padding: 'var(--spacing-xl)',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
  },
  contactTitle: {
    color: '#005BB5', // bleu Luniza
    marginBottom: 'var(--spacing-sm)',
  },
  contactText: {
    color: '#333', // texte gris foncé
    marginBottom: 'var(--spacing-sm)',
  },
  button: {
    marginTop: 'auto',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--border-radius)',
    backgroundColor: '#005BB5', // bleu Luniza
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
