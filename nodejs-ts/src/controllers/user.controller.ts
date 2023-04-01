import { NextFunction, Request, Response } from 'express';
import { prisma } from '../utils/prisma';

export function exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    next(err);
  }
};
