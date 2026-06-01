export interface User {
  userId: number;
  username: string;
  password: string;
  role: 'utilisateur' | 'gestionnaire';
  clientId?: number;
}
