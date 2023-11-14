import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const POST = async (req: NextRequest) => {
  try {
    const { title, description, categoryId } = await req.json();

    const sub_category = await prismadb.subCategory.findUnique({
      where: {
        subCategory: title,
      },
    });

    if (!sub_category) {
      await prismadb.subCategory.create({
        data: {
          subCategory: title,
          subCatDescription: description,
          category: { connect: { id: categoryId } },
        },
      });
      return NextResponse.json(
        { message: "Sub Category added succesfully", success: true },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Sub Category already exists", success: false },
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
