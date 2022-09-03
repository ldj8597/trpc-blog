import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/routers/_app";
import { createContext } from "../../../server/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,

  /**
   * All errors that occur in a procedure go through the onError method
   * before being sent to the client.
   * Here you can handle or change errors.
   */
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    } else {
      console.error(error);
    }
  },
});
