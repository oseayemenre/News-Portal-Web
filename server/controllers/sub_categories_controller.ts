import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create_sub_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, description, categoryId } = req.body;

    const sub_category = await prisma.subCategory.findUnique({
      where: {
        subCategory: title,
      },
    });

    if (!sub_category) {
      await prisma.subCategory.create({
        data: {
          subCategory: title,
          subCatDescription: description,
          category: { connect: { id: categoryId } },
        },
      });
      return res
        .status(200)
        .json({ message: "Sub category added succesfully" });
    }

    return res.status(400).json({ message: "Sub category already exists" });
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

export const delete_sub_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const sub_category = await prisma.subCategory.findUnique({
      where: {
        id,
      },
    });

    if (!sub_category) {
      return res.status(400).json({ message: "Category does't exist" });
    }

    await prisma.subCategory.delete({
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

export const update_sub_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const sub_category = await prisma.subCategory.findUnique({
      where: {
        id,
      },
    });

    if (!sub_category) {
      return res.status(200).json({ message: "Sub category doesn't exist" });
    }

    await prisma.subCategory.update({
      where: {
        subCategory: sub_category.subCategory,
        subCatDescription: sub_category.subCatDescription,
      },

      data: {
        subCategory: title,
        subCatDescription: description,
      },
    });

    return res
      .status(200)
      .json({ message: "Sub category updated succesfully" });
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

export const get_sub_categories = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sub_categories = await prisma.subCategory.findMany();
    return res.status(200).json({ subCategories: sub_categories });
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

export const get_sub_category = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const sub_category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!sub_category) {
      return res.status(400).json({ message: "Sub category doesn't exist" });
    }

    return res.status(200).json({ subCategories: sub_category });
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
