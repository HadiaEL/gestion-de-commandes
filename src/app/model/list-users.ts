import { User } from './user.model';

export const USERS: User[] = [
  { userId: 1, username: 'admin',  password: 'admin123',  role: 'gestionnaire' },
  { userId: 2, username: 'alice',  password: 'alice123',  role: 'utilisateur', clientId: 1 },
  { userId: 3, username: 'bob',    password: 'bob123',    role: 'utilisateur', clientId: 2 },
  { userId: 4, username: 'claire', password: 'claire123', role: 'utilisateur', clientId: 3 },
  { userId: 5, username: 'david',  password: 'david123',  role: 'utilisateur', clientId: 4 },
  { userId: 6, username: 'emma',   password: 'emma123',   role: 'utilisateur', clientId: 5 },
];
