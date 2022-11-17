import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UsersRoles } from '../events/types/users-roles';


interface UserPayload {
  id: string;
  email: string;
  mobile: number;
  fiName: string;
  laName: string;
  role: UsersRoles;
}

// Add an optional prop: currentUser
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
