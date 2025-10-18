const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: 'var(--spacing-2xl)',
    paddingBottom: 'var(--spacing-2xl)',
    backgroundColor: '#F8FBFF', // léger bleu glacé en fond
  },
  title: {
    textAlign: 'center',
    color: '#005BB5', // Bleu Luniza
    marginBottom: 'var(--spacing-2xl)',
    fontWeight: 700,
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: 'var(--spacing-xl)',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #005BB5', // légère bordure bleue pour rappeler l’identité
  },
  section: {
    marginBottom: 'var(--spacing-xl)',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0, // <- ici tu peux garder la virgule si tu ajoutes d'autres propriétés
  }
};
