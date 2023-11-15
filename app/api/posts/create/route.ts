import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";

export const POST = async (req: NextRequest) => {
  try {
    const readTime = Math.floor(1 + Math.random() * 5);

    const {
      postTitle,
      postDetails,
      postImage,
      postCategory,
      categoryId,
      adminId,
      subCategoryId,
    } = await req.json();

    const post = await prismadb.posts.findUnique({
      where: {
        postTitle,
      },
    });

    if (!post) {
      await prismadb.posts.create({
        data: {
          postTitle,
          postDetails,
          postImage,
          postCategory,
          readTime,
          category: { connect: { id: categoryId } },
          admins: { connect: { id: adminId } },
          subCategory: { connect: { id: subCategoryId } },
        },
      });
      return NextResponse.json(
        { message: "Post added succesfully", success: true },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Post already exists", success: false },
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
