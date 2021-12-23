export interface Usuario {
  uid?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface AuthResponse {
  email?: string | undefined;
  ok: boolean;
  uid?: string;
  name?: string;
  token?: string;
}
