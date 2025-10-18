import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';
import { Product, Category } from '../types';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      paddingTop: 'var(--spacing-xl)',
      paddingBottom: 'var(--spacing-2xl)',
      backgroundColor: '#F0F8FF',
    },
    title: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
      color: '#003366',
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
      color: '#003366',
      border: '2px solid #005BB5',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    filterButtonActive: {
      backgroundColor: '#FFD700',
      color: '#003366',
      borderColor: '#FFD700',
    },
    empty: {
      textAlign: 'center',
      padding: 'var(--spacing-2xl)',
      color: '#005BB5',
    },
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [{ data: productsData }, { data: categoriesData }] = await Promise.all([
        supabase.from('products').select('*').order('display_order'),
        supabase.from('categories').select('*').order('display_order'),
      ]);

      if (productsData) setProducts(productsData);
      if (categoriesData) setCategories(categoriesData);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category_id === selectedCategory);

  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>Notre Boutique</h1>
        
        <div style={styles.filters}>
          <button
            style={{
              ...styles.filterButton,
              ...(selectedCategory === 'all' ? styles.filterButtonActive : {})
            }}
            onClick={() => setSelectedCategory('all')}
          >
            Tous les produits
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              style={{
                ...styles.filterButton,
                ...(selectedCategory === cat.id ? styles.filterButtonActive : {})
              }}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <p style={styles.empty}>Chargement...</p>
        ) : filteredProducts.length === 0 ? (
          <p style={styles.empty}>Aucun produit disponible</p>
        ) : (
          <div className="grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
