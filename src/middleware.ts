import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/auth(.*)",
    "/favicon.ico",
    "/portal(.*)",
    "/images(.*)",
  ],
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
