import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { Product, Category, Order } from '../types';

export default function Admin() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'orders'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      paddingTop: 'var(--spacing-xl)',
      paddingBottom: 'var(--spacing-2xl)',
      backgroundColor: '#F8FBFF',
    },
    tabs: {
      display: 'flex',
      gap: '1rem',
      marginBottom: 'var(--spacing-xl)',
      borderBottom: '2px solid #005BB5',
    },
    tab: {
      padding: '1rem 2rem',
      background: 'transparent',
      border: 'none',
      borderBottom: '2px solid transparent',
      cursor: 'pointer',
      fontWeight: 500,
      marginBottom: '-2px',
    },
    activeTab: {
      borderBottomColor: '#005BB5',
      color: '#005BB5',
    },
  };

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    if (activeTab === 'products') {
      const { data } = await supabase.from('products').select('*');
      if (data) setProducts(data);
    } else if (activeTab === 'categories') {
      const { data } = await supabase.from('categories').select('*');
      if (data) setCategories(data);
    } else if (activeTab === 'orders') {
      const { data } = await supabase.from('orders').select('*');
      if (data) setOrders(data);
    }
  };

  if (!user) {
    return (
      <div className="container" style={{paddingTop: '4rem', textAlign: 'center'}}>
        <h1>Accès non autorisé</h1>
        <p>Vous devez être connecté pour accéder à cette page.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div className="container">
        <h1>Administration</h1>
        
        <div style={styles.tabs}>
          <button
            style={{...styles.tab, ...(activeTab === 'products' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('products')}
          >
            Produits
          </button>
          <button
            style={{...styles.tab, ...(activeTab === 'categories' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('categories')}
          >
            Catégories
          </button>
          <button
            style={{...styles.tab, ...(activeTab === 'orders' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('orders')}
          >
            Commandes
          </button>
        </div>

        <div>
          {activeTab === 'products' && (
            <div>
              <h2>Produits ({products.length})</h2>
              <p>Gestion des produits</p>
            </div>
          )}
          {activeTab === 'categories' && (
            <div>
              <h2>Catégories ({categories.length})</h2>
              <p>Gestion des catégories</p>
            </div>
          )}
          {activeTab === 'orders' && (
            <div>
              <h2>Commandes ({orders.length})</h2>
              <p>Gestion des commandes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
