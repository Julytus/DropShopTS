import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RefreshTokenResponse, ResponseData } from "../types";

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
  headers: any;
}

const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8088",
    headers: {
        'Content-Type': 'application/json',
    }
});

let isRefreshing: boolean = false;

interface QueueItem {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: any) => void;
}
let failedQueue: QueueItem[] = [];

const processQueue = (error: any, token: string | null = null): void => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });
  
  failedQueue = [];
};

const handleRefreshToken = async (): Promise<string | null> => {
    try {
        const response: AxiosResponse<ResponseData<RefreshTokenResponse>> = await axios.post(
            `${import.meta.env.VITE_API_URL || "http://localhost:8088"}/auth/refresh-token`,
            {},
            { withCredentials: true }
        );

        if (response.data && response.data.data) {
            const { access_token } = response.data.data;
            localStorage.setItem('access_token', access_token);
            return access_token;
        }
        return null;
    } catch (error) {
        console.error('Error refreshing token:', error);
        localStorage.removeItem('access_token');
        window.location.href = '/sign-in';
        throw error;
    }
};

// Request interceptor for adding token
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = localStorage.getItem('access_token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any): Promise<never> => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling token expiration
instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    async (error: any): Promise<any> => {
        const originalRequest: ExtendedAxiosRequestConfig = error.config;
        
        // Prevent infinite loops
        if (originalRequest._retry) {
            return Promise.reject(error);
        }

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // If refresh is in progress, add the failed request to queue
                return new Promise<string>((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers['Authorization'] = `Bearer ${token}`;
                        return instance(originalRequest);
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const newToken = await handleRefreshToken();
                if (newToken) {
                    // Process any requests in the queue
                    processQueue(null, newToken);
                    // Update the auth header and retry the original request
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return instance(originalRequest);
                }
            } catch (refreshError) {
                processQueue(refreshError, null);
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default instance; 