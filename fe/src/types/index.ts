export * from './requests';
export * from './responses';

export enum LoadingStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

export enum PaymentMethod {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
  BANK_TRANSFER = 'BANK_TRANSFER'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

// Định nghĩa các kiểu state trong Redux/Context
export interface AuthState {
  user: UserState | null;
  status: LoadingStatus;
  error: string | null;
}

export interface UserState {
  id: string;
  full_name: string;
  email: string;
  phone_number: string | null;
  avatar_url: string | null;
  role: string;
  token: string | null;
} 