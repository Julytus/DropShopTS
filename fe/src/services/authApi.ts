import axiosInstance from "../utils/axios-customize";
import { ResponseData, UserResponse, SignInRequest, SignInResponse, SignUpRequest, RefreshTokenResponse } from "../types";

/**
 * Class quản lý các API liên quan đến authentication
 */
export class AuthApi {
  static login = async (data: SignInRequest): Promise<SignInResponse> => {
    const response = await axiosInstance.post<ResponseData<SignInResponse>>('/auth/login', data);
    localStorage.setItem('access_token', response.data.data.access_token);
    return response.data.data;
  };

  static register = async (data: SignUpRequest): Promise<UserResponse> => {
    const response = await axiosInstance.post<ResponseData<UserResponse>>('/auth/register', data);
    return response.data.data;
  };

  static logout = async (): Promise<void> => {
    const token = localStorage.getItem('access_token');
    if (token) {
      await axiosInstance.post('/auth/logout', { accessToken: token });
      localStorage.removeItem('access_token');
    }
  };

  static refreshToken = async (): Promise<RefreshTokenResponse> => {
    const response = await axiosInstance.post<ResponseData<RefreshTokenResponse>>(
      '/auth/refresh-token',
      {},
      { withCredentials: true }
    );
    return response.data.data;
  };
}

export default AuthApi; 