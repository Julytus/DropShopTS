/**
 * Interfaces cho các request gửi lên backend
 */

export interface AddressRequest {
  country: string;
  street: string;
  city: string;
  district: string;
  number: string;
  zip: string;
}

export interface CartItem {
  productId: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CategoryRequest {
  name: string;
  description?: string;
}

export interface ColorRequest {
  name: string;
  colorCode: string;
}

export interface LogoutRequest {
  accessToken: string;
}

export interface OrderRequest {
  cartItems: CartItem[];
  addressRequest: AddressRequest;
  emailAddress: string;
  phoneNumber: string;
  orderNotes?: string;
  status?: string;
  token?: string;
}

export interface ProductDetailRequest {
  colorIds: string[];
  sizeIds: string[];
  description: string;
  thumbnails: File[];
}

export interface ProductRequest {
  name: string;
  categoryId: string;
  price: number;
  primaryImage: File;
}


export interface SignInRequest {
  email: string;
  password: string;
}


export interface SignUpRequest {
  email: string;
  password: string;
  full_name: string;
}


export interface SizeRequest {
  name: string;
}


export interface UpdateUserRequest {
  phone_number?: string;
  birthday?: string; // Format: yyyy-MM-dd
}

