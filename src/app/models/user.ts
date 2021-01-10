export type UserModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
};
