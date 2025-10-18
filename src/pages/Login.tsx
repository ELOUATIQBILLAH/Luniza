import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      paddingTop: 'var(--spacing-2xl)',
      paddingBottom: 'var(--spacing-2xl)',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#F0F8FF',
    },
    card: {
      maxWidth: '500px',
      width: '100%',
      backgroundColor: 'white',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 4px 12px rgba(0,91,181,0.2)',
    },
    title: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-lg)',
      color: '#005BB5',
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
      color: '#003366',
    },
    input: {
      padding: '0.75rem',
      border: '2px solid #005BB5',
      borderRadius: 'var(--border-radius)',
      fontSize: '1rem',
    },
    submitBtn: {
      marginTop: 'var(--spacing-md)',
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#005BB5',
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
      color: '#005BB5',
      textDecoration: 'underline',
      padding: 0,
      cursor: 'pointer',
      border: 'none',
    },
    error: {
      color: '#B00020',
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)',
      fontWeight: 500,
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/mon-compte');
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setError('Vérifiez votre email pour confirmer votre compte');
      }
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{isLogin ? 'Connexion' : 'Inscription'}</h1>
        
        {error && <p style={styles.error}>{error}</p>}
        
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <button type="submit" style={styles.submitBtn} disabled={loading}>
            {loading ? 'Chargement...' : (isLogin ? 'Se connecter' : 'S\'inscrire')}
          </button>
        </form>
        
        <div style={styles.toggle}>
          <button style={styles.toggleBtn} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Créer un compte' : 'Déjà un compte ? Se connecter'}
          </button>
        </div>
      </div>
    </div>
  );
}
