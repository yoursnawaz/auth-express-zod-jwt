import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { genSaltSync, hashSync, compareSync } = bcrypt;
const { sign } = jwt;

const prisma = new PrismaClient();

export const handleSignupService = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const _salt = genSaltSync(10);
    const _hash = hashSync(password, _salt);
    const user = await prisma.user.create({
      data: {
        email: email,
        password: _hash,
      },
    });
    if (user) {
      return res.status(201).json({
        id: user?.id,
        message: 'User created successfully',
      });
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        res.status(409).json({ code: 409, message: 'User already exist' });
      }
    }
  }
};

export const handleLoginService = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // Check if user exist
    const user: any = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({ code: 401, status: false, message: 'Incorrect email or password' });
    }

    // Match password
    const comparePasswords = compareSync(password, user?.password);

    if (!comparePasswords) {
      return res.status(401).json({ code: 401, status: false, message: 'Incorrect email or password' });
    } else {
      const signToken = sign({ id: user?.id, email: user?.email, createdAt: user?.createdAt, updatedAt: user?.updatedAt }, process.env.JWT_SECRET as string, {
        expiresIn: '7d',
      });
      return res.status(200).json({ success: true, code: 200, access_token: signToken });
    }
  } catch (err: any) {
    throw Error(err);
  }
};
