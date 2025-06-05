import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem('token') || null);
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(atob(base64));
            } catch {
                return null;
            }
        }
        return null;
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const parseJwt = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(atob(base64));
        } catch (err) {
            return null;
        }
    };

    const isTokenExpired = (token) => {
        if (!token) return true;
        const decoded = parseJwt(token);
        if (!decoded?.exp) return true;
        const now = Date.now() / 1000;
        return decoded.exp < now;
    };

    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem("token");

            if (token && !isTokenExpired(token)) {
                setAccessToken(token);
                setUser(parseJwt(token));
                setLoading(false);
            } else {
                try {
                    const refreshToken = localStorage.getItem("refreshToken");
                    if (!refreshToken) throw new Error("No refresh token found");

                    const res = await api.post("/auth/refresh-token", { refreshToken });
                    const newToken = res.data.accessToken;
                    setAccessToken(newToken);
                    localStorage.setItem("token", newToken);
                    const userInfo = parseJwt(newToken);
                    setUser(userInfo);
                } catch (error) {
                    setError("Session expired. Please login again.");
                    setAccessToken(null);
                    setUser(null);
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                } finally {
                    setLoading(false);
                }
            }
        };

        initAuth();
    }, []);

    const register = async (name, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const res = await api.post('/auth/register', { name, email, password });
            const token = res.data.accessToken;
            const refreshToken = res.data.refreshToken;
            setAccessToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            setUser(parseJwt(token));
            return true;
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const res = await api.post("/auth/login", { email, password });
            const token = res.data.accessToken;
            const refreshToken = res.data.refreshToken;
            setAccessToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            setUser(parseJwt(token));
        } catch (err) {
            setError(err?.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout");
        } catch (error) {
            setError("Logout failed. Please try again.");
        } finally {
            setAccessToken(null);
            setUser(null);
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        }
    };

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                user,
                login,
                logout,
                isAuthenticated: !!user,
                loading,
                error,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
