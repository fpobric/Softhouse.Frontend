import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith("/account")) {
      //   return NextResponse.rewrite(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/account/:path*"],
};
