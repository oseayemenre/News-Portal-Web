import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const posts = await prismadb.posts.findUnique({
      where: {
        id,
      },
    });

    if (!posts) {
      return NextResponse.json(
        { message: "Post not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ posts: posts, success: true }, { status: 200 });
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
