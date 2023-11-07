import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create_comment = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, email, comment, postId } = req.body;

    await prisma.comments.create({
      data: {
        name,
        email,
        comment,
        post: { connect: { id: postId } },
      },
    });

    return res.status(200).json({ message: "Comment succesfully created" });
  } catch (e: unknown) {
    console.log("Error:", e);
    if (e instanceof Prisma.PrismaClientValidationError) {
      res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const delete_comment = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const comment = await prisma.comments.findUnique({
      where: {
        id,
      },
    });

    if (!comment) {
      return res.status(400).json({ message: "Comment doesn't exist" });
    }

    await prisma.comments.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Comment succesfully deleted" });
  } catch (e: unknown) {
    console.log("Error:", e);
    if (e instanceof Prisma.PrismaClientValidationError) {
      res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const get_comments = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const comments = prisma.comments.findMany();

    res.status(200).json({ comments: comments });
  } catch (e: unknown) {
    console.log("Error:", e);
    if (e instanceof Prisma.PrismaClientValidationError) {
      res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
