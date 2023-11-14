import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, comment, postId } = await req.json();

    await prismadb.comments.create({
      data: {
        name,
        email,
        comment,
        post: { connect: { id: postId } },
      },
    });
    return NextResponse.json(
      { message: "Comment created succesfully", success: true },
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
