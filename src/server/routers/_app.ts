import { createRouter } from "../createRouter";
import superjson from "superjson";
import { postRouter } from "./post";
import { userRouter } from "./user";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("post.", postRouter)
  .merge("user.", userRouter);

export type AppRouter = typeof appRouter;
