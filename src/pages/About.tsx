export default function About() {
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
      fontWeight: 700,
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'white',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #005BB5',
    },
    section: {
      marginBottom: 'var(--spacing-xl)',
    },
    list: {
      listStyle: 'none',
      paddingLeft: 0,
    }
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>À propos de Luniza Jewelers</h1>
        <div style={styles.content}>
          <div style={styles.section}>
            <h2>Notre Histoire</h2>
            <p>
              Luniza Jewelers est une marque de bijoux de luxe spécialisée dans la création
              de pièces élégantes et raffinées. Nous nous engageons à offrir des bijoux de
              haute qualité qui allient tradition et modernité.
            </p>
          </div>
          <div style={styles.section}>
            <h2>Notre Mission</h2>
            <p>
              Notre mission est de créer des bijoux exceptionnels qui célèbrent les moments
              précieux de la vie. Chaque pièce est soigneusement conçue pour refléter votre
              style unique et votre personnalité.
            </p>
          </div>
          <div style={styles.section}>
            <h2>Nos Valeurs</h2>
            <ul style={styles.list}>
              <li>✨ Excellence et qualité supérieure</li>
              <li>💎 Artisanat raffiné</li>
              <li>🤝 Service client exceptionnel</li>
              <li>🌟 Innovation et créativité</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
