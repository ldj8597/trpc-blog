import { registerUserSchema } from "../../schema/user-schema";
import { createRouter } from "../createRouter";

export const userRouter = createRouter()
  .query("me", {
    async resolve({ ctx }) {},
  })
  .mutation("register", {
    input: registerUserSchema,
    async resolve({ input, ctx }) {
      ctx.prisma;
    },
  });
