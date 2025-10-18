export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  category_id?: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url: string;
  images: string[];
  is_featured: boolean;
  is_new: boolean;
  is_bestseller: boolean;
  stock_status: string;
  display_order: number;
  created_at: string;
  updated_at: string;
  category?: Category;
}

export interface Order {
  id: string;
  user_id?: string;
  order_number: string;
  customer_firstname: string;
  customer_lastname: string;
  customer_phone: string;
  customer_email?: string;
  delivery_address: string;
  product_id?: string;
  product_name: string;
  product_price: number;
  quantity: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  notes?: string;
  created_at: string;
  updated_at: string;
  product?: Product;
}

export interface Profile {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email?: string;
  default_address?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderFormData {
  firstname: string;
  lastname: string;
  phone: string;
  address: string;
}
