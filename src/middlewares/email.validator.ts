import { NextFunction, Request, Response } from 'express';
import validator from 'email-validator';

export async function emailValidator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { email } = req.body;

  if (!validator.validate(email)) {
    return (res.status(400).json({ message: 'Invalid email' }).statusMessage =
      'Bad Request Exception');
  }

  next();
}
