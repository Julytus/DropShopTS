import AuthApi from "./authApi";
import UserApi from "./userApi";

/**
 * API service tổng hợp
 * Tập hợp tất cả các service API để sử dụng trong ứng dụng
 */
const apiService = {
  auth: AuthApi,
  user: UserApi,
};

export default apiService;
