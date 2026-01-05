import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const autheticated = false;

  if (request.nextUrl.pathname.startsWith("/dashboard") && !autheticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
