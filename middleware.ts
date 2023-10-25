import { NextRequest } from "next/server";

let locales = ["en", "pl"];

function withHostFromHeaders(middleware: any) {
  return (...args: any) => {
    let { nextUrl, headers, url } = args[0];
    nextUrl.host = headers.get("Host") ?? nextUrl.host;
    nextUrl.port = process.env.NODE_ENV === "production" ? 443 : nextUrl.port;
    url = nextUrl.href;
    return middleware(...args);
  };
}

export default withHostFromHeaders((req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = "pl";
  req.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(req.nextUrl);
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|font|images|favicon.ico|sw.js).*)",
  ],
};
