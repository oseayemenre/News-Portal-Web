import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const category = await prismadb.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: "Category not found", success: false },
        { status: 404 }
      );
    }

    await prismadb.category.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      { message: "Succesfully deleted", success: true },
      { status: 200 }
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
