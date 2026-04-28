import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { authAPI } from "@/lib/api";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: string;
  isVerified: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, confirmPassword: string, company?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (name?: string, company?: string) => Promise<boolean>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const TOKEN_KEY = "authToken";
const USER_KEY = "authUser";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedUser = localStorage.getItem(USER_KEY);

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      
      // Verify token is still valid
      verifyToken(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await authAPI.getMe(token);
      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem(USER_KEY, JSON.stringify(response.user));
      } else {
        // Token invalid
        clearAuth();
      }
    } catch (err) {
      console.error("Token verification failed:", err);
      clearAuth();
    } finally {
      setLoading(false);
    }
  };

  const clearAuth = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setError(null);
      const response = await authAPI.login({ email, password });

      if (response.success && response.token && response.user) {
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem(USER_KEY, JSON.stringify(response.user));
        return true;
      }

      setError(response.message || "Login failed");
      return false;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed";
      setError(errorMessage);
      return false;
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    company?: string
  ): Promise<boolean> => {
    try {
      setError(null);
      const response = await authAPI.register({
        name,
        email,
        password,
        confirmPassword,
        company,
      });

      if (response.success && response.token && response.user) {
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem(USER_KEY, JSON.stringify(response.user));
        return true;
      }

      setError(response.message || "Registration failed");
      return false;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Registration failed";
      setError(errorMessage);
      return false;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      if (token) {
        await authAPI.logout(token);
      }
      clearAuth();
    } catch (err) {
      console.error("Logout error:", err);
      // Still clear auth even if API call fails
      clearAuth();
    }
  };

  const updateProfile = async (name?: string, company?: string): Promise<boolean> => {
    try {
      setError(null);

      if (!token) {
        setError("Not authenticated");
        return false;
      }

      const response = await authAPI.updateProfile(token, { name, company });

      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem(USER_KEY, JSON.stringify(response.user));
        return true;
      }

      setError(response.message || "Profile update failed");
      return false;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Profile update failed";
      setError(errorMessage);
      return false;
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
        updateProfile,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthBackend() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthBackend must be used within AuthProvider");
  return ctx;
}
