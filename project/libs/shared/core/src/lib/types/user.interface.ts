import { UserRole } from '../enum/user-role.enum';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  role: UserRole;
  avatarUrl?: string;
}
