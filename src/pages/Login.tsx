const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: 'var(--spacing-2xl)',
    paddingBottom: 'var(--spacing-2xl)',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF', // fond léger bleu
  },
  card: {
    maxWidth: '500px',
    width: '100%',
    backgroundColor: 'white',
    padding: 'var(--spacing-xl)',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 4px 12px rgba(0,91,181,0.2)', // ombre bleu
  },
  title: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-lg)',
    color: '#005BB5', // bleu Luniza
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontWeight: 500,
    color: '#003366', // bleu foncé
  },
  input: {
    padding: '0.75rem',
    border: '2px solid #005BB5', // bleu Luniza
    borderRadius: 'var(--border-radius)',
    fontSize: '1rem',
  },
  submitBtn: {
    marginTop: 'var(--spacing-md)',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#005BB5', // bleu Luniza
    color: 'white',
    fontWeight: 600,
    border: 'none',
    borderRadius: 'var(--border-radius)',
    cursor: 'pointer',
  },
  toggle: {
    marginTop: 'var(--spacing-lg)',
    textAlign: 'center',
  },
  toggleBtn: {
    background: 'transparent',
    color: '#005BB5', // bleu Luniza
    textDecoration: 'underline',
    padding: 0,
    cursor: 'pointer',
  },
  error: {
    color: '#B00020', // rouge clair pour erreur
    textAlign: 'center',
    marginBottom: 'var(--spacing-md)',
    fontWeight: 500,
  },
};
