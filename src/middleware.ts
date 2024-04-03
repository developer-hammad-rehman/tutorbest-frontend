import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function middleware(req:NextRequest) {
    const path = req.nextUrl.pathname;
    const token= cookies().get('token')
   if ((path.startsWith('/dashboard') || path.startsWith('/summary')) && !token) {
    return NextResponse.redirect(new URL('/sigin', req.url));
   }
   else if(path == '/sigin' || path == '/signup'){
    if(token)
    return NextResponse.redirect(new URL('/dashboard', req.url));
   }
   return NextResponse.next();
}