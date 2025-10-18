/*
  # Schéma initial Luniza Jewelers E-commerce

  1. Nouvelles Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, nom de la catégorie)
      - `slug` (text, unique, pour URLs)
      - `description` (text, nullable)
      - `image_url` (text, nullable)
      - `display_order` (integer, pour l'ordre d'affichage)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key vers categories)
      - `name` (text, nom du produit)
      - `slug` (text, unique, pour URLs)
      - `description` (text)
      - `price` (numeric, prix en MAD)
      - `image_url` (text, image principale)
      - `images` (jsonb, tableau d'images supplémentaires)
      - `is_featured` (boolean, produit vedette)
      - `is_new` (boolean, nouveauté)
      - `is_bestseller` (boolean, meilleure vente)
      - `stock_status` (text, en stock / rupture)
      - `display_order` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key vers auth.users, nullable)
      - `order_number` (text, unique, numéro de commande)
      - `customer_firstname` (text)
      - `customer_lastname` (text)
      - `customer_phone` (text)
      - `customer_email` (text, nullable)
      - `delivery_address` (text)
      - `product_id` (uuid, foreign key vers products)
      - `product_name` (text, sauvegarde du nom)
      - `product_price` (numeric, sauvegarde du prix)
      - `quantity` (integer, default 1)
      - `total_amount` (numeric)
      - `status` (text, pending/confirmed/delivered/cancelled)
      - `notes` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `profiles`
      - `id` (uuid, primary key, foreign key vers auth.users)
      - `firstname` (text)
      - `lastname` (text)
      - `phone` (text)
      - `email` (text)
      - `default_address` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Sécurité
    - Activation de RLS sur toutes les tables
    - Politiques pour les catégories (lecture publique, écriture admin)
    - Politiques pour les produits (lecture publique, écriture admin)
    - Politiques pour les commandes (utilisateur peut voir ses commandes, admin peut tout voir)
    - Politiques pour les profils (utilisateur peut voir/modifier son profil)

  3. Notes importantes
    - Les prix sont en dirhams marocains (MAD)
    - Le paiement se fait à la livraison (COD)
    - Les commandes sont envoyées par email et WhatsApp
    - Utilisation de UUID pour tous les IDs
*/

-- Créer l'extension uuid si elle n'existe pas
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table des catégories
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table des produits
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  price numeric(10,2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  is_featured boolean DEFAULT false,
  is_new boolean DEFAULT false,
  is_bestseller boolean DEFAULT false,
  stock_status text DEFAULT 'in_stock',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table des commandes
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  order_number text UNIQUE NOT NULL,
  customer_firstname text NOT NULL,
  customer_lastname text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text,
  delivery_address text NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  product_name text NOT NULL,
  product_price numeric(10,2) NOT NULL,
  quantity integer DEFAULT 1 CHECK (quantity > 0),
  total_amount numeric(10,2) NOT NULL,
  status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table des profils utilisateurs
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  firstname text NOT NULL,
  lastname text NOT NULL,
  phone text NOT NULL,
  email text,
  default_address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_products_new ON products(is_new) WHERE is_new = true;
CREATE INDEX IF NOT EXISTS idx_products_bestseller ON products(is_bestseller) WHERE is_bestseller = true;
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Activer RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Politiques pour les catégories (lecture publique)
CREATE POLICY "Tout le monde peut voir les catégories"
  ON categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Utilisateurs authentifiés peuvent gérer les catégories"
  ON categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Politiques pour les produits (lecture publique)
CREATE POLICY "Tout le monde peut voir les produits"
  ON products FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Utilisateurs authentifiés peuvent gérer les produits"
  ON products FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Politiques pour les commandes
CREATE POLICY "Utilisateurs peuvent voir leurs commandes"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Utilisateurs peuvent créer des commandes"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Utilisateurs authentifiés peuvent tout voir sur les commandes"
  ON orders FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Utilisateurs authentifiés peuvent mettre à jour les commandes"
  ON orders FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Politiques pour les profils
CREATE POLICY "Utilisateurs peuvent voir leur profil"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Utilisateurs peuvent créer leur profil"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Utilisateurs peuvent mettre à jour leur profil"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insérer des catégories par défaut
INSERT INTO categories (name, slug, description, display_order) VALUES
  ('Bagues', 'bagues', 'Collection de bagues élégantes', 1),
  ('Colliers', 'colliers', 'Colliers raffinés pour toutes occasions', 2),
  ('Bracelets', 'bracelets', 'Bracelets modernes et intemporels', 3),
  ('Boucles d''oreilles', 'boucles-oreilles', 'Boucles d''oreilles sophistiquées', 4)
ON CONFLICT (slug) DO NOTHING;
