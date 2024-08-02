// import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// export default async function middleware( request: NextRequest ) {
//   const sessionCookie = cookies().get('session');
//   if (sessionCookie) {
//     return NextResponse.next()
//   }
//     // Redirect to login page with a message
//   return NextResponse.redirect(new URL('/login', request.url))
// }

// export const config = {
//   matcher: '/home/:path*',
// }

import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const sessionCookie = await request.cookies.get('session');
  if (await sessionCookie) {
    return NextResponse.next();
  }

  // Redirect to login page with a message
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/home/:path*',
};


// // 1. Specify protected and public routes
// const protectedRoutes = ['/home'];
// const publicRoutes = ['/login', '/signup', '/'];

// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path);

//   // 3. Decrypt the session from the cookie
//   const cookie = cookies().get('session')?.value;
//   // const session = await decrypt(cookie);

//   // 4. Redirect
//   if (isProtectedRoute && cookie) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl));
//   }

//   if (
//     isPublicRoute &&
//     cookie &&
//     !req.nextUrl.pathname.startsWith('/home')
//   ) {
//     return NextResponse.redirect(new URL('/home', req.nextUrl));
//   }

//   return NextResponse.next();
// }