const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: 'var(--spacing-xl)',
    paddingBottom: 'var(--spacing-2xl)',
    backgroundColor: '#F8FBFF', // fond léger bleu Luniza
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: 'var(--spacing-xl)',
    borderBottom: '2px solid #005BB5',
  },
  tab: {
    padding: '1rem 2rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontWeight: 500,
    marginBottom: '-2px',
  },
  activeTab: {
    borderBottomColor: '#005BB5',
    color: '#005BB5',
  },
  form: {
    backgroundColor: '#E6F0FF', // bleu très clair pour les formulaires
    padding: 'var(--spacing-lg)',
    borderRadius: 'var(--border-radius)',
    marginBottom: 'var(--spacing-xl)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    border: '1px solid #005BB5',
  },
  input: {
    padding: '0.75rem',
    border: '2px solid #005BB5',
    borderRadius: 'var(--border-radius)',
    fontSize: '1rem',
  },
  editBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#005BB5',
    color: 'white',
    borderRadius: 'var(--border-radius)',
  },
  deleteBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#EF5350', // rouge pour supprimer
    color: 'white',
    borderRadius: 'var(--border-radius)',
  },
  orderCard: {
    padding: 'var(--spacing-lg)',
    backgroundColor: '#F8FBFF',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};
