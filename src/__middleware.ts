// import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

// const publicRoutes = [
//   {
//     path: "/sign-in",
//     whenAuthenticate: "redirect",
//   },
//   {
//     path: "/sign-up",
//     whenAuthenticate: "redirect",
//   },
// ] as const;

// const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in";

// export const middleware = (request: NextRequest) => {
//   // console.log("funcionou");
//   const path = request.nextUrl.pathname;
//   const publicRoute = publicRoutes.find((route) => route.path === path);
//   const authToken = request.cookies.get("next-auth.session-token");

//   if (!authToken && publicRoute) {
//     return NextResponse.next();
//   }
//   if (!authToken && !publicRoute) {
//     const redirectUrl = request.nextUrl.clone();

//     redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

//     return NextResponse.redirect(redirectUrl);
//   }

//   if (
//     authToken &&
//     publicRoute &&
//     publicRoute?.whenAuthenticate === "redirect"
//   ) {
//     const redirectUrl = request.nextUrl.clone();
//     redirectUrl.pathname = "/";
//     return NextResponse.redirect(redirectUrl);
//   }

//   if (authToken && !publicRoute) {
//     // checar se o jwt nao esta expirado
//     // se sim, remover o cookie e redirecionar o usuário para /sign-in

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// };

// export const config: MiddlewareConfig = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
