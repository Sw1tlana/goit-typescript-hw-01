type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export function createOrUpdateUser <T extends Partial<User>>(initialValues: T): User {
    const existingUser: User = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    password: 'oldPassword',
    };
      function updateUser(existing: User, newValues: Partial<User>): User {
    return { ...existing, ...newValues };
  }

  const updatedUser = updateUser(existingUser, initialValues);

  return updatedUser;
}
