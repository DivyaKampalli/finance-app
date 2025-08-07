import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/']);

export default clerkMiddleware(
  async (auth, req) => {

    if (isProtectedRoute(req)) {
      await auth.protect({
        unauthenticatedUrl: `${req.nextUrl.origin}/sign-in`,
      });
    }
    return NextResponse.next();
  }
);

export const config = {
  matcher: ['/'],  
};
