import { createRouter } from "../createRouter";

export const userRouter = createRouter()
  .query("me", {
    async resolve({ ctx }) {},
  })
  .mutation("register", {
    async resolve({ ctx }) {},
  });
