import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const POST = async (req: NextRequest) => {
  try {
    const { title, description } = await req.json();

    const category = await prismadb.category.findUnique({
      where: {
        categoryName: title,
      },
    });

    if (!category) {
      await prismadb.category.create({
        data: {
          categoryName: title,
          description,
        },
      });
      return NextResponse.json(
        { message: "Category added succesfully", success: true },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Category already exists", success: false },
      { status: 400 }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          message: e.message,
          success: false,
        },
        { status: 500 }
      );
    }

    if (typeof e === "string") {
      return NextResponse.json(
        {
          message: e,
          success: false,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
