import axiosInstance from "../utils/axios-customize";
import { ResponseData, UserResponse, UpdateUserRequest } from "../types";


export class UserApi {

  static fetchProfile = async (): Promise<UserResponse> => {
    const response = await axiosInstance.get<ResponseData<UserResponse>>('/user');
    return response.data.data;
  };

  static updateProfile = async (data: Partial<UserResponse> | UpdateUserRequest): Promise<UserResponse> => {
    const response = await axiosInstance.put<ResponseData<UserResponse>>('/user', data);
    return response.data.data;
  };

  static changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
    await axiosInstance.put<ResponseData<void>>('/user/password', {
      old_password: oldPassword,
      new_password: newPassword
    });
  };

  static updateAvatar = async (file: File): Promise<UserResponse> => {
    const formData = new FormData();
    formData.append('avatar', file);
    
    const response = await axiosInstance.put<ResponseData<UserResponse>>(
      '/user/avatar',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    
    return response.data.data;
  };
}

export default UserApi; 