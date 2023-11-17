import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/auth";
  const isPrivatePath = path === "/profile";

  const token = request.cookies.get("next-auth.session-token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}

export const config = {
  matcher: ["/auth", "/profile/:path*"],
};
