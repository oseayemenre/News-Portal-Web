import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, description } = req.body;

    const category = await prisma.category.findUnique({
      where: {
        categoryName: title,
      },
    });

    if (!category) {
      await prisma.category.create({
        data: {
          categoryName: title,
          description,
        },
      });
      return res.status(200).json({ message: "Category added succesfully" });
    }

    return res.status(400).json({ message: "Category already exists" });
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

export const delete_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      return res.status(400).json({ message: "Category does't exist" });
    }

    await prisma.category.delete({
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

export const update_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      return res.status(200).json({ message: "Category doesn't exist" });
    }

    await prisma.category.update({
      where: {
        categoryName: category.categoryName,
        description: category.description,
      },

      data: {
        categoryName: title,
        description: description,
      },
    });

    return res.status(200).json({ message: "Category updated succesfully" });
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

export const get_categories = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const categories = await prisma.category.findMany();
    return res.status(200).json({ categories: categories });
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

export const get_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      return res.status(400).json({ message: "Category doesn't exist" });
    }

    return res.status(200).json({ categories: category });
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
