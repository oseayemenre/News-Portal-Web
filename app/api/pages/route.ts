import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const GET = async (req: NextRequest) => {
  try {
    const pages = await prismadb.pages.findMany();

    return NextResponse.json({ pages: pages, success: true }, { status: 200 });
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
