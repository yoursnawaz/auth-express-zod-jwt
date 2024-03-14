import { Request, Response } from "express";

export const handleLoginService = async (email: string, password: string) => {
  try {
    return { email, password };
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};
