const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: 'var(--spacing-xl)',
    paddingBottom: 'var(--spacing-2xl)',
  },
  successMessage: {
    marginBottom: 'var(--spacing-lg)',
    padding: 'var(--spacing-lg)',
    textAlign: 'center',
    backgroundColor: '#DFF6FF', // bleu clair
    color: '#005BB5', // bleu Luniza
    borderRadius: 'var(--border-radius)',
  },
  productLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--spacing-2xl)',
  },
  imageSection: {
    position: 'sticky',
    top: '100px',
    height: 'fit-content',
  },
  mainImage: {
    width: '100%',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 4px 12px rgba(0,91,181,0.2)', // ombre bleu Luniza
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-lg)',
  },
  productName: {
    fontSize: '2.5rem',
    marginBottom: '0',
    color: '#003366', // bleu foncé
  },
  price: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#005BB5', // bleu Luniza
  },
  description: {
    lineHeight: '1.8',
    color: '#333',
  },
  badges: {
    display: 'flex',
    gap: '0.5rem',
  },
  badge: {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 600,
    backgroundColor: '#FFD700', // doré pour accent
    color: '#003366', 
  },
  orderButton: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.1rem',
    backgroundColor: '#005BB5', 
    color: 'white',
    border: 'none',
    borderRadius: 'var(--border-radius)',
    cursor: 'pointer',
  },
  form: {
    backgroundColor: '#F0F8FF', // bleu clair
    padding: 'var(--spacing-lg)',
    borderRadius: 'var(--border-radius)',
  },
  formTitle: {
    marginBottom: 'var(--spacing-md)',
    color: '#005BB5',
  },
  formGroup: {
    marginBottom: 'var(--spacing-md)',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 500,
    color: '#003366',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #005BB5',
    borderRadius: 'var(--border-radius)',
    fontSize: '1rem',
  },
  textarea: {
    resize: 'vertical',
  },
  error: {
    color: '#B00020', 
    fontSize: '0.85rem',
    marginTop: '0.25rem',
    display: 'block',
  },
  codInfo: {
    padding: 'var(--spacing-sm)',
    backgroundColor: '#005BB5',
    color: 'white',
    borderRadius: 'var(--border-radius)',
    textAlign: 'center',
    fontWeight: 500,
  },
  formButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: 'var(--spacing-md)',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#005BB5',
    color: 'white',
    borderRadius: 'var(--border-radius)',
    padding: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
