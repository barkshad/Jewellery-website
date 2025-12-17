export type Category = 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings' | 'Custom';

export interface Product {
  id: number;
  name: string;
  price: number; // in USD for simplicity, displayed with formatter
  category: Category;
  image: string;
  description: string;
  materials: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  location: string;
}
