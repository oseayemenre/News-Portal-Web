import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const page = await prismadb.pages.findUnique({
      where: {
        id,
      },
    });

    if (!page) {
      return NextResponse.json(
        { message: "Page not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ page: page, success: true }, { status: 200 });
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
