import { NextRequest, NextResponse } from "next/server";
import { prismadb } from "@/utils/prismadb";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();

    const user = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return NextResponse.json(
        { message: "User already exists", success: true },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prismadb.user.create({
      data: {
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User succesfully created", success: true },
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
