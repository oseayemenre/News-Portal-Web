import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const sub_category = await prismadb.subCategory.findUnique({
      where: {
        id,
      },
    });

    if (!sub_category) {
      return NextResponse.json(
        { message: "Sub Category not found", success: false },
        { status: 404 }
      );
    }

    await prismadb.subCategory.delete({
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
