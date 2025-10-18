import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Product } from '../types';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      paddingTop: 'var(--spacing-xl)',
      paddingBottom: 'var(--spacing-2xl)',
    },
    productLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-2xl)',
    },
    mainImage: {
      width: '100%',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 4px 12px rgba(0,91,181,0.2)',
    },
    productName: {
      fontSize: '2.5rem',
      marginBottom: '0',
      color: '#003366',
    },
    price: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#005BB5',
    },
    description: {
      lineHeight: '1.8',
      color: '#333',
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
  };

  useEffect(() => {
    loadProduct();
  }, [slug]);

  const loadProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container" style={styles.container}>
        <p>Chargement...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container" style={styles.container}>
        <h1>Produit non trouvé</h1>
      </div>
    );
  }

  return (
    <div className="container" style={styles.container}>
      <div style={styles.productLayout}>
        <div>
          <img src={product.image_url} alt={product.name} style={styles.mainImage} />
        </div>
        
        <div>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.price}>{product.price} MAD</p>
          <p style={styles.description}>{product.description}</p>
          
          <button
            style={styles.orderButton}
            onClick={() => setShowOrderForm(!showOrderForm)}
          >
            {showOrderForm ? 'Annuler' : 'Commander'}
          </button>
          
          {showOrderForm && (
            <div style={{marginTop: '2rem'}}>
              <p>Formulaire de commande (à implémenter)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
