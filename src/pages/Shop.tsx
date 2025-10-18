const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: 'var(--spacing-xl)',
    paddingBottom: 'var(--spacing-2xl)',
    backgroundColor: '#F0F8FF', // bleu très clair pour le fond
  },
  title: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-xl)',
    color: '#003366', // bleu foncé
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: 'var(--spacing-xl)',
  },
  filterButton: {
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'white',
    color: '#003366', // texte bleu foncé
    border: '2px solid #005BB5', // bord bleu Luniza
    fontWeight: 500,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  filterButtonActive: {
    backgroundColor: '#FFD700', // doré pour sélection
    color: '#003366', // texte bleu foncé
    borderColor: '#FFD700',
  },
  empty: {
    textAlign: 'center',
    padding: 'var(--spacing-2xl)',
    color: '#005BB5', // bleu Luniza
  },
};
