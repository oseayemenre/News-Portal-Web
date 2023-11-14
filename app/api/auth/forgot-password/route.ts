import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prismadb } from "@/utils/prismadb";

export const PATCH = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);

    await prismadb.user.update({
      where: {
        email,
      },

      data: {
        hashedPassword: hashPassword,
      },
    });

    return NextResponse.json(
      { message: "Password succesfully updated", success: true },
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
