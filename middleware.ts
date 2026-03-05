import { NextResponse, NextRequest } from 'next/server'
 
// Next.js will call the `middleware` function on each request matching the
// configured `matcher`.  The previous implementation exported a function
// named `proxy`, which isn't recognized; renaming to `middleware` fixes the
// warning about a missing function export.
export function middleware(request: NextRequest) {
  // This function can be marked `async` if using `await` inside
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/about/:path*',
}