import { createRouter } from "../createRouter";

export const postRouter = createRouter().query("posts", {
  async resolve({ ctx }) {},
});
