import { boolean, object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({ required_error: 'Name is required' }),
    email: string({ required_error: 'Email is required' }).email('Invalid email'),
    password: string({ required_error: 'Password is required' })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    phone: string({ required_error: 'Phone is required' }).regex(/^\d+$/).min(10).max(14),
    isVerified: boolean().optional(),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];
