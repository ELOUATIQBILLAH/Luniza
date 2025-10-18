import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>
          <h1 style={styles.logoText}>Luniza Jewelers</h1>
        </Link>

        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Accueil</Link>
          <Link to="/boutique" style={styles.navLink}>Boutique</Link>
          <Link to="/a-propos" style={styles.navLink}>À propos</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
          {user ? (
            <>
              <Link to="/mon-compte" style={styles.navLink}>Mon Compte</Link>
              <button onClick={handleSignOut} style={styles.navButton}>
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/connexion" style={styles.navLink}>Connexion</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: 'white', // on peut aussi mettre un blanc cassé ou doré si tu veux un style plus luxe
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
  },
  logo: {
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: '#005BB5',  // 💙 Bleu Luniza
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    color: '#005BB5',  // 💙 Liens en bleu
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
  navButton: {
    background: 'transparent',
    color: '#005BB5',  // 💙 Bouton en bleu aussi
    padding: '0',
    fontWeight: 500,
  },
};
