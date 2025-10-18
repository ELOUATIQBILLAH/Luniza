import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { Order } from '../types';

export default function Account() {
  const { user, profile, signOut } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadOrders();
    }
  }, [user]);

  const loadOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*, product:products(*)')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setOrders(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: { [key: string]: string } = {
      pending: 'En attente',
      confirmed: 'Confirmée',
      delivered: 'Livrée',
      cancelled: 'Annulée',
    };
    return labels[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      pending: '#FFA726',
      confirmed: '#005BB5',
      delivered: '#66BB6A',
      cancelled: '#EF5350',
    };
    return colors[status] || '#999';
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      paddingTop: 'var(--spacing-xl)',
      paddingBottom: 'var(--spacing-2xl)',
      backgroundColor: '#F8FBFF',
    },
    profileSection: {
      backgroundColor: 'white',
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--border-radius)',
      marginBottom: 'var(--spacing-xl)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #005BB5',
    },
    profileInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      color: '#333',
    },
    ordersSection: {
      backgroundColor: 'white',
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #005BB5',
    },
    ordersList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-md)',
    },
    orderCard: {
      padding: 'var(--spacing-md)',
      backgroundColor: '#F8FBFF',
      borderRadius: 'var(--border-radius)',
      border: '1px solid #005BB5',
    },
    orderHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--spacing-sm)',
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      color: 'white',
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    orderDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      color: '#333',
    },
    empty: {
      textAlign: 'center',
      color: '#005BB5',
      padding: 'var(--spacing-xl)',
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileSection}>
        <h2>Mon Profil</h2>
        {profile ? (
          <div style={styles.profileInfo}>
            <p><strong>Nom:</strong> {profile.firstname} {profile.lastname}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Téléphone:</strong> {profile.phone}</p>
            <button onClick={signOut} className="btn btn-secondary">
              Déconnexion
            </button>
          </div>
        ) : (
          <p>Chargement du profil...</p>
        )}
      </div>

      <div style={styles.ordersSection}>
        <h2>Mes Commandes</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : orders.length > 0 ? (
          <div style={styles.ordersList}>
            {orders.map((order) => (
              <div key={order.id} style={styles.orderCard}>
                <div style={styles.orderHeader}>
                  <span>Commande #{order.order_number}</span>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor: getStatusColor(order.status),
                    }}
                  >
                    {getStatusLabel(order.status)}
                  </span>
                </div>
                <div style={styles.orderDetails}>
                  <p><strong>Produit:</strong> {order.product_name}</p>
                  <p><strong>Quantité:</strong> {order.quantity}</p>
                  <p><strong>Total:</strong> {order.total_amount} MAD</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.empty}>Vous n'avez aucune commande pour le moment.</div>
        )}
      </div>
    </div>
  );
}
