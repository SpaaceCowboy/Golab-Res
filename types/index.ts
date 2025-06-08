export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
  ingredients?: string[];
  allergens?: string[];
  spicyLevel?: number;
  dietaryInfo?: string[];
}

export interface Breakfast {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Appetizers {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Maincourse {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Iraniandishes {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Cocktails {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Pizzaa {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Burgers {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Pasta {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Desserts {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Coffeeandtea {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Softdrinks {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Salads {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Milkshakeandsmoothies {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}export interface Alchoholbottles {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}export interface Beer {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Champagne {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}
export interface Wine {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}
export interface Subcategory {
  id: number;
  name: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Staff {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
}

export interface Gallery {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  specialRequests?: string;
}