export interface MockItem {
  id: string;
  name?: string;
  country?: string;
  image?: string;
  price?: number;
  rating?: number;
  tag?: string;
  origin?: string;
  destination?: string;
  type?: string;
  location?: string;
  airline?: string;
  date?: string;
  duration?: string;
  stops?: number;
  stars?: number;
  pricePerNight?: number;
  pricePerDay?: number;
  seats?: number;
  company?: string;
  amenities?: string[];
  features?: string[];
  processingTime?: string;
  fee?: number;
  requirements?: string[];
  role?: string;
  text?: string;
  avatarInitials?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  price: number;
  rating: number;
  tag: string;
}

export interface Flight {
  id: string;
  origin: string;
  destination: string;
  airline: string;
  date: string;
  price: number;
  duration: string;
  stops: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  stars: number;
  pricePerNight: number;
  amenities: string[];
  image: string;
}

export interface CarRental {
  id: string;
  type: string;
  company: string;
  pricePerDay: number;
  seats: number;
  features: string[];
}

export interface VisaType {
  id: string;
  country: string;
  processingTime: string;
  fee: number;
  requirements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  rating: number;
  text: string;
  avatarInitials: string;
}
