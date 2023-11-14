import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { title, description } = await req.json();

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

    await prismadb.pages.update({
      where: {
        pageName: page.pageName,
        description: page.description,
      },

      data: {
        pageName: title,
        description,
      },
    });

    return NextResponse.json(
      { message: "Page updated succesfully", success: true },
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
