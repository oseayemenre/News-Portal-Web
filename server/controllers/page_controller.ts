import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create_page = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, details } = req.body;

    const page = await prisma.pages.findUnique({
      where: {
        pageName: title,
      },
    });

    if (!page) {
      await prisma.pages.create({
        data: {
          pageName: title,
          description: details,
        },
      });
      return res.status(200).json({ message: "Page created succesfully" });
    }

    return res.status(400).json({ message: "Page already exists" });
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

export const delete_page = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const page = await prisma.pages.findUnique({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(400).json({ message: "Page does't exist" });
    }

    await prisma.pages.delete({
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

export const update_page = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { title, details } = req.body;

    const page = await prisma.pages.findUnique({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(200).json({ message: "Page doesn't exist" });
    }

    await prisma.pages.update({
      where: {
        pageName: page.pageName,
        description: page.description,
      },

      data: {
        pageName: title,
        description: details,
      },
    });

    return res.status(200).json({ message: "Page updated succesfully" });
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

export const get_pages = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const page = await prisma.pages.findMany();
    return res.status(200).json({ pages: page });
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

export const get_page = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const page = await prisma.pages.findUnique({
      where: {
        id,
      },
    });

    if (!page) {
      return res.status(400).json({ message: "Page doesn't exist" });
    }

    return res.status(200).json({ page: page });
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
