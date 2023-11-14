import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const POST = async (req: NextRequest) => {
  try {
    const { title, description } = await req.json();

    const page = await prismadb.pages.findUnique({
      where: {
        pageName: title,
      },
    });

    if (!page) {
      await prismadb.pages.create({
        data: {
          pageName: title,
          description,
        },
      });
      return NextResponse.json(
        { message: "Page added succesfully", success: true },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Page already exists", success: false },
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
