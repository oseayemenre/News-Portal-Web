import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const subcategory = await prismadb.subCategory.findUnique({
      where: {
        id,
      },
    });

    if (!subcategory) {
      return NextResponse.json(
        { message: "Sub Category not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { subcategory: subcategory, success: true },
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
