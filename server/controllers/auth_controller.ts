import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.admins.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 12);

      await prisma.admins.create({
        data: {
          username,
          password: hashedPassword,
        },
      });

      return res.status(200).json({ message: "User succesfully created" });
    }

    return res.json({ message: "User already exists" }).status(400);
  } catch (e: unknown) {
    console.log("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation Error" });
    }
    if (typeof e === "string") {
      return res.status(500).json({ message: e });
    }
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.admins.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User doesn't exist" });
    }

    const checkpassword = await bcrypt.compare(password, user.password);

    if (!checkpassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token_data = {
      username,
    };

    const token = jwt.sign(token_data, process.env.TOKEN_SECRET || "", {
      expiresIn: "15m",
    });

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ message: "User succesfully logged in" });
  } catch (e: unknown) {
    console.log("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation Error" });
    }
    if (typeof e === "string") {
      return res.status(500).json({ message: e });
    }

    return res.json(e);
  }
};

export const users = async (req: express.Request, res: express.Response) => {
  try {
    const users = await prisma.admins.findMany();

    return res.status(200).json({ users: users });
  } catch (e: unknown) {
    console.log("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation Error" });
    }
    if (typeof e === "string") {
      return res.status(500).json({ message: e });
    }
  }
};

export const forgotPassword = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.admins.update({
      where: {
        username,
      },

      data: {
        password: hashPassword,
      },
    });

    return res.status(200).json({ message: "Password Succesfully updated" });
  } catch (e: unknown) {
    console.log("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation Error" });
    }
    if (typeof e === "string") {
      return res.status(500).json({ message: e });
    }
  }
};
