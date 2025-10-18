import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const styles: { [key: string]: React.CSSProperties } = {
    card: {
      display: 'block',
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    imageContainer: {
      position: 'relative',
      paddingTop: '100%',
      overflow: 'hidden',
      backgroundColor: '#F8FBFF',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    badge: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'white',
    },
    newBadge: {
      backgroundColor: '#005BB5',
    },
    bestsellerBadge: {
      backgroundColor: '#D4AF37',
    },
    content: {
      padding: '1rem',
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#333',
      marginBottom: '0.5rem',
    },
    price: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: '#005BB5',
    },
  };

  return (
    <Link to={`/produit/${product.slug}`} style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={product.image_url} alt={product.name} style={styles.image} />
        {product.is_new && (
          <span style={{...styles.badge, ...styles.newBadge}}>Nouveau</span>
        )}
        {product.is_bestseller && (
          <span style={{...styles.badge, ...styles.bestsellerBadge}}>Best Seller</span>
        )}
      </div>
      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>{product.price} MAD</p>
      </div>
    </Link>
  );
}
