export interface Admin {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

export interface AdminLoginCredentials {
  username: string;
  password: string;
}

export interface AdminRegistrationData {
  username: string;
  password: string;
  email: string;
}

export interface AdminAuthResponse {
  success: boolean;
  token?: string;
  user?: {
    id: number;
    username: string;
    email: string;
  };
  error?: string;
}
