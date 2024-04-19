export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type User = Record<UserRole, string>;

export const RoleDescription: User = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};