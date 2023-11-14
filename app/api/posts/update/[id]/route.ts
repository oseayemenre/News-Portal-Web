import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { postTitle, postDetails, postImage } = await req.json();

    const post = await prismadb.posts.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Post not found", success: false },
        { status: 404 }
      );
    }

    await prismadb.posts.update({
      where: {
        postTitle: post.postTitle,
        postDetails: post.postDetails,
        postImage: post.postImage,
      },

      data: {
        postTitle,
        postDetails,
        postImage,
      },
    });

    return NextResponse.json(
      { message: "Post updated succesfully", success: true },
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
