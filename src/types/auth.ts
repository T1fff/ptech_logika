export type AuthState = {
  token: string | null;
  setToken: (t: string | null) => void;
  clear: () => void;
  isAuthenticated: () => boolean;
};

export type LoginResponse = { token: string };

export type AuthContextType = {
  token: string | null;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  isAuthenticated: boolean;
};