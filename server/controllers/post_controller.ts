import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create_post = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      postTitle,
      postDetails,
      postImage,
      categoryId,
      adminId,
      subCategoryId,
    } = req.body;

    const post = await prisma.posts.findUnique({
      where: {
        postTitle,
      },
    });

    if (!post) {
      await prisma.posts.create({
        data: {
          postTitle,
          postDetails,
          postImage,
          category: { connect: { id: categoryId } },
          admins: { connect: { id: adminId } },
          subCategory: { connect: { id: subCategoryId } },
        },
      });
      return res.status(200).json({ message: "Post created succesfully" });
    }

    return res.status(400).json({ message: "Post already exists" });
  } catch (e: unknown) {
    console.error("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const delete_post = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const post = await prisma.posts.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return res.status(400).json({ message: "Post does't exist" });
    }

    await prisma.posts.delete({
      where: {
        id,
      },
    });

    return res.json({ message: "Sucessfully deleted" }).status(200);
  } catch (e: unknown) {
    console.error("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const update_post = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { postTitle, postDetails, postImage } = req.body;

    const post = await prisma.posts.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return res.status(200).json({ message: "Post doesn't exist" });
    }

    await prisma.posts.update({
      where: {
        postTitle: post.postTitle,
        postDetails: post.postDetails,
        postImage: post.postImage,
      },

      data: {
        postTitle,
        postDetails,
        postImage,
      },
    });

    return res.status(200).json({ message: "Post updated succesfully" });
  } catch (e: unknown) {
    console.error("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const get_posts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const posts = await prisma.posts.findMany();
    return res.status(200).json({ posts: posts });
  } catch (e: unknown) {
    console.error("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const get_post = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const post = await prisma.posts.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return res.status(400).json({ message: "Post doesn't exist" });
    }

    return res.status(200).json({ post: post });
  } catch (e: unknown) {
    console.error("Error:", e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: "Validation error" });
    }

    if (typeof e === "string") {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
