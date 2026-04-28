// Backend API Service for TrustLens
// This file handles all communication with the Express backend

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

interface AuthResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    company?: string;
    role: string;
    isVerified: boolean;
  };
  message?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  company?: string;
}

interface UpdateProfileData {
  name?: string;
  company?: string;
}

// Helper function to add authorization header
const getHeaders = (token?: string): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
};

export const authAPI = {
  /**
   * Register a new user
   */
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });

    return handleResponse(response);
  },

  /**
   * Login user
   */
  login: async (credentials: LoginData): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(credentials),
    });

    return handleResponse(response);
  },

  /**
   * Get current logged-in user (protected route)
   */
  getMe: async (token: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: getHeaders(token),
    });

    return handleResponse(response);
  },

  /**
   * Logout user (protected route)
   */
  logout: async (token: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      headers: getHeaders(token),
    });

    return handleResponse(response);
  },

  /**
   * Update user profile (protected route)
   */
  updateProfile: async (
    token: string,
    userData: UpdateProfileData
  ): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/update`, {
      method: "PUT",
      headers: getHeaders(token),
      body: JSON.stringify(userData),
    });

    return handleResponse(response);
  },

  /**
   * Health check - verify backend is running
   */
  healthCheck: async (): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/health`, {
      method: "GET",
      headers: getHeaders(),
    });

    return handleResponse(response);
  },
};

export default authAPI;
