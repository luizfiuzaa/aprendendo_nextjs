import {  NextRequest, NextResponse } from "next/server";

export function middleware() {
  const autheticated = false;

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
  
  }
  return NextResponse.next();
}