import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { registerUserSchema } from "../../schema/user-schema";
import { createRouter } from "../createRouter";

export const userRouter = createRouter()
  .query("me", {
    async resolve({ ctx }) {},
  })
  .mutation("register", {
    input: registerUserSchema,
    async resolve({ input, ctx }) {
      const { email, name } = input;

      try {
        return await ctx.prisma.user.create({
          data: {
            email,
            name,
          },
        });
      } catch (error) {
        if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "User already exists",
          });
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    },
  });
