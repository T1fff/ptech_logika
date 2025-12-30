export type AuthState = {
  token: string | null;
  setToken: (t: string | null) => void;
  clear: () => void;
  isAuthenticated: () => boolean;
};


export type AuthContextType = {
  token: string | null;
  signin: (username: string, password: string) => Promise<string>;
  signout: () => Promise<void>;
  isAuthenticated: boolean;
};

export type FormValues = {
  username: string;
  password: string;
};