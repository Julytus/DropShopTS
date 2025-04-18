/**
 * Interfaces cho các response từ backend
 */

export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export interface PageResponse<T> {
  current_page: number;
  total_pages: number;
  page_size: number;
  total_elements: number;
  data: T[];
}

export interface ProductDetailResponse {
  colors: string[];
  sizes: string[];
  description: string;
  star: number;
  thumbnail: string[];
}

export interface ProductResponse {
  id: string;
  name: string;
  category: string;
  image_url: string;
  price: number;
}

export interface RefreshTokenResponse {
  user_id: string;
  access_token: string;
}

export interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  user_id: string;
}

export interface UserResponse {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  avatar_url: string;
  role: string;
}

// Response đầy đủ cho sản phẩm (kết hợp ProductResponse và ProductDetailResponse)
export interface FullProductResponse extends ProductResponse, ProductDetailResponse {}

export interface OrderResponse {
  id: string;
  items: OrderItemResponse[];
  email_address: string;
  phone_number: string;
  address: {
    country: string;
    street: string;
    city: string;
    district: string;
    number: string;
    zip: string;
  };
  status: string;
  total_price: number;
  created_at: string;
  updated_at: string;
}

export interface OrderItemResponse {
  product_id: string;
  product_name: string;
  image_url: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface CategoryResponse {
  id: string;
  name: string;
  description?: string;
}

export interface ColorResponse {
  id: string;
  name: string;
  color_code: string;
}

export interface SizeResponse {
  id: string;
  name: string;
}
